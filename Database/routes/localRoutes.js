const router = require('express').Router()
const Local = require('../models/Local')

router.post('/',async (req,res) => {
    // req body
const {lat,lng} =req.body

const local = {
    lat,
    lng,
}
try {
    await Local.create(local)
    res.status(201).json({message:"Pessoa inserida"})
}
catch(error){
    res.status(500).json({error: error})
}
})

router.get('/',async(req,res)=>{
    try{

        const loca = await Local.find()
        res.status(200).json(loca)
    }
    catch(error){
        res.status(500).json({error: error})
        }
})
router.get('/:id',async (req,res)=>{
    const id = req.params.id

    try{
        const local = await Local.findOneById(id)
        res.status(200).json(local)

    }
    catch(error){
        res.status(500).json({error: error})
    }
})

router.patch('/:id',async (req,res)=>{
    const id = req.params.id
    const {lat, lng} =req.body

const local = {
    lat,
    lng,}
    try{
        const updateLocal=await Local.updateOne({_id:id},local)
        res.status(200).json(local)
    }catch(error){
        res.status(500).json({error:error})
    }
})
router.delete('/:id',async(req,res)=>{
    const id = req.params.id
    const local = await Local.findOne({_id : id})
    res.status(200).json('Local deletado')
    try{
        await Local.deleteOne({_id : id})
    }catch(error){
        res.status(500).json({error:error})
    }
})
module.exports = router