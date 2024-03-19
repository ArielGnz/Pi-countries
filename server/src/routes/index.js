const { Router } = require("express");
const {allCountries, detailCountry, allActivities} = require("../handlers/getHandlers");
const { createActivities } = require("../handlers/postHandlers");

const router = Router();

router.get("/countries", allCountries);
router.get("/countries/:id", detailCountry);
router.get("/activities", allActivities);
router.post("/activities", createActivities);
//router.post("/activities", postActivitiesHandler);

module.exports = router;
