import { Button ,CircularProgress } from '@mui/material'
import React from 'react'

const BsButon = (props) => {
    let {onClick,name,color,loading} = props

  return (
    <div>
    <Button  color={color ? color : "success"}  onClick={onClick} disabled={loading} variant='contained'  > 
    {loading ? <CircularProgress/> : name} </Button>
    </div>
  )
}

export default BsButon
