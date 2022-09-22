module.exports = (sequelize, Sequelize) => {
    const Servicio = sequelize.define("servicios", {
      idServicio: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      duracion: {
        type: Sequelize.STRING
      },
      descripcion: {
          type: Sequelize.STRING
      },      
    }, {
      timestamps: false
    }
  
    );
    return Servicio;
  };