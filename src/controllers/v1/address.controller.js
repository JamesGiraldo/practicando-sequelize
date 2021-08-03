const { response } = require("express");
const Validator = require("fastest-validator");
const v = new Validator();
const bcrypt = require("bcryptjs");

const models = require("../../../infrastructure/orm/sequelize/models");
const MODELS = require("../../../config/tablas");

// GET /api/address
const index = async (req, res = response) => {
  await models[MODELS.direccions]
    .findAll({
      include: {
        model: models[MODELS.users],
        attributes: ["id", "nombre", "username", "imageUrl"],
      },
      attributes: ["id", "calle"]
    })
    .then((address) => {
      res.status(201).json({
        ok: true,
        [MODELS.direccions]: address,
        total: address.length,
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

  await models[MODELS.direccions].create(cuerpo)
    .then((address) => {
      res.status(201).json({
        ok: true,
        message: "Direccion creada correctamente",
        [MODELS.direccions]: address,
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
