
const apikey = "ff3d51d643324b4c9c742314231806";

searchbox = document.querySelector(".search input");
searchbutton = document.querySelector(".search button");
weathericon = document.querySelector(".w-icon");

async function checkweather(city) {
  const apiurl = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`;
  const response = await fetch(apiurl);
  const data = await response.json();
  

  // Update the city, temp, etc. according to the user input
  document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
  document.querySelector(".wind").innerHTML = data.current.wind_kph + "KM/H";

  // Update the image according to the weather condition
  const weatherCondition = data.current.condition.text.toLowerCase();
  if (weatherCondition.includes("cloud")) {
    weathericon.src = 'images/clouds.png';
  } else if (weatherCondition.includes("clear")) {
    weathericon.src = 'images/clear.png';
  } else if (weatherCondition.includes("drizzle")) {
    weathericon.src = 'images/drizzle.png';
  } else if (weatherCondition.includes("mist")) {
    weathericon.src = 'images/mist.png';
  } else if (weatherCondition.includes("rain")) {
    weathericon.src = 'images/rain.png';
  } else if (weatherCondition.includes("snow")) {
    weathericon.src = 'images/snow.png';
  }

  document.querySelector(".weather").style.display = "block";
}

// In the event listener for the search button, I retrieved the value of the search input and trim any trailing whitespace.

searchbutton.addEventListener("click", () => {
  const city = searchbox.value.trim();
  if (city) {
    checkweather(city);
    searchbox.value = "";
  } else {
    alert("Please enter a city name.");
  }
});
