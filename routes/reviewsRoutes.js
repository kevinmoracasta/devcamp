const express =require('express')
const { model } = require('mongoose')
const ReviewsModel = require ('../models/ReviewsModel')
const mongoose = require('mongoose')
//definir el ruteador
const router = express.Router()

//trater todos los views

router.get('/', async (req, res )=>{

    //utilizar el modelo 
    //para seleccionar todos
    //los views en la db

    try{
        const views =
            await ReviewsModel.find()
        if(views.length > 0){
          res.
            status(200).
            json({
                success: true,
                data: views
            })  
        }else{
            res.
            status(400).
            json({
                success: false,
                message: 'No hay views'
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
//trater views por id
router.get('/:id',async (req, res )=>{
    //extraer el id del views
    //del parametro de la url
    try{
        viewsId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(viewsId)){
            res
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
        const views=
            await ReviewsModel.findById(viewsId)
        if(views){
            res.
                status(200).
                json({
                    success: true,
                    data: views
                })
        }else{
            res.
            status(400).
            json({
                success: false,
                message: `No hay views cuyo id es:${viewsId} `
            })
        }
       }
        
        
    }catch (error){
        res.
            status(400).
            json({
                success: false,
                message: 'No hay views'
            })

    }
    
    })


//crear views
router.post('/', async(req, res )=>{
    //el nuevo views vendra
    // del body de la request
    try{
        const  newviews = 
            await ReviewsModel.create(req.body)
    
        res.
            status(201)
            json({
                success: true,
                data: newviews
            })
    }catch (error){
        res.status(400)
        .json({
            success : false,
            data : error.message
        })
    }
    
})
//editar un views por id
router.put('/:id', async (req, res )=>{
    //el nuevo views 
    //vendra de body
    try{
        const viewsId=req.params.id
        if(!mongoose.Types.ObjectId.isValid(viewsId)){
            response
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
            const upviews=
                await ReviewsModel.
                    findByIdAndUpdate(
                        viewsId,
                        req.body,
                        {
                            new: true
                        })
            if(upviews){
                res.
                    status(200).
                    json({
                        success: true,
                        data:upviews
                })
            }else{
                res.
                    status(400).
                    json({
                        success: false,
                        message: `No hay views con el id:${viewsId}`
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

//eliminar un views por id
router.delete('/:id', async (req, res )=>{
    try{
        const viewsId=req.params.id
        if(!mongoose.Types.ObjectId.isValid(viewsId)){
            response
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
            const delviews=
                await ReviewsModel.
                    findByIdAndDelete(
                        viewsId,
                        {
                        new: true
                        })
            if(delviews){
                res.
                status(200).
                json({
                    success: true,
                    data:delviews
                })
            }else{
                res.
                    status(400).
                    json({
                        success: false,
                        message: `No hay views con el id:${viewsId}`
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
    }    //el views se eliminara
    //vendra de body    
        
})

module.exports = router
