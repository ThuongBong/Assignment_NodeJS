const cars = require("../controllers/computer.controller");

module.exports = app => {
    const computers = require("../controllers/computer.controller");

    var router = require("express").Router();

    router.get("/", computers.findAll);
    router.post("/", computers.create);
    router.get("/:id", computers.findOne);
    router.put("/:id", computers.update);
    router.delete("/:id", computers.delete);

    app.use('/api/computers', router);
}