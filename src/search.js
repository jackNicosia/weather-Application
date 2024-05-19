
export function performSearch() {
     // Get the user's input
     const location = document.getElementById('search').value;
  
     // Modify the API URL based on the user's input
     const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=9076fa134ade42be857175621230609&q=${location}&days=7`;

     //http://api.weatherapi.com/v1/current.json?key=9076fa134ade42be857175621230609&q=${location} works
   
     // Use the modified URL to fetch data
     fetch(apiUrl, { mode: 'cors' })
       .then(function(response) {
         return response.json();
       })
       .then(function(response) {
         // Update the DOM with the fetched data as before
         console.log(response);
         document.getElementById('location').innerHTML = response.location.name + "," + "<br>" + response.location.region;
         document.getElementById('temp').innerHTML = response.current.temp_f + " °F";
         document.getElementById('condition').innerHTML = response.current.condition.text;
         console.log(response.forecast.forecastday[2].day.condition.text);



/* add rest of logic for search
         const feelsLike = data.current.feelslike_f;
         const condition = data.current.condition.text;
         const locationName = data.location.name;
         const locationRegion = data.location.region;
         const windMph = data.current.wind_mph;
         const minTemp = data.forecast.forecastday[0].day.mintemp_f;
         const maxTemp = data.forecast.forecastday[0].day.maxtemp_f;
         const snow = data.forecast.forecastday[0].day.daily_chance_of_snow;
         const rain = data.forecast.forecastday[0].day.daily_chance_of_rain;
         const img1 = data.current.condition.icon;
         const date = data.current.last_updated;

         document.getElementById("feelsLike").innerHTML = "Feels like " + feelsLike + " °F"
         document.getElementById("wind").innerHTML = windMph + " Mph";
         document.getElementById("minTemp").innerHTML = "Low " + minTemp + " °F";
         document.getElementById("maxTemp").innerHTML = "High " + maxTemp + " °F";
         document.getElementById("snow").innerHTML = "Snow " + snow + "%";
         document.getElementById("rain").innerHTML = "Rain " + rain + "%";
         document.getElementById("date").innerHTML = formattedTime;
         document.getElementById("img1").src = "https:" + img1;
      */

       })
       .catch(function(err) {
         console.log("error");
       });
   }
   
