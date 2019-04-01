const express = require('express');
const router = express.Router();

const Piso = require('../models/Piso')
const uploader = require('../configs/cloudinary')



// router.post("/modificar/:nuestroSaco", (req, res) => { // http://localhost:3000/api/modificar/345678
//   const nuestroSaco = req.params.nuestroSaco // nuestroSaco = 345678
// })

router.post('/introducirPiso',uploader.single("imageUrl"),(req, res) => {
    const piso = {title,description,gallery,price,rooms,surface,terrace,heating,bathrooms,houseSize,parking,build,type,reference,state,floor} = req.body
    //midelware cloudinary. para lasm fotos req.file
    // const imgURL = req.file.secureURL
    console.log(piso)
    const newPiso = new Piso(piso)
    newPiso.save()
    .then((piso)=>{ 
        res.json({msg:'El piso se ha introducido', piso})
    })
   
})

router.post('/introducirNoticia',uploader.single("imageUrl"),(req, res) => {
    const {img,title,description,} = req.body
    //idem fotos
    Noticia.save({img,title,description,})
    .then(()=>{
        res.json()
    })
   
})




module.exports = router;


