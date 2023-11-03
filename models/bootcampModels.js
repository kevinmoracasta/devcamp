const mongoose  = require('mongoose')

//definir  Schema Bootcamp
const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [
            true,
            "nombre es requerido"
        ]
    },
    phone: {
        type: Number,
        required: [
            true,
            "telefono requerido"
        ],
        maxlength: [
            10 , "telefono no debe ser de mas de 10 dijitos"
        ],
        minlength: [
            7 , "telefono debe de tener al menos 7 dijitos"
        ]
    },
    address: {
        type: String,
        required: [
            true,
            "direccion requerida"
        ]
    },
    topics: {
        type: [ String ],
        enum: [
            "Backend",
            "Frontend",
            "Devops",
            "AI"
        ]
    },
    createdAt: Date
})

module.exports = mongoose.model("Bootcamp" ,
                                 BootcampSchema)