const sequelize = require('../config/config')
const { Sequelize, DataTypes } = require('sequelize');
const { users } = require('./userModel')

const userToken = sequelize.define('userToken', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    user_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references: {
            model : users,
            key : 'id'
        }
    },
    token : {
        type : DataTypes.STRING,
        allowNull : false,
    },
},{
    indexes : [{
        name : 'index_token',
        fields : ['token']
    }]
}) 


module.exports = { userToken }