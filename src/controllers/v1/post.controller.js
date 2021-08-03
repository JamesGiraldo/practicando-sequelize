const { response } = require("express");

const models = require("../../../infrastructure/orm/sequelize/models");
const MODELS = require("../../../config/tablas");

// GET /api/address
const index = async (req, res = response) => {
  await models[MODELS.posts]
    .findAll({
      include: {
        model: models[MODELS.users],
        attributes: ["id", "nombre", "username", "imageUrl"],
      },
      attributes: { exclude: ["createdAt", "updatedAt", "userId", "UserId"] },
    })
    .then((posts) => {
      res.status(201).json({
        ok: true,
        [MODELS.posts]: posts,
        total: posts.length,
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        error: err,
      });
    });
};

// CREATE /api/posts
const create = async (req, res = response) => {
  /** obtener el valor del body  */
  const cuerpo = { ...req.body };

  await models[MODELS.posts].create(cuerpo)
    .then((post) => {
      res.status(201).json({
        ok: true,
        message: "Publicacion creada correctamente",
        [MODELS.posts]: post,
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
