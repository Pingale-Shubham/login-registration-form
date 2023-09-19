const employee = require('../model/addEmployee')

const addEmployee=async(req,res)=>{
    try{
        const isExist=await employee.findOne({eId:req.body.eId})
            if(isExist){
                res.send({error:"User already Added"})
            }else{
                const data=new employee({
                    eId:req.body.eId,
                    eName:req.body.eName,
                    designation:req.body.designation
                });
                const result=await data.save()
                if(result){
                    res.send({msg:"Emplpoyee Added"})
                }else{
                    res.send({error:"Employee Not Added"})
                }
            }
    }catch(error){
        res.send({error:"Something Went Wrong"})
    }
}

const getEmployee=async (req,res)=>{
    try{
        const data=await employee.find();
        res.send(data)
    }catch(error){
        res.send({error:err})
    }
}

const updateemployee=async(req,res)=>{
    try{
       console.log(req.body)
       console.log(req.params)
        const data=await employee.updateOne({_id:req.params.id},{$set:{
            eId:req.body.eId,
            eName:req.body.eName,
            designation:req.body.designation
        },
        });
        if(data){
            res.send({msg:"User Update"})
        }else{
            res.send({error:"user not update"})
        }

    }catch(error){
            res.send({error:"Spomething went wrong"})
    }
}

const getPreviouse=async (req,res)=>{
    try{
        const data=await employee.findOne({_id:req.params.id})
        res.send(data)
    
    }catch(error){
        res.send({msg:"something Went wrong"})
    }
}

const deleteEmployee=async(req,res)=>{
    try {
        const data=await employee.deleteOne({_id:req.params.id})
        if(data){
            res.send({msg:"user deleted"})
        }else{
            res.send({error:"user not deleted"})
        }
    } catch (error) {
        res.send({error:"something went wrong"})
    }
}

module.exports={addEmployee,getEmployee,updateemployee,getPreviouse,deleteEmployee}