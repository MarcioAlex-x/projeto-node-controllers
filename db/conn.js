const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('tarefas','root','root',{
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Sequelize')
}catch(err){
    console.log('Erro no sequilize')
}

module.exports = sequelize
