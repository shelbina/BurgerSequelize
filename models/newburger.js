
module.exports = function(sequelize, DataTypes) {
    var newburger = sequelize.define("newburger", {
        burger_name:DataTypes.STRING,
        devoured: {
            type:DataTypes.BOOLEAN,
            defaultValue:false
        }        
    });
    return newburger;
};



