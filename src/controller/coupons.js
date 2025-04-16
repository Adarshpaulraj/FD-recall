let coupons = [{
    username:"fmiller",
    name:"Elizabeth Ray",
    address:"9286 Bethany Glens Vasqueztown CO 22939"
},{
    
    username:"valenciajennifer",
    name:"Lindsay Cowan",
    address:"Unit 1047 Box 4089DPO AA 57348"
},{
    
    username:"serranobrian",
    name:"Leslie Martinez",
    address:"Unit 2676 Box 9352 DPO AA 38560"
}]


const getCoupons =(req,res)=>{
    res.status(200).send({
        message:"data fetch succesfully",
        count :coupons.length,
        coupons
    })}

    const getbyId = (req,res)=>{
        let id = Number(req.params.id)
        if(id!==NaN && id < coupons.length)
        {
            res.status(200).send({
      
                message:'coupons get by id secessfuly',
                coupons:coupons[id]
             })
        } else {
            res.status(400).send({
                message:'coupons exists'
            })
        }
    
    }

    const  createCoupons = (req,res)=>{
        let data = req.body
        let r = coupons.filter((e)=>e.name === data.name)
        if(r.length === 0 ){
             coupons.push(data)
             res.status(201).send({
                message:"coupons creaed successfully",
                coupons
             })
        } else {
          res.status(400).send({
            message:"Coupons exits"
          })
        }
    }

    const editCoupon = (req,res)=>{
        let id = Number(req.params.id)
        if(id !== NaN && id<coupons.length){
            coupons.splice(id,1,req.body)
            res.status(201).send({
                message:"editedsucessfully",
                coupons
            })
        } else {
            res.status(400).send({message:"id invalid"})
        }
    }

    const deleteCoupons = (req,res)=>{
        let id = Number(req.params.id)
        if(id !== NaN && id<coupons.length){
            coupons.splice(id,1)
            res.status(201).send({
                message:"deleted sucessfully",
                coupons
            })
        } else {
            res.status(400).send({message:"id invalid"})
        }
    }

module.exports = {
        getCoupons,
        getbyId,
        editCoupon,
        deleteCoupons,
        createCoupons
    }