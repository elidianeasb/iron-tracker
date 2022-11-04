const express = require('express');
const Job = require('../models/Job.model');
const router = express.Router();

/* GET Create Job page */


router.get("/create", (req, res, next) => res.render("job/create"));

router.post("/create", async (req, res, next) => {
    try {
        const {title, company, description, date, location, workplace, status, website, webUrl, contact, notes} = req.body;

        const createdJob = await Job.create({title, company, description, date, location, workplace, status, website, webUrl, contact, notes});

        res.redirect(`/joblist`);

    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;