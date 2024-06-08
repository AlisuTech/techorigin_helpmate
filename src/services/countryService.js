import axios from 'axios';

const API_URL = 'https://countriesnow.space/api/v0.1/countries/population/cities';

export const getCountriesAndCities = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};