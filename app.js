const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const UserSchema = require('./src/models/user.model');
const routes = express.Router();
const {API_VERSION} = require("./config");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/user',(req,res) =>{
    const user = UserSchema(req.body)
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
});

/* Configuracion de los header HTTP */
module.exports = app;
