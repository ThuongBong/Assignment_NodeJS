module.exports = (sequelize, Sequelize) => {
    const Computer = sequelize.define("computers", {
        name: {
            type: Sequelize.STRING
        },
        producer: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATE
        }
    });

    return Computer;
};