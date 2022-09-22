const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.clientes = require("./cliente.model.js")(sequelize, Sequelize);
db.servicios = require("./servicio.model.js")(sequelize, Sequelize);
db.fotos = require("./foto.model.js")(sequelize, Sequelize);


//Relaciones entre tablas:
/*db.servicios.hasMany(db.fotos, { as: "fotos" });
db.foto.belongsTo(db.servicios, {
  foreignKey: "idServicio",
  as: "servicio",
});*/
db.servicios.hasMany(db.fotos, {
    foreignKey: 'idServicio',
    sourceKey: 'idServicio'
});
db.fotos.belongsTo(db.servicios, {
  foreignKey: "idServicio",
  targetId: "idServicio"
});
//Relaciones entre tablas:

module.exports = db;