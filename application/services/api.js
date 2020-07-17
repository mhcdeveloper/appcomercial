import axios from 'axios';

export default API = axios.create({
  baseURL: 'http://192.168.100.10:3000/',    
  // baseURL: 'http://www.bravo2020.com.br/',    
});