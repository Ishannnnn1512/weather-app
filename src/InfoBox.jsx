import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import cold from "../winter.jpg";
import hot from "../istockphoto-1007768414-612x612.webp";
import spring from "../spring.avif";
import rain from "../rain.jpg";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Brightness7Icon from '@mui/icons-material/Brightness7';


export default function InfoBox({info}){
    let HOT_URL=hot;
    let COLD_URL=cold;
    let RAINY_URL=rain;
    let SPRING_URL=spring;
 return(
    <div className="InfoBox">
        
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{height:140}}
        image={info.humidity>80 ? RAINY_URL 
          :info.temp<15? COLD_URL 
          : info.temp>25? HOT_URL 
          : SPRING_URL 
        }
        title="Weather"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity>80 ? (<ThunderstormIcon/>)
          :info.temp<15? (<AcUnitIcon/>)
          : info.temp>25? (<WbSunnyIcon/>)
          : SPRING_UR (<WbSunnyIcon/>)
          };
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <p>Temperature: {info.temp}&deg;C</p>
         <p>Feels Like: {info.feelsLike}&deg;C</p>
         <p>Min Temp: {info.tempMin}&deg;C</p>
         <p>Max Temp: {info.tempMax}&deg;C</p>
         <p>Humidity: {info.humidity}</p>
         <p>Weather: {info.weather}</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
 );
};