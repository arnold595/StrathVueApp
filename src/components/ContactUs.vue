<template>
  <div class="contact-us-container">
    <h1>Contact Us</h1>
    <p>
      If you have any questions or inquiries, please feel free to contact us using the information below:
    </p>
    <div class="contact-info">
      <h2>Address:</h2>
      <p>{{ centerAddress }}</p>
    </div>
    <div class="contact-info">
      <h2>Phone:</h2>
      <p>{{ centerPhone }}</p>
    </div>
    <div class="contact-info">
      <h2>Email:</h2>
      <p>{{ centerEmail }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerAddress: "Lang'ata road, Nairobi",
      centerPhone: "+254722334455",
      centerEmail: "info@swiftrecovery.com"
    };
  }
};
</script>

<style scoped>
.contact-us-container {
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.contact-info {
  margin-bottom: 20px;
}
</style>
