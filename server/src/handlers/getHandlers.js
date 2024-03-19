const {nameCountryDB, detailCountryDB, allCountriesDB, allActivitiesDB} = require("../controllers/getControllers");

const allCountries = async (req, res) => {
   
    const {name} = req.query;
    try {
        if (name){
            const response = await nameCountryDB(name);
            res.status(200).json(response);
        } else {
            const response = await allCountriesDB();
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }

}

const detailCountry = async (req, res) => {
    
    const {id} = req.params;
    try {
        const response = await detailCountryDB(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

const allActivities = async (req, res) => {
    try {
        const response = await allActivitiesDB();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {allCountries, detailCountry, allActivities}