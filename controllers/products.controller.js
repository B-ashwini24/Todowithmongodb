
const Products=require("../models/product")
const saveproddata=(req,res)=>{
    const product=new Products({
        name:req.body.name,
        price:req.body.price,
        quantity:req.body.quantity,
        brand:req.body.brand
    })
    product.save().then(data=>{
        res.send({
            message:"data saved",
            data:data
        })
    })
    
}

const getproducts=(req,res)=>{
    Products.find().then(result=>{
        res.send({
            
            data:result
        })
    })
}
const deletedata=(req,res)=>{
    Products.deleteOne({_id:req.params.id}).then(response=>{
res.send({
    message:"Product deleted"
})
    }).catch(err=>{
        console.log(err)
     })
}
const editdata=(req,res)=>{
    const data=req.body
    console.log(data)
    Products.updateOne({_id:data._id},{$set:{name:data.name,quantity:data.quantity}}).then(response=>{
        res.send({
            message:"data updated"
        })
    }).catch(err=>{
        console.log(err)
    })
}
module.exports={
    saveproddata  ,
    getproducts ,
    editdata,
    deletedata
}