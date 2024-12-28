const { DataTypes } = require('sequelize')
const db = require('../db/conn')

module.exports = db.define('tarefas',{
    titulo:{
        type: DataTypes.STRING
    },
    descricao:{
        type: DataTypes.TEXT
    },
    status:{
        type: DataTypes.ENUM('pendente','andamento','concluido')
    }
})
