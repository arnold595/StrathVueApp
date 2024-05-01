<template>
  <div class="about-us-container">
    <h1>About Us</h1>
    <div class="mission-section">
      <h2>Our Mission:</h2>
      <p>
        At <strong>{{ centerName }}</strong>, our mission is to provide comprehensive and compassionate care for individuals struggling with alcohol and substance abuse disorders. We are dedicated to helping our clients achieve sobriety, regain control of their lives, and build a foundation for long-term recovery.
      </p>
    </div>
    <div class="services-section">
      <h2>Our Services:</h2>
      <ul>
        <li>Individual Counseling</li>
        <li>Group Therapy</li>
        <li>Family Counseling</li>
        <li>Medication-Assisted Treatment (MAT)</li>
        <li>Aftercare Planning</li>
        <li>24/7 Support Helpline</li>
        <li>Community Outreach Programs</li>
      </ul>
    </div>
    <div class="why-choose-us-section">
      <h2>Why Choose Us:</h2>
      <ul>
        <li>Experienced and Compassionate Staff</li>
        <li>Personalized Treatment Plans</li>
        <li>Confidential and Nonjudgmental Environment</li>
        <li>Evidence-Based Therapies</li>
        <li>Commitment to Client Success</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerName: "Swift Recovery" 
    };
  },
  mounted() {
    fetch('/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
};
</script>

<style scoped>
.about-us-container {
  padding: 20px; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mission-section,
.services-section,
.why-choose-us-section {
  margin-bottom: 20px;
}
</style>
