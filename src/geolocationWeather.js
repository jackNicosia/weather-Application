import { formattedDate } from './formattedDate';

export function getWeatherByLocation () {
    window.onload = function () {
        
            if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                getWeatherDataByCoordinates(latitude, longitude);
            }, function (error) {
                console.error("Geolocation error:", error);
                document.getElementById("weatherResult").innerHTML = "Unable to get your location.";
            });
            } else {
            document.getElementById("weatherResult").innerHTML = "Geolocation is not supported in your browser.";
            }

        };
    
          

        
        function getWeatherDataByCoordinates(latitude, longitude) {
            const apiKey = '9076fa134ade42be857175621230609'; // Your WeatherAPI key
            const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=7`;
            
            fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {

            //Current Day
                const temperature = data.current.temp_f;
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

               

                


            //Converts the 2023-11-02 into November 2, 2023.   
                const inputTime = date.replace(" ", "T"); // Replacing the space with "T" for proper date parsing
                const dateObject = new Date(inputTime);

                const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

                const dayOfWeek = days[dateObject.getDay()];
                const month = months[dateObject.getMonth()];
                const day = dateObject.getDate();
            


            //Converts the last_updated: "2023-11-02 13:45" to a more friendly 1:45 PM. 
                const hours = dateObject.getHours();
                const minutes = dateObject.getMinutes();
                const amOrPm = hours >= 12 ? "PM" : "AM";
                const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
                const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

                const formattedTime = `${dayOfWeek}, ${month} ${day}, ${formattedHours}:${formattedMinutes} ${amOrPm}`;






               
                
                document.getElementById("location").innerHTML = locationName + ", " + locationRegion;
                document.getElementById("condition").innerHTML = condition;
                document.getElementById("temp").innerHTML = temperature + " °F"; 
                document.getElementById("feelsLike").innerHTML = "Feels like " + feelsLike + " °F"
                document.getElementById("wind").innerHTML = windMph + " Mph";
                document.getElementById("minTemp").innerHTML = "Low " + minTemp + " °F";
                document.getElementById("maxTemp").innerHTML = "High " + maxTemp + " °F";
                document.getElementById("snow").innerHTML = "Snow " + snow + "%";
                document.getElementById("rain").innerHTML = "Rain " + rain + "%";
                document.getElementById("date").innerHTML = formattedTime;
                document.getElementById("img1").src = "https:" + img1;
            
              console.log(img1);


            //To format the next two dates
              function formatDate(dateString) {
                const date = new Date(dateString);
                const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            
                const dayOfWeek = days[date.getUTCDay()];
                const month = months[date.getUTCMonth()];
                const day = date.getUTCDate();
            
                return `${dayOfWeek}, ${month} ${day}`;
            }

            
            
            
               

            //2nd Day
                const date2 = data.forecast.forecastday[1].date;
                const condition2 = data.forecast.forecastday[1].day.condition.text;
                const minTemp2 = data.forecast.forecastday[1].day.mintemp_f;
                const maxTemp2 = data.forecast.forecastday[1].day.maxtemp_f;
                const rain2 = data.forecast.forecastday[1].day.daily_chance_of_rain;
                const snow2 = data.forecast.forecastday[1].day.daily_chance_of_snow;
                const wind2 = data.forecast.forecastday[1].day.maxwind_mph;
                const img2 = data.forecast.forecastday[1].day.condition.icon;
                const formattedDate2 = formatDate(date2);
               
    




                document.getElementById("date2").innerHTML = formattedDate2; 
                document.getElementById("condition2").innerHTML = condition2;
                document.getElementById("minTemp2").innerHTML = "Low " + minTemp2 + " °F";
                document.getElementById("maxTemp2").innerHTML = "High " + maxTemp2 + " °F";
                document.getElementById("rain2").innerHTML = "Rain " + rain2 + "%";
                document.getElementById("snow2").innerHTML = "Snow " + snow2 + "%";
                document.getElementById("wind2").innerHTML = "Max " + wind2 + "  Mph";
                document.getElementById("img2").src = "https:" + img2;





            //3rd Day
                const date3 = data.forecast.forecastday[2].date;
                const condition3 = data.forecast.forecastday[2].day.condition.text;
                const minTemp3 = data.forecast.forecastday[2].day.mintemp_f;
                const maxTemp3 = data.forecast.forecastday[2].day.maxtemp_f;
                const rain3 = data.forecast.forecastday[2].day.daily_chance_of_rain;
                const snow3 = data.forecast.forecastday[2].day.daily_chance_of_snow;
                const wind3 = data.forecast.forecastday[2].day.maxwind_mph;
                const img3 = data.forecast.forecastday[2].day.condition.icon
                const formattedDate3 = formatDate(date3);

                document.getElementById("date3").innerHTML = formattedDate3; 
                document.getElementById("condition3").innerHTML = condition3;
                document.getElementById("minTemp3").innerHTML = "Low " + minTemp3 + " °F";
                document.getElementById("maxTemp3").innerHTML = "High " + maxTemp3 + " °F";
                document.getElementById("rain3").innerHTML = "Rain " + rain3 + "%";
                document.getElementById("snow3").innerHTML = "Snow " + snow + "%";
                document.getElementById("wind3").innerHTML = "Max " + wind3 + " Mph";
                document.getElementById("img3").src = "https:" + img3;





            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
                document.getElementById("weatherResult").innerHTML = "Unable to fetch weather data.";
            });
        }
    }