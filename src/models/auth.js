const mongoose = require('mongoose');

const User = require('../models/user');
const service = require('../services')

function singUp(req, res){
    const user = new User({
        email: req.body.email,
        nombre: req.body.nombre,
    })

    user.save((err) => {
        if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

        return res.status(201).send({ token: service.createToken(user) })
    });
}


function singIn(req, res){

}

module.exports = {
    singUp,
    singIn
}
