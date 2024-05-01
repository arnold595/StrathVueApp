<template>
  <div class="treatment-component">
    <!-- Navigation Bar -->
    <nav>
      <ul class="tab-labels">
        <li @click="currentTab = 'residential'"><b>Residential Treatment</b></li>
        <li @click="currentTab = 'individualized'"><b>Individualized Counseling</b></li>
        <li @click="currentTab = 'group'"><b>Group Counseling</b></li>
        <li @click="currentTab = 'family'"><b>Family Therapy</b></li>
        <li @click="currentTab = 'detoxification'"><b>Detoxification</b></li>
      </ul>
    </nav>

    <!-- Content based on selected tab -->
    <div class="tab-content">
      <div v-if="currentTab === 'residential'">
        <h2>Residential Treatment</h2>
        <!-- Residential Treatment Section -->
        <p>Our residential treatment programme provides care 24 hours a day in a Christian-based therapeutic community setup. The duration of stay is usually dependent on the severity of addiction and the patient's response to treatment. However, for most patients, the rehabilitation period lasts 90 days (3 months).</p>
      </div>

      <div v-if="currentTab === 'individualized'">
        <h2>Individualized Counseling</h2>
        <!-- Individualized Counseling Section -->
        <p>This type of counselling focuses on reducing and eventually stopping the use of illicit drugs or alcohol. It also addresses issues related to impaired functioning — such as career growth, family and social relations, as well as key aspects of the patient's journey to full recovery. Through its emphasis on the attainment of set behavioural goals, individualized counselling helps the patient develop coping strategies and tools to abstain from drug use and maintain abstinence. The addiction counsellors use the 12-steps program for the rehabilitation and make internal referrals for needed supplemental services such as psychiatric care when our in-house psychiatrist attends to all cases requiring mental health care.</p>
      </div>

      <div v-if="currentTab === 'group'">
        <h2>Group Counseling</h2>
        <!-- Group Counseling Section -->
        <p>Our group therapy capitalizes on the social reinforcement offered by peer discussions to help individuals to promote drug-free lifestyles. Research has shown that when group therapy is offered in conjunction with individualized counselling, positive outcomes are achieved.</p>
      </div>

      <div v-if="currentTab === 'family'">
        <h2>Family Therapy</h2>
        <!-- Family Therapy Section -->
        <p>Most of the issues surrounding addiction to alcohol and drugs emanate and perpetuate within the addict's family. At Fountain of Hope, we involve the family intensively in our treatment programs. Family therapy sessions are occasions to counsel the whole family and get an in-depth understanding of their family member's addiction and how to treat it.</p>
      </div>

      <div v-if="currentTab === 'detoxification'">
        <h2>Detoxification</h2>
        <!-- Detoxification Section -->
        <p>This involves helping the patient's body to clear itself of the harmful toxins that accumulate in their bodies due to prolonged abuse of drugs and alcohol. Due to the acute and potentially dangerous physiological effects that result from sudden stopping drug use, we use special medication to help the patient manage the effects of the withdrawal and to flush out the toxins that have accumulated in their bodies.</p>
      </div>

      <!-- Add more sections for each tab -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 'residential', // Default tab
    };
  }
};
</script>

<style scoped>
.treatment-component {
  display: flex;
  flex-direction: column;
  align-items: center; /* Align content in the center horizontally */
}

.tab-labels {
  display: flex;
  list-style-type: none;
  padding: 0;
}

.tab-labels li {
  margin-right: 20px;
  cursor: pointer;
}

.tab-labels li b {
  display: inline-block;
}

.tab-content {
  margin-top: 40px; /* Increased margin-top value for more spacing */
}

/* Add your component styles here */
</style>
