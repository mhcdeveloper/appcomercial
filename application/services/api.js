import axios from 'axios';

export default API = axios.create({
  // baseURL: 'http://34.235.52.140:3010/',    
  baseURL: 'http://192.168.100.10:3000/'
  // baseURL: 'http://192.168.1.152:3000/',        
  // baseURL: 'http://www.bravo2020.com.br/',    
});