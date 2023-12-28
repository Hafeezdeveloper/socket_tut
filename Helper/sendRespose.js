let obj = {
    status:null,
    data:null,
    message:null,
    error:null
}

const sendResponse = (status,data,message,error) =>{
    obj.status = status;
    obj.data = data;
    obj.message = message;
    obj.error = error;
    
    return obj
}

module.exports = {sendResponse}