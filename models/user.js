// Requiring bcrypt for password hashing. Using the bcryptjs version as 
//the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
//
// Creating our User model
//Set it as export because we will need it required on the server
module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define("User", {
        // The email cannot be null, and must be a proper email before creation
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        hooks: {
            beforeCreate: function (user) {
                user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
            }
        }
    });

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    return User;
}