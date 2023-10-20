const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
dotenv.config(
{ path : './config/.env' }
)
app=express()
//RUTAS DE PRUEBAS
app.get('/prueba/:id', (req,  res) =>{
    res.send(`Hola, ${req.params.id}`)
})

app.listen(process.env.PUERTO,() =>{
    console.log(`servidor en ejecucion: `+process.env.PUERTO.bgCyan)
    
    
})
//rutas de bootcamps
//trater todos los bootcamps

app.get('/bootcamps', (req, res )=>{
    res.json({
        sucess: true,
        msg:"busca todos los bootcamps"
    })

    
})
//trater bootcamps por id
app.get('/bootcamps/:id', (req, res )=>{
    res.json({
        sucess: true,
        msg:`busca bootcamp por id ${req.params.id}`
    })
})

//crear bootcamps
app.post('/bootcamps', (req, res )=>{
    res.json({
        sucess: true,
        msg:"aqui se creara un bootcamp"
    })

    
})
//editar un bootcamps por id
app.put('/bootcamps/:id', (req, res )=>{
    res.json({
        sucess: true,
        msg:`aqui se editara ${req.params.id}`
    })
})

//eliminar un bootcamps por id
app.delete('/bootcamps/:id', (req, res )=>{
    res.json({
        sucess: true,
        msg:`aqui se eliminara ${req.params.id}`
    })
})
//___________________________________________________________


//USUARIOS


//rutas del recurso usuario
app.get('/usuarios' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : "aqui van a mostrarse todos los usuarios"
        })
})

//obtener el usuario por id
app.get('/usuarios/:id' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : `obteniendo usuarios con id${req.params.id} `
        })
})

//crear usuario
app.post('/usuarios' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : "aqui se va a crear un usuarios"
        })
})

//actualizar el usuarios por id
app.put('/usuarios/:id' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : `actualizando usuarios con id${req.params.id}`
        })
})

//eliminar el usuario por id
app.delete('/usuarios/:id' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : `eliminando usuarios con id${req.params.id}`
        })
})


//CURSOS


//rutas del recurso curso
app.get('/cursos' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : "aqui van a mostrarse todos los cursos"
        })
})

//obtener el curso por id
app.get('/cursos/:id' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : `obteniendo cursos con id${req.params.id} `
        })
})

//crear curso
app.post('/cursos/:id' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : "aqui se va a crear un cursos"
        })
})

//actualizar el curso por id
app.put('/cursos/:id' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : `actualizando cursos con id${req.params.id}`
        })
})

//eliminar el curso por id
app.delete('/cursos/:id' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : `eliminando cursos con id${req.params.id}`
        })
})

//REVIEWS

//rutas del recurso reviews
app.get('/reviews' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : "aqui van a mostrarce todos los reviews"
        })
})

//obtener el reviews por id
app.get('/reviews/:id' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : `obteniendo reviews con id${req.params.id} `
        })
})

//crear reviews
app.post('/reviews/:id' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : "aqui se va a crear un reviews"
        })
})

//actualizar el reviews por id
app.put('/reviews/:id' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : `actualizando reviews con id${req.params.id}`
        })
})

//eliminar el reviews por id
app.delete('/reviews/:id' , (req , res) =>{
    res.json({
                "succes" : true,
                "msg" : `eliminando reviews con id${req.params.id}`
        })
})