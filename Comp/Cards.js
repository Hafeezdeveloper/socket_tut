import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Cards(props) {
    let {item,setData ,open , index , openItemIndex} = props
  return (
    <>
    {/* // Case 1 */}
     {/* <Card onClick={() => setData(index)} sx={{ maxWidth: 345 }}>
       <CardActionArea>
         <CardMedia
           image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.para}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      {openItemIndex === index ? 
        <Button  size="small" color="primary">
          Share
         </Button>
         : null}
       </CardActions>
     </Card> */}

    {/* Case 2 Cards */}
        {/* <Card onClick={() => setData(index)} sx={{ maxWidth: 345 }}>
       <CardActionArea>
         <CardMedia
           image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.para}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      {open[index]  ? 
        <Button  size="small" color="primary">
          Share
         </Button>
         : null}
       </CardActions>
     </Card> */}
    </>
  );
}