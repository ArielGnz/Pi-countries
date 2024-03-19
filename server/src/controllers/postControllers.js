

const {Activity, Country, activity_country} = require("../db");

const createActivitiesDB = async (name, difficulty, duration, season, country) => {
    const res = await Activity.create({name, difficulty, duration, season});

    for (let i = 0; i < country.length ; i++){
        let CountryId = country[i];
        let ActivityId = res.id;
        await activity_country.create({ActivityId, CountryId});
    }
    
    return res;
}

module.exports = {createActivitiesDB};

  
