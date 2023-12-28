import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BsSelect(props) {
    let {data ,onChange,value ,name} = props

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="demo-multiple-chip-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={onChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
            {data && Array.isArray(data) && data.map( (x) =>{
                return(
        <MenuItem value={x.key}>{x.name}</MenuItem>
                )
            })}
        </Select>
      </FormControl>
    </div>
  );
}