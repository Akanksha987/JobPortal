
// Get Contacts
const getContact=(req,res)=>{
    res.status(200).json({message:"Get all contacts"});
}

// Create Contacts
const createContact=(req,res)=>{
    res.status(201).json({message:"Create contacts"});
}

// Get contacts on the basis of id
const getContacts=(req,res)=>{
    res.status(200).json({message:`Updated contacts for ${req.params.id}`});
}

const deleteContacts=(req,res)=>{
    res.status(200).json({message:`Deleted contacts for ${req.params.id}`});
}


module.exports={getContact,createContact,getContacts,deleteContacts};