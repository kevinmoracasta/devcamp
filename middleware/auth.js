const jwt = require('jsonwebtoken');
const usersModel = require ('../models/usersModel');
const { request } = require('express');

//middleware para proteger rutas 
//a usuarios no logeados

exports.protect = async(req,res,next) => {
    
    let token
    //1. verificar si existe el header
    if(req.headers.authorization && 
        req.headers.authorization.
        startsWith('Bearer')){
            token = req.headers.
            authorization.
            split(' ')[1]
    }
    if(!token){
        return res.status(401).json({
            success: false,
            msg: "Empty token"
        })
    }else{
        const decoded= jwt.verify(token,
            process.env.JWT_SECRET_KEY)
        //console.log(decoded)
        //añadir añ request el "user"
        
        req.user = await usersModel.findById(decoded.id)
        //redirigir a la ruta de crear bootcamps
        next()
            
    }
}

//middleware para proteger de usuariuos 
//que no tenga el rol especificado
exports.authorize = async(req, res, next)=>{

}