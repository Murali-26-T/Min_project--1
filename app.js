let city_name =document.querySelector('.city_name');
let btn= document.querySelector('.search_btn');
let window_obj=document.querySelector('.weather-icon');
btn.addEventListener('click',()=>{
    checkWeather(city_name.value)
})
async function checkWeather(city_name){
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city_name}&appid=a941b233c808e962aa416036741d945a`);
    var data=await response.json();
    if(response.status==404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.error').style.color='red';

    }else{
         document.querySelector('.error').style.display='none'
    }
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+'°C'; 
    document.querySelector('.wind').innerHTML = data.wind.speed+'m/s'; 
    document.querySelector('.humidity').innerHTML  = data.main.humidity+'%'; 
    if(data.weather[0].main=="Clear"){
        window_obj.src="clear.png";
    }
    else if(data.weather[0].main=="Clouds"){
        window_obj.src="clouds.png";
    }
    else if(data.weather[0].main=="Mist"){
        window_obj.src="mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        window_obj.src="rain.png";
    }else{

    }
}






