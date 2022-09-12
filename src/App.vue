<template>
  <div>
    <NavbarComponent />
    <router-view></router-view>
  </div>
</template>
<script>
// import SpinnerComponent from "./components/SpinnerComponent.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
export default {
  name: "App",
  components: {
    NavbarComponent,
    // SpinnerComponent,
  },
};
</script>
<style></style>
