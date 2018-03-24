const express = require("express");
const { json } = require("body-parser");

const app = express();

//Port
const port = 3001;

//Importing dog_controllers for endpoints
const dc = require("./dog_controller/dog_controller");

//Middlewares
app.use(json());

//Endpoints
app.get("/api/dog", dc.getNewPup);

app.listen(port, () => console.log(`Listening on port ${port}`))