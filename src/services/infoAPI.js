import axios from 'axios';
axios.defaults.baseURL = 'https://api.covid19api.com';

export const fetchInfoByCounties = () => {
  return axios.get('/summary');
};
