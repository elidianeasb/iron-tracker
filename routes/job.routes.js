const express = require('express');
const Job = require('../models/Job.model');
const router = express.Router();
const User = require('../models/User.model')


/* GET Create Job page */


router.get("/create", (req, res, next) => {

    //Validation Redirection for no Session
    if (!req.session.currentUser) {
        return res.render("auth/login");
    }

    res.render("job/create");
});

router.post("/create", async (req, res, next) => {
    try {

        const username = req.session.currentUser.username;
        console.log(req.session.currentUser);
        
        const {title, company, description, date, location, workplace, status, website, webUrl, contact, notes} = req.body;

        const createdJob = await Job.create({title, company, description, date, location, workplace, status, website, webUrl, contact, notes});

        await User.findOneAndUpdate({username}, { $push: { jobList: createdJob._id } });
        
        res.redirect(`/joblist`);

    } catch (error) {
        console.log(error);
        next(error);
    }
});


/* DETAILS Route */


router.get('/details/:id', async (req, res, next) => {
    try {
        const { id } = req.params;  
        console.log(id)

        const job = await Job.findById(id);
        console.log(job)

        res.render('job/details', job);
        
    } catch (error) {
        console.log(error);
        next(error);        
    };
});


/* EDIT Route */


router.get("/edit/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id);

        res.render('job/edit', job);

    } catch (error) {
        console.log(error);
        next(error);
    };
});

router.post("/edit/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const {title, company, description, date, location, workplace, status, website, webUrl, contact, notes} = req.body;

        const updatedJob = await Job.findByIdAndUpdate(id, {title, company, description, date, location, workplace, status, website, webUrl, contact, notes});

        res.redirect(`/details/${updatedJob._id}`);

    } catch (error) {
        console.log(error);
        next(error);
    };
});

/* DELETE Route */

router.post('/delete/:id', async(req, res, next) => {
    try {
        const { id } = req.params;
        await Job.findByIdAndRemove(id);
        res.redirect(`/joblist`);
        
    } catch (error) {        
        consolelog(error);
        next(error);        
    }
})


module.exports = router;