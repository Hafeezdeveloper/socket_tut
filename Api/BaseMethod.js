import axios from "axios";


const baseHandler = axios.create({
    // baseURL:"https://jsonplaceholder.typicode.com"
    baseURL:"http://192.168.1.105:5000/api"

})

let getApi = (endPoint) =>{
    return baseHandler.get(endPoint)
}

let postApizz  = (endPoint,body) =>{
    return baseHandler.post(`${endPoint}`,body, {
        headers: {
          'Content-Type': 'multipart/form-data' // Important to set the correct content type
        }
      })
}

let postApi  = (endPoint,body) =>{
    return baseHandler.post(`${endPoint}`,body)
}

let putApi = (endPoint,id,body) =>{
    return  baseHandler.put(`${endPoint}/${id}`,body)
}
let deleteApi = (endPoint,id,body) =>{
    return  baseHandler.delete(`${endPoint}/${id}`,body)
}

let postApiLogin  = (endPoint,body) =>{
    return baseHandler.post(`${endPoint}`,body ,{withCredentials:true})
}
let getUserCookire  = (endPoint) =>{
    return baseHandler.get(`${endPoint}` ,{withCredentials:true})
}


export {getApi,postApi,putApi,deleteApi,postApiLogin,getUserCookire,postApizz}