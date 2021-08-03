const { response } = require("express");
const Validator = require("fastest-validator");
const v = new Validator();
const bcrypt = require("bcryptjs");

const models = require("../../../infrastructure/orm/sequelize/models");
const MODELS = require("../../../config/tablas");

// GET /api/users
const index = async (req, res = response) => {
  await models[MODELS.users]
    .findAll({
      attributes: { exclude: ["password", "createdAt", "updatedAt", "active"] },
      order: [["createdAt", "ASC"]],
      include: [
        {
          model: models[MODELS.direccions],
          attributes: ["calle"],
        },
        {
          model: models[MODELS.posts],
          attributes: ["title", "cuerpo"],
        },
      ],
    })
    .then((users) => {
      res.status(201).json({
        ok: true,
        users,
        total: users.length,
      });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        error: err,
      });
    });
};

// GET /api/users/:id/direcciones -> direcciones de un usuario
const showDireccion = async (req, res = response) => {
  /** obtener el valor del id del usuario por los parametros  */
  const id = req.params.id;

  await models[MODELS.users]
    .findByPk(id)
    .then(async (user) => {
      await user
        .getDireccion({
          attributes: { exclude: ["createdAt", "updatedAt", "UserId"] },
        })
        .then((direccion) => {
          res.status(201).json({
            ok: true,
            direccion,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        message: "Usuario no encontrado.",
        error: err,
      });
    });
};

// GET /api/users/:id/publicaciones -> publicaciones de un usuario
const showPosts = async (req, res = response) => {
  /** obtener el valor del id del usuario por los parametros  */
  const id = req.params.id;

  await models[MODELS.users]
    .findByPk(id)
    .then(async (user) => {
      await user
        .getPosts({
          attributes: { exclude: ["createdAt", "updatedAt", "UserId"] },
        })
        .then((post) => {
          res.status(201).json({
            ok: true,
            post,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        message: "Usuario no encontrado.",
        error: err,
      });
    });
};

// GET /api/users/:id/bandas -> bandas de un usuario
const showBands = async (req, res = response) => {
  /** obtener el valor del id del usuario por los parametros  */
  const id = req.params.id;

  await models[MODELS.users]
    .findByPk(id)
    .then(async (user) => {
      await user
        .getBands({
          attributes: { exclude: ["createdAt", "updatedAt", "User_bands"] },
        })
        .then( bands => {
          res.status(201).json({
            ok: true,
            bands,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        ok: false,
        message: "Usuario no encontrado.",
        error: err,
      });
    });
};

// CREATE /api/users
const create = async (req, res = response) => {
  /** obtener el valor del body  */
  const cuerpo = { ...req.body, direccion: req.body.direccion };

  // crear usuario
  await models[MODELS.users]
    .create(cuerpo)
    .then(async (user) => {
      // crear direccion
      await models[MODELS.direccions]
        .create({ userId: user.id, calle: cuerpo.direccion })
        .then(async (direccion) => {
          await user.setDireccion(direccion).then( result => {
            res.status(201).json({
              ok: true,
              user,
            });
          });
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
  showDireccion: showDireccion,
  showPosts: showPosts,
  showBands: showBands,
};
