
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
      

       })
       .catch(function(err) {
         console.log("error");
       });
   }
   
