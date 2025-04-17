const userModel = require('../models/User')

let getUsers = async(req,res)=>{
    try {
      let data=  await userModel.find()
        res.status(200).send({message:'Users get sucessfully',data})
    } catch (error) {
        res.status(400).send({message:"invalid users",error:error.message})

    }
}

let getUsersById = async(req,res)=>{
    try {
       let id = await userModel.findOne({_id:req.params.id})
        if(id){
          res.status(200).send({message:"get by id users successfuly",id})  
        } 
    } catch (error) {
        res.status(400).send({message:"invalid users",error:error.message})
 
    }
}

let create = async(req,res)=>{
    try {
        const {firstName,lastName,email}=req.body
     let data = await userModel.create({firstName,lastName,email}) 
      res.status(201).send({message:"user created succesfully",data}) 
    } catch (error) {
        res.status(400).send({message:"invalid users",error:error.message})
    }
}

let editUser= async(req,res)=>{
    try {
        let user = await userModel.findOne({_id:req.params.id})
        if(user){
            await userModel.updateOne({_id:req.params.id},{$set:req.body})
            res.status(200).send({message:'sucessfully edited'})

        }else{
            res.send({message:"inavalid id"})
        }
    } catch (error) {
        res.status(400).send({message:"invalid users",error:error.message})

    }
}

let deleteUser= async(req,res)=>{
    try {
        let user = await userModel.findOne({_id:req.params.id})
        if(user){
            let e =await userModel.deleteOne({_id:req.params.id})
            res.status(200).send({message:'sucessfully deleted',user})

        }else{
            res.send({message:"inavalid id"})
        }
    } catch (error) {
        res.status(400).send({message:"invalid users",error:error.message})

    }
}
module.exports = {
    create,
    getUsers,
    editUser,
    getUsersById,
    deleteUser
}