module.exports = (sequelize, type) => {
    return sequelize.define("Contact", {
        // the routeName gets saved as a string
        // routeName: Sequelize.STRING,
        // the name of the character (a string)
        name: type.STRING,
        // the character's role (a string)
        email: type.STRING,
        // the character's age (a string)
        subject: type.STRING,

        // and the character's force points (an int)
        message: type.STRING
    }, {
        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true
    }
    )
};
