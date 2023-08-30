// axios.js
import axios from 'axios';

// create an axios instance
const instance = axios.create({
  // set the base URL for your requests
  baseURL: 'http://localhost:8000/api'
  
});

// set the default Authorization header with the token
const token = localStorage.getItem('token');
if (token) {
  instance.defaults.headers.common['Authorization'] = `Token ${token}`;
  instance.defaults.headers.common['Content-Type'] = 'application/json';
}

// use an interceptor to handle errors globally
instance.interceptors.response.use(
  (response) => {
    // do something with the response data
    return response;
  },
  (error) => {
    // handle the error
    console.error(error);
    return Promise.reject(error);
  }
);

// export the instance
export default instance;
