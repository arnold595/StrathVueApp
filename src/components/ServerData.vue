<template>
    <div>
      <h1>Server Data</h1>
      <div v-if="serverData">
        <p>Data received from the server: {{ serverData }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        serverData: null
      };
    },
    mounted() {
      axios.get('http://localhost:3000/api/data')
        .then(response => {
          this.serverData = response.data; // Store data received from the server
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  /* Component styles */
  </style>
  