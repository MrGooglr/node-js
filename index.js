//request package from npm is required to fetch the API response
const request = require('request');

//Enter your API key here (get it on openweathermap)
let apiKey = '';
let city = 'New Delhi';
let countryCode = '91';
//The EndPoint Url 
let requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

//Driver function
request(requestUrl, function (err, response, body) {
  if(err){
    console.log('error while fetching:', error);
  } else {
    let weather = JSON.parse(body);
	//console.log(weather);
    let message = `It's ${weather.main.temp} degree celsius in ${weather.name}!`;
    console.log('\n\n'+message+"\n\n");
  }
});
