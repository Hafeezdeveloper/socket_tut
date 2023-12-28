import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ApiProtect = ({Component}) => {
    let navigate = useNavigate()
        const[user,setUser] = useState()
    useEffect( () =>{
        let a = localStorage.getItem("token")
        setUser(a)
    },[])

        if(!user){
            navigate("/")
            return null
        }else{
            return <Component />
            }
}

export default ApiProtect
