const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
/** metodos importados del controller presente */
const {  create, index  } = require('../../controllers/v1/address.controller');


/** ruta principal metodo post, get, put, delete */
router.get( '/address', index );
router.post( '/address', create );

/** exportar el modulo de ruta */
module.exports = router;