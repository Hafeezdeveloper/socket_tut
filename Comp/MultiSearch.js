import { Box, Input, TextField } from '@mui/material'
import React, { useState } from 'react'

const MultiSearch = (props) => {
    let { sendVal , valData } = props
    const [model,setModel] = useState("")

     const textChnage = (e) =>{
        sendVal(model,e)
     }
  return (
    <div className='d-flex justify-content-center'>
        <Box>
      <TextField label={model || "select Multiple"}  onChange={(e) => textChnage(e.target.value)} />
        </Box>

         <Box>
        <select style={{width:"125px"}} className='form-control border' 
         onChange={(e) => setModel(e.target.value)} name="" id="">
            {valData &&  Array.isArray(valData) && valData.map( (x,i) =>{
                return(
                    <option value={x.key}>{x.name}</option>
                )
            })}
         </select>    
        </Box>   


    </div>
  )
}

export default MultiSearch
