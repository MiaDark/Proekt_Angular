<template>
  <div>
    <div id="nav-bar-hidden">
      <button @click="toggleNavbar" class="menu-button">
        <div class="menu-icon"></div>
      </button>
    </div>
    <div id="nav-bar" v-if="navbarVisibility">
      <button @click="toggleNavbar" class="menu-button">
        <div class="menu-icon"></div>
      </button>
      <ul>
        <li>Recent reports</li>
        <li>Events</li>
        <li><router-link to="/contact" class="menu-button"> Contact </router-link></li>
        <li>Your coupons</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const navbarVisibility = ref(false);

const toggleNavbar = () => {
  navbarVisibility.value = !navbarVisibility.value;
};
</script>

<style scoped>
#nav-bar-hidden {
  position: fixed;
  top: 70px; /* Adjusted top position for a slightly lower button */
  left: 20px;
  z-index: 2;
}

#nav-bar {
  width: 200px;
  height: 100%;
  background-color: #2c3e50; /* Datching map background */
  color: #ecf0f1; 
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
}

.menu-button {
  background: #3498db; /* Distinguishable background color */
  border: none;
  cursor: pointer;
  padding: 15px; /* Adjusted padding for a larger clickable area */
  border-radius: 8px; /* Rounded corners for a distinctive look */
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 150px; /* Adjusted top position to move the button even lower down */
}

.menu-icon {
  width: 30px;
  height: 4px; 
  background-color: #ecf0f1; 
  margin: 4px 0; 
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  width: 30px;
  height: 4px; 
  background-color: #ecf0f1; 
  margin: 4px 0; 
}
</style>
