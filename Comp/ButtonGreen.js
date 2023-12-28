import { Button ,CircularProgress } from '@mui/material'
import React from 'react'

const ButtonGreen = (props) => {
    let {onClick,name,color,loading} = props

  return (
    <div>
    <Button  color={color ? color : "success"} className='btn_blu' onClick={onClick} disabled={loading} variant='contained'  > 
    {loading ? <CircularProgress/> : name} </Button>
    </div>
  )
}

export default ButtonGreen
