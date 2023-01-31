import './App.css';
import React from 'react'
 import {Grid} from '@mui/material'
 import Item from '@mui/material/ListItem'


function App() {
return(
<>
      <Grid  container >
          <Grid item style={{backgroundColor:'black',color:'white'}}  xs={12} sm={6} md={3}>
          <Item>Enter your Name: </Item>
           </Grid>
        <Grid item style={{backgroundColor:'black',color:'white'}}  xs={12} sm={6} md={3}>
          <Item>Enter your id:</Item>
       </Grid>

        <Grid item style={{backgroundColor:'black',color:'white'}}  xs={12} sm={6} md={3}>
          <Item>Enter your Email:</Item>
        </Grid>

        <Grid item style={{backgroundColor:'black',color:'white'}} xs={12} sm={6} md={3}>
          <Item>Enter your city:</Item>
       </Grid>


      </Grid></>
);
}
export default App;



