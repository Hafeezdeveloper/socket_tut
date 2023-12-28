import { TextField } from '@mui/material'
import React from 'react'

const BsInp = (props) => {
    let {onChnage, value,name} = props
  return (
    <div>
      <TextField onChnage={onChnage} 
      className='w-100'
       variant='filled' value={value} 
        label={name}
       placeholder={name}/>
    </div>
  )
}

export default  BsInp
