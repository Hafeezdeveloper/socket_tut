import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = (props) => {
    let {screenTittle ,arrow , data} = props

    const  backbtn = () =>{
        window.history.back()
    }
  return (
    <div>
      <Box className="shadow py-2 d-flex justify-content-between">
        <Box>
        {arrow ? 
        <Box className='d-flex px-2'>
    <IconButton onClick={backbtn}><ArrowBackIcon /></IconButton>
        <Typography className='pt-1 px-1'  variant='h6'>{screenTittle}</Typography>
            </Box>
        : <Typography  variant='h6'>{screenTittle}</Typography>}

</Box>
            {data ? (
                <Box>
                {data && Array.isArray(data) && data.map( (x,i) =>{
        return(
            <div key={i}>
            {x.displayField ? x.displayField(x) : null }
        </div>
               )
                })}
                </Box>
            ) : null}

      </Box>
    </div>
  )
}

export default Header
