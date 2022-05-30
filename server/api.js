const express = require('express');
const router = express.Router();
const shortid = require('shortid');

const list = {};

router.use(express.json());

router.post("/", (req, res) => {
    const id = shortid.generate();
    list[id] = req.body.longUrl;
    res.send({url: req.protocol + "://" + req.get("host") + req.originalUrl + id});
    //console.log(list);
})

router.get("/", (req, res) => {
    res.send(list);
})

router.get("/:id",(req,res)=>{
     res.redirect(list[req.params.id]);
})

module.exports=router