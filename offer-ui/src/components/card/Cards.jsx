import './card.css';
import React,{useEffect,useState} from 'react';
import Model from './Model.jsx';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
let shoppingCartArr = [];
function addToCart(info){
  
  shoppingCartArr.push(info);
   console.log(shoppingCartArr);
}

export default function MediaCard({info}) {
  const [shoppingCart,setShoppingCart] = useState([]);
 
  return (
    <Card sx={{ maxWidth: 345 }} className = "border-card">
      <CardContent className="card-style">
       <span className = "product">{info.attributes.name}</span>
       <div className ="div-line"></div>
      <img src="https://60cb3c2a9179a3db8288137d--mystifying-mcnulty-544607.netlify.app/images/ali-tarhini-slashio-ThLVnKdeH1k-unsplash.jpg"
       className="image-style"></img>
      </CardContent>
      <div className="information-style font">    
     <div className="font container">
     <span className= "price">Price : {info.attributes.price} $</span>
     {
       info.attributes.discount != null?
       <span className= "discount">{info.attributes.discount}% </span>:null
     }
     
     </div>
     {
      info.attributes.groupQuantity>1 && info.attributes.groupPrice  ?
      <span>By with Group {info.attributes.groupQuantity} at {info.attributes.groupPrice}</span>:null
    }
     
      </div>
      <CardActions className="choices-container">
        <Button size="small" onClick={()=>addToCart(info)}><AddShoppingCartIcon style={{ color: '#c7ad9c' }}/></Button>
        <Button size="small"><FavoriteIcon style={{ color: '#c7ad9c' }}/></Button>
         <Model info = {info}/>

      </CardActions>
    </Card>
  );
}