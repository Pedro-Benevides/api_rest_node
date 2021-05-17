const db = require('../database/db')

const Surfista=db.sequelize.define('surfista',{
    numero:{
        type:db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nome:{
        type: db.Sequelize.STRING,
        require:true,
        allowNull: false,
        unique: true
    },
    país:{
        type:db.Sequelize.STRING,
        require:true
    }
})

//Surfista.sync({force:true})
module.exports=Surfista