const { default: mongoose } = require("mongoose");

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
})
StudentSchema.index({ name: 'text' });

const conversationSchema = mongoose.Schema({
    message:{
        type:String
    },
    to:{
        type : mongoose.Types.ObjectId ,
        ref:"User"
    },
    from:{
        type : mongoose.Types.ObjectId ,
        ref:"User"
        },
        createdOn:{
            type:Date,
            default:Date.now()
        }
})
    


let StudentModel = mongoose.model("User", StudentSchema)
let conversationModel = mongoose.model("conversation", conversationSchema )
module.exports = {StudentModel , conversationModel}
