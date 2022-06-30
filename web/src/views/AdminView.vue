<template>
  <div>
    <div class="h-screen w-screen flex justify-center items-center">
      <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">
        <p class="text-6xl font-black text-[#5a303b]">Admin Page</p>

        <Navigation />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/NavigationComponent.vue";
export default {
  components: { Navigation },
  setup() {
    return {};
  },
  methods: {},
};
</script>