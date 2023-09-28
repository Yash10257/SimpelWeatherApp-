const weather_img= document.querySelector('.weather-img');
const description =document.querySelector('.description');
const temp = document.querySelector('.temp');
const temp2= document.getElementById('temp2');
const max_temp= document.getElementById('max_temp');
const min_temp= document.getElementById('min_temp');
const humidity= document.getElementById('humidity');
const humidity2= document.getElementById('humidity2');
const feels_like= document.getElementById('feels_like');
const wind_speed2= document.getElementById('wind_speed2');
const gust= document.getElementById('gust');
const deg= document.getElementById('deg');
const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');
const details = document.getElementById('details');


async function inputCityWeather(city){
    cityName.innerHTML=city 
    const api_key="ac6998d695f0438116ca7004a71d002d";
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`; 

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        details.style.display="none";
        console.log("error");
        return;
    }
    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    details.style.display="block";

    console.log(weather_data)
    temp2.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}`;
    max_temp.innerHTML=`${Math.round(weather_data.main.temp_max - 273.15)}°C`;
    min_temp.innerHTML=`${Math.round(weather_data.main.temp_min - 273.15)}°C`;
    humidity.innerHTML=`${Math.round(weather_data.main.humidity)}%`;
    humidity2.innerHTML=`${Math.round(weather_data.main.humidity)}`;
    feels_like.innerHTML=`${Math.round(weather_data.main.feels_like -273.15)}`;

    description.innerHTML=`${weather_data.weather[0].description}`
    wind_speed2.innerHTML=`${weather_data.wind.speed}`;
    gust.innerHTML=`${weather_data.wind.gust}`;
    deg.innerHTML=`${weather_data.wind.deg}`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "images/snow.png";
            break;

    }
     




}
submit.addEventListener("click", ()=>{
    inputCityWeather(city.value)
});
inputCityWeather('Mumbai')



    
