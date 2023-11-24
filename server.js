const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const conectarDB = require('./config/db')
//dependencias de rutas
const bootcampRoutes = require('./routes/bootcampRoutes')
const CoursesRoutes = require('./routes/coursesRoutes')
const reviewsRoutes = require('./routes/reviewsRoutes')
const usersRoutes = require('./routes/usersRoutes')
const cookieParser = require('cookie-parser')
//VINCULAR ARCHIVO env
dotenv.config(
{ path : './config/.env' }
) 

//CONECTAR A BASE DE DATOS

conectarDB()

//construir objeto base de datos
const app=express()
app.use(express.json())
app.use(cookieParser())

//conectar las rutas
//al objeto
app.use('/api/v1/devcamp/bootcamps',
    bootcampRoutes) 

app.use('/api/v1/devcamp/courses',
CoursesRoutes) 

app.use('/api/v1/devcamp/views',
reviewsRoutes) 

app.use('/api/v1/devcamp/auth',
        usersRoutes)

app.listen(process.env.PUERTO,() =>{
    console.log(`servidor en ejecucion: `+process.env.PUERTO.bgCyan) 
    
    
})