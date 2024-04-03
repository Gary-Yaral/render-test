const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: 'postgres'
  /*  dialectOptions: {
    ssl: true
  } */
})

sequelize.authenticate()
  .then(() =>{
    console.log('Logged')
  })

module.exports = sequelize