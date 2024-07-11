import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useEffect, useState } from 'react';

export default function SearchBox({getData,errGet}){
    let [city,setCity]=useState("");
    let handleEvent=(event)=>{
        setCity(event.target.value);
    }
    let fetchData= async ()=>{
      try{
        let API_KEY="fb52a0056b303d1a57e00700965f4d74";
        let URL="https://api.openweathermap.org/data/2.5/weather";
       let response=await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonRes= await response.json();
       let result ={
        city:city.toUpperCase(),
        temprature:jsonRes.main.temp,
        temp_min:jsonRes.main.temp_min,
        temp_max:jsonRes.main.temp_max,
        humidity:jsonRes.main.humidity,
        weather:jsonRes.weather[0].description,
        wind:jsonRes.wind.speed,
       }
       getData(result);
      }catch(err){
        errGet(err);
      }
       
    }
    return(
        <div className='search-box'>
        <Box  className='chiled-box'
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >  <h2>Search Your City</h2>
        <TextField id="outlined-basic" value={city} name="city" label="City" variant="outlined" onChange={handleEvent} />
        <Button variant="outlined" className='button' onClick={fetchData}>Search!</Button>
      </Box>
      </div>
    )
}