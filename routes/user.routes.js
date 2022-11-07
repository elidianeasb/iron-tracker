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

        //const jobs = await Job.findById(id).populate('jobList');
        //TODO
        const jobs = await User.findById(id).populate('jobList');
        console.log(jobs)
        res.render("user/main", {jobs: jobs.jobList});
        //res.render("user/main");
    } catch (error) {
        console.log(error);
        next(error);
    }
    
  });

module.exports = router;