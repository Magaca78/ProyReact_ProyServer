const express = require("express");
const usersRouter = require(".");

function routerApi(app){
    const router = express.Router();
    /* Parte del endpoint estático: http://localhost:3000/api/v1 */
    app.use("/api/v1", router);
    /* Endpoint: http://localhost:3000/api/v1/users */
    router.use("/users", usersRouter);
}

module.exports = routerApi;