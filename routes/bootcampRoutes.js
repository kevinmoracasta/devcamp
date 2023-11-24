const express =require('express')
const bootcampModel = require ('../models/bootcampModels')
const mongoose = require('mongoose')
//dependencias al middleware
const {protect , authorize}
    = require('../middleware/auth')
//definir el ruteador
const router = express.Router()

//trater todos los bootcamps

router.get('/', async (req, res )=>{

    //utilizar el modelo 
    //para seleccionar todos
    //los bootcamps en la db

    try{
        const bootcamps =
            await bootcampModel.find()
        if(bootcamps.length > 0){
          res.
            status(200).
            json({
                success: true,
                data: bootcamps
            })  
        }else{
            res.
            status(400).
            json({
                success: false,
                message: 'No hay bootcamps'
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
//trater bootcamps por id
router.get('/:id',async (req, res )=>{
    //extraer el id del bootcamp
    //del parametro de la url
    try{
        bootcampId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(bootcampId)){
            res
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
        const bootcamp=
            await bootcampModel.findById(bootcampId)
        if(bootcamp){
            res.
                status(200).
                json({
                    success: true,
                    data: bootcamp
                })
        }else{
            res.
            status(400).
            json({
                success: false,
                message: `No hay bootcamps cuyo id es:${bootcampId} `
            })
        }
       }
        
        
    }catch (error){
        res.
            status(400).
            json({
                success: false,
                message: 'No hay bootcamps'
            })

    }
    
    })


//crear bootcamps
router.post('/', protect , async(req, res )=>{
    //el nuevo bootcamp vendra
    // del body de la request
    try{
        const  newBootcamp = 
            await bootcampModel.create(req.body)
    
        res.
            status(201).
            json({
                success: true,
                data: newBootcamp
            })
    }catch (error){
        res.status(400)
        .json({
            success : false,
            data : error.message
        })
    }
    
})
//editar un bootcamps por id
router.put('/:id', async (req, res )=>{
    //el nuevo bootcamp 
    //vendra de body
    try{
        const bootcampId=req.params.id
        if(!mongoose.Types.ObjectId.isValid(bootcampId)){
            response
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
            const upBootcamp=
                await bootcampModel.
                    findByIdAndUpdate(
                        bootcampId,
                        req.body,
                        {
                            new: true
                        })
            if(upBootcamp){
                res.
                    status(200).
                    json({
                        success: true,
                        data:upBootcamp
                })
            }else{
                res.
                    status(400).
                    json({
                        success: false,
                        message: `No hay bootcamp con el id:${bootcampId}`
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

//eliminar un bootcamps por id
router.delete('/:id', async (req, res )=>{
    try{
        const bootcampId=req.params.id
        if(!mongoose.Types.ObjectId.isValid(bootcampId)){
            response
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
            const delBootcamp=
                await bootcampModel.
                    findByIdAndDelete(
                        bootcampId,
                        {
                        new: true
                        })
            if(delBootcamp){
                res.
                status(200).
                json({
                    success: true,
                    data:delBootcamp
                })
            }else{
                res.
                    status(400).
                    json({
                        success: false,
                        message: `No hay bootcamp con el id:${bootcampId}`
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
    }    //el bootcamp se eliminara
    //vendra de body    
        
})

module.exports = router
