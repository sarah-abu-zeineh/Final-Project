import React,{useEffect,useState} from 'react';
import Cards from '../../components/card/Cards';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Loading from '../loading/Loading.jsx';

export default function CardContainer({products}) {
  console.log("products");
   return (
    <Box sx={{ flexGrow: 1 }} padding={6}  >
    <Grid container spacing={{ xs: .5, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      { 
        products.length !==0 ? products.data.map((value) => (
          <Grid item xs={2} sm={4} md={4}>
        <Cards info={value} ></Cards>
        </Grid>
        )):<Loading/>
    }
      </Grid>
    </Box>
  );
}