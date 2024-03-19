const {Country, Activity, activity_country} = require("../db");

const allCountriesDB = async () => {
    const res = await Country.findAll({include:[{model : Activity, attributes: ["name"],through:{attributes: []} }]});
    return (res);
}

const nameCountryDB = async(name) => {
    const res = await Country.findAll({where: {name:name}});
    return res;    
} 

const allActivitiesDB = async () => {
    const res = await Activity.findAll();
    return res;
}

const detailCountryDB = async (id) => {
    const res = await Country.findByPk(id);
    return res;
}

module.exports = {allCountriesDB, allActivitiesDB, nameCountryDB, detailCountryDB}

