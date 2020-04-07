
//toggle menu//


function toggleMenu() {
    document.getElementById("navigation").classList.toggle("responsive");
 }
 
 
 
 
 
//today's date//
   
var d = new Date();
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var days = ['Sunday, ','Monday, ','Tuesday, ','Wednesday, ','Thursday, ','Friday, ','Saturday, '];

document.getElementById("todaysDate").innerHTML = 
days[d.getDay()] + ' '+ 
d.getDate() +' '+ 
months[d.getMonth()] +' '+ 
d.getFullYear();


//windchill from OpenWeather API//

const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83549,us&units=imperial&APPID=fa32a8a242aa5025fb20b3e30f41ee01";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
	console.log(jsObject);
	
	const weatherAPI = jsObject;

    document.getElementById('valCurrent').textContent = weatherAPI.weather[0].main;
    document.getElementById('valHigh').textContent = weatherAPI.main.temp;
    document.getElementById('valHumid').textContent = weatherAPI.main.humidity;
	document.getElementById('valWind').textContent = weatherAPI.wind.speed;

  });



const tempF = parseFloat(document.getElementById("valHigh").textContent);
const speed = parseFloat(document.getElementById("valWind").textContent);





if (tempF < 51 && speed < 4){
	var chill = windChill(tempF, speed);
	document.getElementById('valChill').textContent = chill.toFixed(1); 
}
else {
	document.getElementById('valChill').textContent = "N/A";
	document.getElementById('windUnit').textContent = "";
}

function windChill (tempF, speed) {
	var speedPower = Math.pow(speed, 0.16);
	var windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
	return windChillFactor;
}








 
 