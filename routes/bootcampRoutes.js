const express =require('express')
const { model } = require('mongoose')
const bootcampModel = require ('../models/bootcampModels')
const router = express.Router()

//trater todos los bootcamps

router.get('/', async (req, res )=>{

    //utilizar el modelo 
    //para seleccionar todos
    //los bootcamps en la db
    const bootcamps =
        await bootcampModel.find()

    res.json({
        success: true,
        data: bootcamps
    })

    
})
//trater bootcamps por id
router.get('/:id',async (req, res )=>{
    //extraer el id del bootcamp
    //del parametro de la url
    bootcampId = req.params.id
    const bootcamp=
        await bootcampModel.findById(bootcampId)
     res.json({
        success: true,
        data: bootcamp
    })
    })


//crear bootcamps
router.post('/', async(req, res )=>{
    //el nuevo bootcamp vendra
    // del body de la request
    const  newBootcamp = 
        await bootcampModel.create(req.body)
    
    res.json({
        success: true,
        data: newBootcamp
    })

    
})
//editar un bootcamps por id
router.put('/:id', async (req, res )=>{
    //el nuevo bootcamp 
    //vendra de body
    const bootcampId=req.params.id
    const upBootcamp=
    await bootcampModel.
    findByIdAndUpdate(
        bootcampId,
        req.body,
        {
            new: true
        })
    res.json({
        success: true,
        data:upBootcamp
    })
})

//eliminar un bootcamps por id
router.delete('/:id', async (req, res )=>{
    //el bootcamp se eliminara
    //vendra de body
    const bootcampId=req.params.id
    const delBootcamp=
    await bootcampModel.
    findByIdAndDelete(
        bootcampId,
        {
            new: true
        })    
        res.json({
        success: true,
        data:delBootcamp
    })
})

module.exports = router
