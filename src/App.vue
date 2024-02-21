<script setup>
import navbar from './components/Navbar.vue'
import footer from './components/Footer.vue'
</script>

<template>
<v-app>
<navbar/>
<v-main>
    <router-view></router-view>
</v-main>
<footer/>
</v-app>
</template>