const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const Job = require('../models/Job.model');

/* GET User Dashboard */
router.get("/joblist", async (req, res, next) => {

    try {

        //Validation Redirection for no Session
        if (!req.session.currentUser) {
            return res.render("auth/login");
        }

        const id = req.session.currentUser._id;
        const jobs = await User.findById(id).populate('jobList');

        //! jobs is actually user
        const jobsArray = jobs.jobList; //each element here is an OBJECT

        //! -> Dynamic Variant of 'If Filter is Inserted'
        if(req.query.filter){

            let filterValue = req.query.filter;

            //Filter by Primary Values
            const filtCompany = jobsArray.filter(element => element.company.includes(`${filterValue}`));
            const filtTitle = jobsArray.filter(element => element.title.includes(`${filterValue}`));
            const filtStatus = jobsArray.filter(element => element.status.includes(`${filterValue}`));

            //Filter by Secondary Values, in addition

            const filtLocation = jobsArray.filter(element => element.location.includes(`${filterValue}`));
            const filtWorkplace = jobsArray.filter(element => element.workplace.includes(`${filterValue}`));
            const filtWebsite = jobsArray.filter(element => element.website.includes(`${filterValue}`));
            const filtContact = jobsArray.filter(element => element.contact.includes(`${filterValue}`));

            //Filter by Tertiary Values, in addition

            const filtDescrip = jobsArray.filter(element => element.description.includes(`${filterValue}`));
            const filtNotes = jobsArray.filter(element => element.notes.includes(`${filterValue}`));
            const filtDate = jobsArray.filter(element => element.date.toString().includes(`${filterValue}`));
            
            //Group all results in Array, then push to Set

            const filterArr = filtCompany.concat(
                filtTitle, filtStatus, filtLocation, filtWorkplace, 
                filtWebsite, filtContact, filtDescrip, filtNotes, filtDate
            );
            
            const filterSet = new Set(filterArr);

            //! Render Details if only 1 Result
            if(filterSet.size === 1) {

                const primeId = filterArr[0]._id;
                
                const singleResult = await Job.findById(primeId);

                return res.render('job/details', singleResult);
            } else {
                return res.render("user/main", {jobs: filterSet});
            };
        } else {
            return res.render("user/main", {jobs: jobsArray});
        };
    } catch (error) {
        console.log(error);
        next(error);
    };
    
});

module.exports = router;