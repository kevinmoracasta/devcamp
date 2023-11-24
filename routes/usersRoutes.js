const express = require('express')
const router = express.Router()
const UserModel= require('../models/usersModel')
const mongoose = require('mongoose')
const usersModel = require('../models/usersModel')
const cookieParser = require('cookie-parser')

//registro de usuario
router.post('/register', async (req,res) => {
    try{
        const user = await UserModel.create(req.body)
        //crear token
        const token = user.generarJWT()
        res.status(200).json({
            success: true,
            data: user,
            token_jwt: token
        })
    }catch (error){
        res.status(500).
        json({
            success: false,
            message: error.message
        })

    }
    
})
//inicion de sesion
router.post('/login' , async (req,res) => {
    //1. login no llega email password
    const {email, password }= req.body;
    if (!email || !password){
        return res.status(400).json({
            seccess: false,
            message:'Faltan email o password'
        })
    }else{
            //2. si llega email, peor el usuraio no existe
        const user = await UserModel.
        findOne({email}).
        select("+password")
        if(!user){
            return res.status(400).json({
                seccess: false,
                message: 'El usuaeio no existe'
            })

        }else{
                const isMatch = await user.compararPassword(password)
                //3. si llega email y el usuario existe pero no es password
                if (isMatch){
                    const token = user.generarJWT()
                    //opciones para creacion de la cookie
                    const options={
                        expires: new Date
                                     (Date.now() +
                                     process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 ),
                        httpOnly: true,
                    }
                    return res.
                    status(200).
                    cookie('token', token, options)
                    .json({
                        success:true,
                        msg:"usuario logeado correctamente",
                        data: user,
                        jwt_token: token
                    })
                }else{
                    return res.status(400).json({
                        success: false,
                        message:'creadeciales'
                    })
                }
        }
}
})

module.exports=router