// Example using Axios in Vue.js
import axios from 'axios';

axios.get('http://localhost:3000/api/data')
  .then(response => {
    console.log(response.data); // Data received from the server
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
