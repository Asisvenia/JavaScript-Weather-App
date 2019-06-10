
'use strict';

searchButton.addEventListener('click', searchWeather);
document.addEventListener('keypress', function(event){
	if(event.keyCode === 13) {
		searchWeather();
	}
});

function searchWeather() {

	document.querySelector('#load').style.display = 'block';
	document.querySelector('#weather').style.display = 'none';

	var cityName = searchCity.value;

	var http = new XMLHttpRequest();
	var apiKey = 'efb901af1c145463a0635241b76918d7';
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;
	var method = 'GET';

	if(cityName.trim().length === 0) {
		alert('Please enter a city name!');
	}

	http.open(method, url);

	http.onreadystatechange = function(data) {
		if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
			var data = JSON.parse(http.responseText);
			var weatherData = new Weather(cityName.charAt(0).toUpperCase()+ cityName.slice(1), data.weather[0].description.toUpperCase(), data.main.temp, data.weather[0].icon,
											data.main.temp_min, data.main.temp_max, data.clouds.all, data.main.humidity, data.main.pressure, data.wind.speed, data.wind.deg, 
												);
			console.log(weatherData.forecast);
			updateUi(weatherData);

		} else if (http.readyState === XMLHttpRequest.DONE) {
			alert('Something went wrong!');
			document.querySelector('#load').style.display = 'none';
		}
	}
	
	http.send();
};

function updateUi(weatherData) {
	document.querySelector('#weatherCity').textContent = weatherData.cityName;
	document.querySelector('#weatherDescription').textContent = weatherData.description;
	document.querySelector('#ic').src = "http://openweathermap.org/img/w/" + weatherData.icon +  ".png";
	document.querySelector('#weatherTemperature').innerHTML = weatherData.temperature + "&deg;C";
	document.querySelector('#weatherTemperatureMin').innerHTML = weatherData.temperatureMin + "&deg;C";
	document.querySelector('#weatherTemperatureMax').innerHTML = weatherData.temperatureMax + "&deg;C";
	document.querySelector('#weatherCloud').textContent = weatherData.cloud + '%';
	document.querySelector('#weatherHumidity').textContent = weatherData.humidity + '%';
	document.querySelector('#weatherPressure').textContent = weatherData.pressure + '%';
	document.querySelector('#weatherWindS').textContent = weatherData.windSpeed;
	document.querySelector('#weatherWindD').textContent = weatherData.windDeg;


	document.querySelector('#weather').style.display = 'block';
	document.querySelector('#load').style.display = 'none';
};

//document.querySelector('#weatherWindD').textContent = weatherData.windDeg;