const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
/** metodos importados del controller presente */
const { index, create } = require('../../controllers/v1/post.controller');


/** ruta principal metodo post, get, put, delete */
router.get( '/posts', index );
router.post( '/posts', create );

/** exportar el modulo de ruta */
module.exports = router;