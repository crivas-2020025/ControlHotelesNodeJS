UsuarioController = require('./src/controllers/usuario.controller');
const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

mongoose.Promise = global.Promise;                                                                
mongoose.connect(process.env.CONTROL_HOTELES, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Se encuentra conectado a la base de datos.");

    app.listen(process.env.PORT || 8080, function () {
        console.log('Corriendo en el puerto 3000')
    })
    
    UsuarioController.RegistrarAdmin();

}).catch(error => console.log(error));