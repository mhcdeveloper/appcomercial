import axios from 'axios';

export default API = axios.create({
  baseURL: 'http://192.168.100.10:3030/',    
  // baseURL: 'http://192.168.43.57:3030/',    
});