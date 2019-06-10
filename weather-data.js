'use strict';

function Weather(cityName, description, temperature, icon, temperatureMin, temperatureMax, cloud, humidity, pressure, windSpeed, windDeg) {
	this.cityName = cityName;
	this.description = description;
	this.icon = icon;
	this.temperature = temperature;
	this.temperatureMin = temperatureMin;
	this.temperatureMax = temperatureMax;
	this.cloud = cloud;
	this.humidity = humidity;
	this.pressure = pressure;
	this.windSpeed = windSpeed;
	this.windDeg = windDeg;
};