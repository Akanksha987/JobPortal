const express = require("express");
const router = express.Router();
const {getContact, createContact,getContacts,deleteContacts}=require('../controllers/contactControllers')


router.route('/').get(getContact)

router.route('/').post(createContact)

router.route('/:id').put(getContacts)

router.route('/:id').delete(deleteContacts)

router.route('/:id').get((req,res)=>{
    res.status(200).json({message:`Get contacts for ${req.params.id}`});
})


module.exports=router;