import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Features/cartSlice';

export default function CardP(props) {

    const{productData}=props;
    console.log(productData);



    // mera kaam
    const dispatch=useDispatch();


  return (
    <Card sx={{ maxWidth: 300,position:"relative" ,maxHeight:500}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        
        image={productData.image}
        sx={{objectFit:"contain",
        height:"50%"}}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {productData.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {productData.category}
        </Typography>
        <Typography variant='h5' color='success'>Price-${productData.price}</Typography>
      </CardContent>
      <CardActions>
      <Box sx={{position:"absolute",
                bottom:"10px",display:"flex",
                gap:"10px"}}>
        <Button size="small" variant='contained' color='success' onClick={()=>{dispatch(addToCart(productData))}} >Add to cart</Button>
        <Button size="small" variant='contained'>Learn More</Button>
      </Box>
        
      </CardActions>
    </Card>
  );
}
