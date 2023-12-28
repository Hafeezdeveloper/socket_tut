const express = require("express")
const Studentrouter = express.Router()
const {StudentModel, conversationModel} = require("../Modal/StudentModel")
const { sendResponse } = require("../Helper/sendRespose");
const { getIO } = require('./SocketmANAGER.JS');  // file1.js

Studentrouter.get("/tweet/:from/oneuser/user/:userid", async (req, res) => {
    try {
        let userid = req.params.userid    
        let fromId = req.params.from    
        console.log(fromId, "from")
        console.log(userid , "userId")
        let result = await conversationModel.find({
            $or:[
                {
                to:userid
                },
                {
                from: fromId 
                },
                ]   
    }).populate({   
        path: "to from",
        select: "name email"
    }).sort({_id : -1   })
    // console.log(from, "from")
    // console.log(userid , "userId")
        if (!result) {
            res.send(sendResponse(false, null, "Empty", "Error")).status(404)
        } else {
            res.send(sendResponse(true, result, "Data Avalible", "succ")).status(200)
        }
    } catch (e) {
        console.log(e)
    }
})

Studentrouter.get("/tweet/user", async (req, res) => {
    try {
        let q = req.query.q;
        let result;
        
        if (q) {
            // result = await StudentModel.find({ $text: { $search: q } });
            result = await StudentModel.find({ name: { $regex: q, $options: 'i' } });
        } else {
            result = await StudentModel.find();
        }
        
        res.status(200).send(sendResponse(true, result, "Data Available", "success"));
    } catch (e) {
        console.log(e);
        res.status(500).send(sendResponse(false, null, "Error occurred", "Error"));
    }
});



// Studentrouter.post("/userMessage/send", async (req, res) => {
//     let {from, to, message} = req.body
//     let obj =  {from, to, message}
//     try {
//         let result = conversationModel(obj) 
//         await result.save()
//         if(!result){
//             res.send(sendResponse("false",null , "Data not Send" , "error")).status(404)
//         }else{
//         // After saving the message to the database
// const io = getIO(); // make sure this function properly returns the io instance
// if(io) { // Always check if 'io' is not null
//     io.emit(`${to}-${from}`, result);
// } else {
//     // Handle the case where io is not initialized
//     console.log("Socket.io is not initialized");
//     res.status(500).send(sendResponse(false,null , "Error occurred", "error"));
// }
//         }
//     } catch (e) {
//         console.log(e)
//         res.status(500).send(sendResponse(false,null , "Error occurred", "error"));
//     }
// });



Studentrouter.post("/", async (req, res) => {
    try {
        let { name, fatherName } = req.body
        let obj = { name, fatherName }
        let reqArr = ["name", "fatherName"]
        let errArr = []

        reqArr.map((x) => {
            if (!obj[x]) {
                errArr.push(x)
            }
        })

        if (errArr.length > 0) {
            res.send(sendResponse(false, errArr, "Required Feild", "error")).status(404)
        } else {
            let result = StudentModel(obj)
            await result.save()

            if (!result) {
                res.send(sendResponse(false, null, "Cannot save", "error")).status(404)
            } else {
                res.send(sendResponse(false, result, "Save Succssfully", "Success")).status(200)
            }
        }
    } catch (e) {
        console.log(e)
    }
})

Studentrouter.put("/:id", async (req, res) => {
    try {
        let id = req.params.id
        let result = await StudentModel.findById(id)

        if (!result) {
            res.send(sendResponse(false, null, "Data Un Found", "ERrror")).status(404)
        } else {
            let updateData = await StudentModel.findByIdAndUpdate(id, req.body, { new: true })
            if (!updateData) {
                res.send(sendResponse(false, null, "Data UnEdit", "ERrror")).status(404)
            } else {
                res.send(sendResponse(false, null, "Data Edit Sucessfully", "Sucess")).status(200)
            }

        }
    } catch (e) {
        console.log(e)
    }
})

Studentrouter.delete("/:id", async (req, res) => {
    try {
        let id = req.params.id
        let result = await StudentModel.findById(id)

        if (!result) {
            res.send(sendResponse(false, null, "Data Un Found", "ERrror")).status(404)
        } else {
            let deleteData = await StudentModel.findByIdAndDelete(id)
            if (!deleteData) {
                res.send(sendResponse(false, null, "Data UnDeleted", "ERrror")).status(404)
            } else {
                res.send(sendResponse(false, null, "Data Delete Sucessfully", "Sucess")).status(200)
            }
        }
    } catch (e) {
        console.log(e)
    }
})

module.exports = Studentrouter