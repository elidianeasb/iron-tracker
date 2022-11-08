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

        const jobsArray = jobs.jobList; //each element here is an OBJECT

/*         if(req.query.filter){
            //! IF FILTER IS INSERTED
            let filterValue = req.query.filter;

            const filteredJobArray = jobsArray.filter(element => element.company == filterValue)

            res.render("user/main", {jobs: filteredJobArray});
        }; */

        //! -> Dynmaic Variant of If Filter is Inserted
        if(req.query.filter){

            let filterValue = req.query.filter;

            const filterArrCompany = jobsArray.filter(element => element.company == filterValue);
            const filterArrTitle = jobsArray.filter(element => element.title == filterValue);
            const filterArrStatus = jobsArray.filter(element => element.status[0] == filterValue);

            const filterArr = filterArrCompany.concat(filterArrTitle, filterArrStatus);

            const filterSet = new Set(filterArr);

            res.render("user/main", {jobs: filterSet});

        }

        //! jobs is actually user
        res.render("user/main", {jobs: jobsArray});

    } catch (error) {
        console.log(error);
        next(error);
    };
    
});

/* FILTER User Dashboard */

/* router.get("/joblist/filter", async (req, res, next) => {
    try {
        const { filterValue } = req.query;
    } catch (error) {
        
    }
}) */

module.exports = router;