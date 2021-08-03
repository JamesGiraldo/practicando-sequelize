const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
/** metodos importados del controller presente */
const {  create, index, showDireccion, showPosts, showBands  } = require('../../controllers/v1/user.controller');


/** ruta principal metodo post */
router.get( '/users', index );
router.post( '/users', create );
router.get( '/users/:id/direcciones', showDireccion );
router.get( '/users/:id/bandas', showBands );
router.get( '/users/:id/publicaciones', showPosts );

/** exportar el modulo de ruta */
module.exports = router;