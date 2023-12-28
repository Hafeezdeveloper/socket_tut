
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
const { sendResponse } = require('../../Helper/sendRespose')
const { StudentModel } = require('../../Modal/StudentModel')

let UserController = {
    signUpCont:async (req,res) =>{
        try{
        let {name , email , password} = req.body
        let obj = {name , email , password}
        let reqArr = ["name","email","password"]
        let errArr = []
    
        reqArr.forEach( (x) =>{
            if(!obj[x]){
                errArr.push(x)
            }
        })
    
        if(errArr.length > 0){
           res.send(sendResponse(false,errArr,"Required Feilds","error")) 
        }else{
            let bycrptPass = await bcrypt.hash(obj.password,10)
            obj.password = bycrptPass
            
            let existing = await StudentModel.findOne({email})
            if(existing){
                res.send(sendResponse(false,null,"Email Already in Use","error")).status(400)
                return
            }else{
                let result = new StudentModel(obj)
                await result.save()
                if(!result){
                    res.send(sendResponse(false,null,"Emai not save","error"))
                }else{
                    res.send(sendResponse(false,result,"Emai saved","success"))
                }
            }
        }
    
        }catch(e){
            console.log(e)
        }
    },
    loginCont: async (req,res) =>{
        try{
         let {email , password}    = req.body
         let obj = {email , password}
         let reqArr = ["email","password"]
        let errArr = []
    
        reqArr.map( (x) =>{
            if(!obj[x]){
                errArr.push(x)
            }
        })
    
        if(errArr.length > 0){
            res.send(sendResponse(false,errArr,"Required Feilds","error")).status(404)
        }else{
            let result = await StudentModel.findOne({email})
            if(!result){
                res.send(sendResponse(false,null,"Email not Found","error")).status(404)
            }else{
                   let  bycrptPass = await bcrypt.compare(obj.password,result.password) 
                   if(!bycrptPass){
            res.send(sendResponse(false,null,"Password Not Match","error")).status(404)
        }else{
     
            var token = jwt.sign({ ...result }, process.env.SECURE_KEY, {expiresIn:"24h"});
            
            if(!token){
            res.send(sendResponse(false,null,"Token Not Generate","error"))
        }else{
            // let a = token.split(" ")[1]
         res.send(sendResponse(false,{ user : result , token},"Token  Generate Sucess","sucess")).status(200)
        //  res.send(sendResponse(false,a,"Token  Generate Sucess","sucess")).status(200)
            }
    
                   }            
            }
        }
        }catch(e){
            console.log(e)
        }
    },
    protect: async (req,res,next) =>{
        try{
            let token = req.headers.authorization;
            if(token){
                token = token.split(" ")[1]
                // res.send(token.split(" ")[1])
                jwt.verify(token,process.env.SECURE_KEY,(err,sol) =>{
                    if(err){
                        res.send(sendResponse(false, null, "Unauthorized")).status(403);
                    }else{
                        console.log(sol)
                      next()
                    }
                })
            }else{
               res.send(sendResponse(false,null,"Unazthorized","eror")).status(404)
            }
        }catch(e){
            console.log(e)
        }
    }
}


module.exports = UserController