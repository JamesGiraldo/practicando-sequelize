const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
/** metodos importados del controller presente */
const {  create, index  } = require('../../controllers/v1/bands.controller');


/** ruta principal metodo post, get, put, delete */
router.get( '/bands', index );
router.post( '/bands', create );

/** exportar el modulo de ruta */
module.exports = router;