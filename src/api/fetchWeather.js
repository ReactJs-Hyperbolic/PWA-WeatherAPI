import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '6b5cf02635da88f51abb3d0965a9ef01';

export const fetchWeather = async (query, isFarenheit) => {
  var units;
  if (isFarenheit) {
    units = 'metric';
  } else {
    units = 'imperial';
  }

  console.log('UNITS = ', units);

  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: units,
      APPID: API_KEY,
    },
  });

  return data;
};
