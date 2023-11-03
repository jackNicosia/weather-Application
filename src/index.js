import { performSearch } from './search';
import './style.css';
import './zoom.png';
import { getWeatherByLocation } from './geolocationWeather';

getWeatherByLocation();


  document.getElementById('search-btn').addEventListener('click', performSearch);
  document.getElementById('search').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      performSearch();
    }
  });

  



