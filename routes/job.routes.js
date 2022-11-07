const express = require('express');
const Job = require('../models/Job.model');
const router = express.Router();
const User = require('../models/User.model')

/* GET Create Job page */


router.get("/create", (req, res, next) => res.render("job/create"));

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

module.exports = router;