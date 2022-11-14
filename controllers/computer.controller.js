const db = require("../models");
const Computer = db.computers;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {

    try {
        Computer.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving Computer."
                });
            });
    } catch(error) {
        console.log(error);
    }

};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Computer.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Computer with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Computer with id=" + id
            });
        });
}

// exports.updateComputer = (req, res) => {
//     const computer = {
//         name: req.body.name,
//         producer: req.body.producer,
//         date: req.body.date
//     };
//
//     const id = req.params.id;
//     Computer.update(id,computer)
//         .then(data => {
//             if (data) {
//                 res.send(data);
//             } else {
//                 res.status(404).send({
//                     message: `Cannot update Computer`
//                 });
//             }
//         })
// }
exports.update = (req, res) => {
    const computer = {
        name: req.body.name,
        producer: req.body.producer,
        date: req.body.date
    };

    const id = req.params.id;

    Computer.update(computer, {
        where: { id: id }
    })
        .then(data => {
            if (num == 1) {
                res.send({
                    message: "Updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating"
            });
        });
};

exports.create = (req, res) => {
    const computer = {
        name: req.body.name,
        producer: req.body.producer,
        date: req.body.date
    };

    Computer.create(computer)
        .then(data => {
            res.send(data);
        });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Computer.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Computer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Car with id=${id}. Maybe Car was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Car with id=" + id
            });
        });
};
