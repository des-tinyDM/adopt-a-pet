const axios = require("axios");

//Initial vals
let adoptable = [];

module.exports = {
    getNewPup: (req, res) => {
        axios
        .get(`https://dog.ceo/api/breeds/image/random`)
        .then(response => {
            adoptable = response.data.message
            console.log(response.data.message);
            // adoptable.push(response.data.message)
            res.status(200).json(adoptable);
         })
    
    }
}