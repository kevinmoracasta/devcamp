const mongoose  = require('mongoose')

//definir  Schema courses
const CoursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Titulo es requerido"
        ],
        maxlength: [
            30 , "El titulo no debe ser de mas de 30 dijitos"
        ],
        minlength: [
            10 , "El titulo debe de tener al menos 10 dijitos"
        ]
    },

    descripcion: {
        type: String,
        required: [
            true,
            "Descripción es requerida"
        ],
        minlength: [
            10 , "La descripcioón debe de tener al menos 10 dijitos"
        ]
    },
    weeks: {
        type: Number,
        required: [
            true,
            "semanas requeridas"
        ],
        max: [
            9 , "Numero de semanas maximas es 9"
        ]
        
    },
    enroll_cost: {
        type: Number,
        required: [
            true,
            "costo de inscripción requerido"
        ]
    },
    minimun_skill: {
        type: [ String ],
        required: [
            true,
            "habilidad mínima de requerida"
        ],
        enum: [
            "Beginner",
            "Intermediate",
            "Advanced",
            "Expert"
        ]
    },
    createdAt: Date
})

module.exports = mongoose.model("Courses",
                                 CoursesSchema)