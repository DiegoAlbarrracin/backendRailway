const db = require("../models");
const Foto = db.fotos;
const Op = db.Sequelize.Op; //Op contiene los operadores que brinda sequelize para hacer querys de CRUD

// Create and Save a new foto
exports.create = (req, res) => {
    // Validate request
    /*if (!req.body.nombre) {  //es para validar, como ejemplo
      res.status(400).send({
        message: "nombre can not be empty!"
      });
      return;
    }*/
    // Create a foto
    const foto = {    
      //published: req.body.published ? req.body.published : false //ternario Si la condición es true, el operador retorna el valor de la expr1; de lo contrario, devuelve el valor de expr2.
      url: req.body.url,
      descripcion: req.body.descripcion,
      idServicio: req.body.idServicio    //Agregue idServicio, SI O SI tiene que crearse la foto con un servicio asociado
    };
    // Save foto in the database
    Foto.create(foto)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the foto."
        });
      });
  };

// Retrieve all fotos from the database.
exports.findAll = (req, res) => {
    //const nombre = req.query.nombre;
    //var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

    Foto.findAll(/*{ where: condition }*/)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Fotos."
        });
      });
  };
// Find a single Foto with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Foto.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Foto with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Foto with id=" + id
        });
      });
  };
// Update a Foto by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Foto.update(req.body, {
      where: { idFoto: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Foto was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Foto with id=${id}. Maybe Foto was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Foto with id=" + id
        });
      });
  };
// Delete a Foto with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Foto.destroy({
      where: { idFoto: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Foto was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Foto with id=${id}. Maybe Foto was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Foto with id=" + id
        });
      });
  };
  

// Find all published Fotos este es mas custom ya, falta modificar
exports.findAllPublished = (req, res) => {
    Foto.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Fotos."
        });
      });
  };