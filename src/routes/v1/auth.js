const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
/** metodos importados del controller presente */
const { signUp, login } = require('../../controllers/v1/auth.controller');


/** ruta principal metodo post */
router.post( '/sign-up', signUp );

/** ruta principal metodo post */
router.post( '/login', [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').isLength({ min: 6 }),        
    ],
    login
);

/** exportar el modulo de ruta */
module.exports = router;