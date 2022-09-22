module.exports = (sequelize, Sequelize) => {
    const Foto = sequelize.define("fotos", {
      idFoto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      url: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
    }, {
      timestamps: false
    }
  
    );
    return Foto;
  };