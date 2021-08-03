const express = require('express');
const route = express();
const path = require('path');

/** requerir el archivos de ruta */
route.use( require('./auth') );
route.use( require('./address') );
route.use( require('./bands') );
route.use( require('./users') );
route.use( require('./posts') );

/** esportar el modulo routes, para poderlo usar donde sea XD */
module.exports = route;