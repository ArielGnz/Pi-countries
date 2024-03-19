
const {createActivitiesDB } = require("../controllers/postControllers");

const createActivities = async (req, res) => {

    const {name, difficulty, duration, season, country} = req.body;
   
    try {
        if (!Array.isArray(country)) {
            throw new Error("Country debe ser un array");
        }
        const response = await createActivitiesDB(name, difficulty, duration, season, country);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// const postActivitiesHandler = async (req, res) => {
//     const { name, difficulty, duration, season, countries } = req.body;
  
//     try {
//       const newActivity = await createActivity(
//         name,
//         difficulty,
//         duration,
//         season,
//         countries
//       );
//       res.status(200).json(newActivity);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   };

module.exports = {createActivities }