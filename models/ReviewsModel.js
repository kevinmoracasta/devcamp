const mongoose  = require('mongoose')

//definir  Schema courses
const ViewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Titulo es requerido"
        ],
        maxlength: [
            20 , "El titulo no debe ser de mas de 20 dijitos"
        ]
    },

    text: {
        type: String,
        required: [
            true,
            "Texto es requerida"
        ],
        
        maxlength: [50 , "El texto debe de tener al menos 10 dijitos"
        ]
    },
    rating: {
        type: Number,
        required: [
            true,
            "calificaciones requeridas"
        ],
        max: [
            10 , "Numero de calificacion minima es 10"
        ],
        max: [
            1 , "Numero de calificacion minima es 1"
        ]
        
    },
    createdAt: Date
})

module.exports = mongoose.model("Views" ,
                                ViewsSchema)