<template>
  <div>
    <div class="h-screen w-screen flex justify-center items-center">
      <div class="h-45 grid grid-rows-4 grid-flow-col gap-4">
        <p class="text-6xl font-black text-[#5a303b]">Top Page</p>
        {{ user }}

        <button
          v-if="!isAuthenticated"
          @click="login"
          class="bg-[#5a303b] object-center text-[#abd0c7] font-bold py-2 px-4"
        >
          LOGIN
        </button>
        <button
          v-else
          @click="logout"
          class="
            border-solid border-2 border-[#5a303b]
            object-center
            text-[#5a303b]
            font-bold
            py-2
            px-4
          "
        >
          LOGOUT
        </button>

        <div class="h-5 grid grid-cols-2">
          <p
            class="
              p-1
              text-[#5a303b]
              border-solid border-2 border-[#5a303b]
              text-center
            "
          >
            STATUS
          </p>
          <p
            v-if="isAuthenticated"
            class="p-1 bg-[#5a303b] text-[#abd0c7] text-center"
          >
            LOGIN
          </p>
          <p
            v-else
            class="
              p-1
              text-[#5a303b]
              border-solid border-2 border-[#5a303b]
              text-center
            "
          >
            LOGOUT
          </p>
        </div>
        <Navigation />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
import { useAuth0 } from "@auth0/auth0-vue";
import Navigation from "../components/NavigationComponent.vue";

export default {
  components: { Navigation },
  setup() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
      logout: () => {
        logout({ returnTo: window.location.origin });
      },
      isAuthenticated,
      user,
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