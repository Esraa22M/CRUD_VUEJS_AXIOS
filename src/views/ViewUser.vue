<template>
  <div class="container">
    <h3 class="text-color-black listAll_header mx-1 mt-4">Users Info</h3>
    <!-- spinner -->
    <div v-if="loading">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <SpinnerComponent />
        </div>
      </div>
    </div>
    <!-- if there is error getting users -->
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <h3 class="text-danger fw-bold">{{ errMessage }}</h3>
        </div>
      </div>
    </div>
    <!-- user data is loading here -->
    <div
      class="row d-flex justify-content-center mt-2 container"
      v-if="!loading && Object.keys(user).length > 0"
    >
      <ul class="list-group rounded-0 col-md-6">
        <li class="list-group-item">
          <span class="text-secondary">Name:</span
          ><span class="fw-bold px-2">{{ user.name }}</span>
        </li>
        <li class="list-group-item">
          <span class="text-secondary">email:</span
          ><span class="fw-bold px-2">{{ user.email }}</span>
        </li>
        <li class="list-group-item">
          <span class="text-secondary">Phone:</span
          ><span class="fw-bold px-2">{{ user.phone }}</span>
        </li>
      </ul>
      <div class="mt-4 d-flex justify-content-center">
        <router-link
          to="/"
          class="btn btn-dark d-flex justify-content-center align-items-center col-4"
          ><i class="fa fa-arrow-left"></i>
          <span class="mx-2">back</span></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SpinnerComponent from "../components/SpinnerComponent.vue";

export default {
  name: "ViewUser",
  data: function () {
    return {
      userId: this.$route.params.id,
      loading: false,
      user: {},
      errMessage: null,
    };
  },
  created: async function () {
    try {
      this.loading = true;
      const user = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${this.userId}`
      );

      this.user = user.data;
      this.loading = false;
    } catch (e) {
      this.errMessage = e;
      this.loading = false;
    }
  },
  components: {
    SpinnerComponent,
  },
};
</script>
<style scoped></style>
