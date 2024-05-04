const apiKey = "9b13e0b53b2b26f8ef4653386c4923b7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.getElementById("button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {

  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main === "Clouds") {
  weatherIcon.src = "weather imgs/cloudy.png"
 }else if (data.weather[0].main == "Drizzle") {
  weatherIcon.src = "weather imgs/drizzle.png"
 } else if (data.weather[0].main == "Mist") {
  weatherIcon.src = "weather imgs/mist.png"
 } else if (data.weather[0].main == "Rain") {
  weatherIcon.src = "weather imgs/rain.png"
 } else if (data.weather[0].main == "Wind") {
  weatherIcon.src = "weather imgs/wind.png"
 } else if(data.weather[0].main == "Snow") {
  weatherIcon.src = "weather imgs/snow.png"
 } else if(data.weather[0].main == "Clear") {
  weatherIcon.src = "weather imgs/sun.png"
 }

 document.querySelector(".weather").style.display = "block";
 document.querySelector(".error").style.display = "none";
  }
 

}


searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})



