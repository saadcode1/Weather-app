import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SearchBox from './SearchBox';
import { useEffect, useState } from 'react';

export default function InfoBox(){
    let noData="data was not available";
    let hot="https://plus.unsplash.com/premium_photo-1689298477277-7e488d5ecc10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let winter="https://images.unsplash.com/photo-1510706582185-d4f28e338820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbnRlciUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    let monsoon="https://media.istockphoto.com/id/543328674/photo/indian-monsoon-2016.jpg?s=2048x2048&w=is&k=20&c=rBqhGFkuSAp0fEURuBl8q9exi5iLf0D52MqEpfJI344="
    let haze="https://images.unsplash.com/photo-1454789476662-53eb23ba5907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let [weather,setWeather]=useState({})
    let [err,setErr]=useState("");
    let getData=(weather)=>{
        setWeather(weather);
        setErr("");
    }
    let errGet= (err)=>{
      setErr(err);
    }
    return( 
        <>
        <SearchBox getData={getData} errGet={errGet}/>
    <div className='card'>
    <Card sx={{ maxWidth: 800 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={weather.temprature> 35 ? hot : weather.temprature > 15 ?haze:winter}
          title="green iguana"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{weather.city}-<b>{!err ? weather.weather:"Data was Not Available"}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
         Temprature-<b>{weather.temprature}&deg;C</b>
          &nbsp;&nbsp;&nbsp;
         Temprature-min-<b>{weather.temp_min}&deg;C</b>
          &nbsp;&nbsp;&nbsp;
         Tempratur-max-<b>{weather.temp_max}&deg;C</b>
          &nbsp;&nbsp;&nbsp;
          Humidity-<b>{weather.humidity}&deg;C</b>
          &nbsp;&nbsp;&nbsp;
          Wind-Speed-<b>{weather.wind}&deg;</b>
         
          </Typography>
        </CardContent>
        <CardActions>
         
        </CardActions>
      </Card>
      </div>
      </>)
}