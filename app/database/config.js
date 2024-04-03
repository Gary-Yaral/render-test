const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_URI)

sequelize.authenticate()
  .then(() =>{
    console.log('Logged')
  })

module.exports = sequelize