const express = require("express")
const userModel = require("../Modal/UserSchmea")
const { sendResponse } = require("../Helper/sendRespose")
const router = express.Router()
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
const UserController = require("../Controller/User/User")
const nodemailer = require("nodemailer");
var Mailgen = require('mailgen');
// router.get("/" , async (req,res) =>{
//     try{
//         let result = await userModel.find()
//         if(!result){
//             res.send(sendResponse(false,null,"Data Not Found","error")).status(404)
//         }else{
//             res.send(sendResponse(true,result,"Data found Succ","sucess")).status(200)
//         }
//     }catch(e){
//         console.log(e)
//     }
// })

router.post("/signUp", UserController.signUpCont)

router.post("/login", UserController.loginCont)

router.post("/mailer", async (req, res) => {
    let opt = 7587
    try {

        // let result = userModel(req.body)
        //     await result.save()

        // if(!result){
        //     res.send(result)
        // }else{
        // let testAccount = await nodemailer.createTestAccount()
        let config = {
            service: "gmail",
            auth: {
                user: "hafeez122.sidtechno@gmail.com",
                pass: "bscsfeknxiewezkm"
            }
        }

        const transporter = nodemailer.createTransport(config);

        // var mailGenerator = new Mailgen({
        //     theme: 'default',
        //     product: {
        //         // Appears in header & footer of e-mails
        //         name: 'Mailgen',
        //         link: 'https://mailgen.js/'
        //         // Optional product logo
        //         // logo: 'https://mailgen.js/img/logo.png'
        //     }
        // });
        // let response = {
        //     body: {
        //         name: 'John Appleseed',
        //         intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
        //         table: {
        //             data: [
        //                 {
        //                     item: "Nodemailer stack book",
        //                     description: "a backend app"
        //                 }
        //             ],
        //         },
        //         outro: "Need help, or have questions? Just reply to this email, we\'d love to help"
        //     },
        // }
        // var emailBody = mailGenerator.generate(response);
        
        let message = {
            from: "hafeez122.sidtechno@gmail.com", // sender address
            to: "hafeezatif124@gmail.com,wavefax445@weizixu.com", // list of receivers
            subject: "Hello This is your code", // Subject line
            text: `Hello ${opt} world?`, 
            // html: "<b>Hello world?</b>", // html body
        }

        transporter.sendMail(message).then((succ) => {
            console.log(succ)
            res.send(sendResponse(true, {
                msg: "you recived email", info: succ.messageId,
                preview: nodemailer.getTestMessageUrl(succ)
            }));
        })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })
        // }
    } catch (e) {
        res.send(e)
    }
})

router.get("/test", UserController.protect, (req, res) => {
    res.send("valid")
})

router.delete("/:id", async (req, res) => {
    try {

    } catch (e) {
        console.log(e)
    }
})

module.exports = router