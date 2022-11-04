const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const Job = require('../models/Job.model');

/* GET User Dashboard */
router.get("/joblist", async (req, res, next) => {
    console.log(req.session.currentUser._id);
    try {
        //const {id} = req.params;
        const {id} = req.session.currentUser._id;
        //const jobs = await Job.findById(id).populate('jobList');
        //TODO
        const jobs = await User.findById(id).populate('jobList');
        res.render("user/main", {jobs});
        //res.render("user/main");
    } catch (error) {
        console.log(error);
        next(error);
    }
    
  });

module.exports = router;