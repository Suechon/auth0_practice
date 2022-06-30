<template>
  <div>
    <div class="h-screen w-screen flex justify-center items-center">
      <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
        <p class="text-6xl font-black text-[#5a303b]">Top Page</p>

        <button
          @click="login"
          class="
            bg-[#5a303b]
            object-center
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
        >
          LOGIN
        </button>
        <button
          @click="logout"
          class="
            bg-[#5a303b]
            object-center
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
        >
          LOGOUT
        </button>
        {{ this.$auth0.isAuthenticated }}
        <!-- <pre v-if="this.isAuthenticated">
        <code>{{ this.user }}</code>
      </pre> -->
        <div>
          <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { loginWithRedirect, logout } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout({ returnTo: window.location.origin });
      },
    };
  },
  methods: {
    // login() {
    //   this.$auth0.loginWithRedirect();
    // },
    // logout() {
    //   this.$auth0.logout({ returnTo: window.location.origin });
    // },
  },
};
</script>