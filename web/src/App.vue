<template>
  <div>
    <div class="m-5 flex items-left">
      <p class="p-1 text-[#5a303b]">STATUS</p>
      <p v-if="isAuthenticated" class="p-1 bg-[#5a303b] text-[#abd0c7]">
        LOGIN
      </p>
      <p v-else class="p-1 bg-[#5a303b] text-[#abd0c7]">LOGOUT</p>
    </div>
    <router-view />
  </div>
</template>
<script>
/* eslint-disable*/
import { useAuth0 } from "@auth0/auth0-vue";
export default {
  setup() {
    const { isAuthenticated } = useAuth0();
    return { isAuthenticated };
  },
  methods: {
    push() {
      console.log(this.isAuthenticated);
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* nav {
  padding: 30px;
} */

/* nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* nav a.router-link-exact-active {
  color: #42b983;
} */
html {
  height: 100%;
  background: #abd0c7;
}
</style>
