const express =require('express')
const { model } = require('mongoose')
const CoursesModel = require ('../models/CoursesModel')
const mongoose = require('mongoose')
//definir el ruteador
const router = express.Router()

//rutas del recurso curso
router.get('/' , async(req , res) =>{

    try{
        const course =
            await CoursesModel.find()
        if(course.length > 0){
          res.
            status(200).
            json({
                success: true,
                data: course
            })  
        }else{
            res.
            status(400).
            json({
                success: false,
                message: 'No hay courses'
            })
        }
        
       } catch (error){
            res.status(400)
                .json({
                    success: false,
                    message: error.message
                })
    }

})

//trater curso por id
router.get('/:id',async (req, res )=>{
    //extraer el id del courses
    //del parametro de la url
    try{
        coursesId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(coursesId)){
            res
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
            const courses=
                await CoursesModel.findById(coursesId)
            if(courses){
                res.
                    status(200).
                    json({
                        success: true,
                        data: courses
                    })
            }else{
                res.
                    status(400).
                json({
                success: false,
                message: `No hay courses cuyo id es:${coursesId} `
            })
        }
       }
        
        
    }catch (error){
        res.
            status(400).
            json({
                success: false,
                message: 'No hay courses'
            })

    }
    
    })


//crear coursess
router.post('/', async(req, res )=>{
    //el nuevo courses vendra
    // del body de la request
    try{
        const  newcourses = 
            await CoursesModel.create(req.body)
    
        res.
            status(201)
            json({
                success: true,
                data: newcourses
            })
    }catch (error){
        res.status(400)
        .json({
            success : false,
            data : error.message
        })
    }
    
})
//editar un coursess por id
router.put('/:id', async (req, res )=>{
    //el nuevo courses 
    //vendra de body
    try{
        const coursesId=req.params.id
        if(!mongoose.Types.ObjectId.isValid(coursesId)){
            response
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
            const upcourses=
                await CoursesModel.
                    findByIdAndUpdate(
                        coursesId,
                        req.body,
                        {
                            new: true
                        })
            if(upcourses){
                res.
                    status(200).
                    json({
                        success: true,
                        data:upcourses
                })
            }else{
                res.
                    status(400).
                    json({
                        success: false,
                        message: `No hay courses con el id:${coursesId}`
            })
            }
       }
    }catch (error){
        res.
            status(400).
            json({
                success: false,
                message: error.message
            })
    }
    
    
})

//eliminar un coursess por id
router.delete('/:id', async (req, res )=>{
    try{
        const coursesId=req.params.id
        if(!mongoose.Types.ObjectId.isValid(coursesId)){
            response
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
            const delcourses=
                await CoursesModel.
                    findByIdAndDelete(
                        coursesId,
                        {
                        new: true
                        })
            if(delcourses){
                res.
                status(200).
                json({
                    success: true,
                    data:delcourses
                })
            }else{
                res.
                    status(400).
                    json({
                        success: false,
                        message: `No hay courses con el id:${coursesId}`
            })
            }  
       }

    }catch (error){
        res.
            status(400).
            json({
                success: false,
                message: error.message
            })
    }    //el courses se eliminara
    //vendra de body    
        
})

module.exports = router
