<template>
  <div id="app">
    <header>
      <div class="left">
        <img :src="logo" alt="Swift Recovery Logo" class="logo">
      </div>
      <div class="right">
        <h1>{{ centerName }}</h1>
        <p>The Best Alcohol and Drugs Rehab in Nairobi, Kenya</p>
        <p>Welcome to Swift Recovery</p>
        <p>Your path to a healthier life starts here.</p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerName: 'Swift Recovery',
      logo: '/public/image.jpg' // Update with the correct image path
    };
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
header {
  background-color: #c8d4d8;
  color: #333;
  padding: 20px;
  display: flex;
}
.left {
  flex: 1;
  text-align: left;
}
.right {
  flex: 2;
  text-align: left;
  padding-left: 20px;
}
.logo {
  width: 400px; /* Adjust size as needed */
  height: auto;
}
h1 {
  color: #333;
  margin-top: 0;
}
</style>
