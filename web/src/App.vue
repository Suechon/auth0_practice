<template>
  <div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  height: 100%;
  background: #abd0c7;
}
</style>
