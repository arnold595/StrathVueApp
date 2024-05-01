<template>
  <div class="charges-component">
    <h2>Charges</h2>
    
    <!-- Display Charges -->
    <div v-if="charges.length" class="charges-list">
      <ul>
        <li v-for="charge in charges" :key="charge.id" class="charge-item">
          {{ charge.description }} - Ksh. {{ charge.amount }}
          <button @click="editCharge(charge)">Edit</button>
          <button @click="deleteCharge(charge.id)">Delete</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No charges found.</p>
    </div>

    <!-- Add New Charge -->
    <div class="add-charge">
      <h3>Add New Charge</h3>
      <form @submit.prevent="addCharge">
        <input type="text" v-model="newCharge.description" placeholder="Description" required>
        <input type="number" v-model="newCharge.amount" placeholder="Amount (in Ksh)" required>
        <button type="submit">Add Charge</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      charges: [
        { id: 1, description: 'Intake assessment and tests', amount: 15000 },
        { id: 2, description: 'Bed, boarding, food and daily psychotherapy (per day)', amount: 3000 },
        { id: 3, description: 'Bed, boarding, food and daily psychotherapy (non-Kenyan and corporate patients)', amount: 5000 },
        { id: 4, description: 'One-month Detoxification and Associated Medical Treatment', amount: 65000 },
        { id: 5, description: '(Optional) Naltrexone Implant and Insertion', amount: 85000 },
        { id: 6, description: '(Optional) Naltrexone tablets (per month)', amount: 15000 },
        { id: 7, description: 'Treatment of pre-existing conditions', amount: 'Charged separately' },
        { id: 8, description: 'Discharge procedure after completion of treatment', amount: 5000 }
      ],
      newCharge: {
        description: '',
        amount: 0
      }
    };
  },
  methods: {
    addCharge() {
      const newChargeId = this.charges.length > 0 ? this.charges[this.charges.length - 1].id + 1 : 1;
      this.newCharge.id = newChargeId;
      this.charges.push({...this.newCharge});
      this.newCharge = { description: '', amount: 0 };
    },
    editCharge(charge) {
      console.log("Editing charge:", charge);
    },
    deleteCharge(chargeId) {
      this.charges = this.charges.filter(charge => charge.id !== chargeId);
    }
  }
};
</script>

<style scoped>
.charges-component {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.charges-list {
  margin-top: 20px;
}

.charge-item {
  margin-bottom: 10px;
}

.add-charge {
  margin-top: 20px;
}
</style>
