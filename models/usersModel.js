const mongoose = require('mongoose')
const bcryptjs = require ('bcryptjs')
const jwt = require ('jsonwebtoken')

//definir  Schema users
const userSchema = new mongoose.Schema({
    name:{
        type:String ,
        required:[true,"Nombre requerido"]
     },
    email: {
        type: String,
        unique: [true,"email repetido"],
        required:[true,"email requerido"],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "email invalido"
        ]
    },
    password:{
        type: String,
        required: [true,"password requerido"],
        maxlength:[6,"password muy corto"],
        select: false
    },
    role: {
        type: String,
        enum: ["admin","user","publisher"],
        default:"user"
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})
userSchema.pre('save' , async function(){
    //generar la sal
    const sal = await bcryptjs.genSalt(10)
    //encriptar el password utilizando la sal
    this.password = await bcryptjs.hash(this.password,sal)
})
//methodo para comparar comprar password del usuario
//vs password del payload
userSchema.methods.compararPassword = async function(password0){
    return bcryptjs.compare(password0,this.password)
}

//metodo para crear el JWT

userSchema.methods.generarJWT= function(){
    return jwt.sign({
        id: this._id,
        email: this.email
                },
            process.env.JWT_SECRET_KEY,
        {
            expiresIn: process.env.JWT_EXPIRE
        }
    )
}

module.exports = mongoose.model('User' , userSchema)