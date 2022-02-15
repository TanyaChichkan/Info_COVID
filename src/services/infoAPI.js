import axios from 'axios';
import { constantsText } from '../constants/constants';

axios.defaults.baseURL = 'https://api.covid19api.com';

export const fetchInfoByCounties = () => {
  return axios.get(constantsText.getInfoEndpoint);
};
