const { response } = require("express");

const models = require("../../../infrastructure/orm/sequelize/models");
const MODELS = require("../../../config/tablas");

// GET /api/bands
const index = async (req, res = response) => {
  await models[MODELS.bands]
    .findAll({
      include: {
        model: models[MODELS.users],
        attributes: ["id", "nombre", "username", "imageUrl"],        
      },      
      attributes: { exclude: ["User_bands", "createdAt", "updatedAt"] },
    })
    .then((bands) => {
      res.status(201).json({
        ok: true,
        [MODELS.bands]: bands,
        total: bands.length,
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        error: err,
      });
    });
};

// CREATE /api/address
const create = async (req, res = response) => {
  /** obtener el valor del body  */
  const cuerpo = { ...req.body };

  await models[MODELS.bands].create(cuerpo)
    .then( band => {
      res.status(201).json({
        ok: true,
        message: "Banda creada correctamente",
        [MODELS.bands]: band,
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        error: err,
      });
    });
};

module.exports = {
  index: index,
  create: create,
};
