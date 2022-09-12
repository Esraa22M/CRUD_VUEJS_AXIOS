<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="listAll_header mt-4">Add New User</h3>
      </div>
    </div>
    <div class="row mt-3">
      <form class="col-md-4 p-4 shadow-lg" @submit.prevent="submitCreate">
        <div class="form-group">
          <label for="InputName" class="sr-only">Name</label>
          <input
            type="text"
            class="form-control mb-2"
            id="inputName"
            v-model="user.name"
            aria-describedby="Name"
            @keyup="checkName"
            placeholder="Enter Name"
          />
          <div v-if="error" class="alert">{{ error }}</div>

          <label for="exampleInputEmail1" class="sr-only">Email address</label>
          <input
            type="email"
            v-model="user.email"
            class="form-control mb-2"
            id="InputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <span class="text-danger">{{ email }}</span>
          <input
            type="phone"
            v-model="user.phone"
            class="form-control my-2"
            id="InputPhone"
            aria-describedby="phoneHelp"
            placeholder="Enter Phone"
          />
        </div>

        <button type="submit" class="btn btn-dark mb-2">Add</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CreateOne",
  data: function () {
    return {
      user: {
        name: "",
        username: "",
        email: "",
        address: {},
        phone: "",
        website: "",
        company: {},
      },
      error: "",
    };
  },
  methods: {
    checkName() {
      if (/[^a-zA-Z]/.test(this.user.name)) {
        this.error = "Input value contains other syantax.";
      } else {
        this.error = "";
      }
    },
    submitCreate: async function () {
      try {
        const user = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          this.user
        );

        if (user) {
          return this.$router.push("/");
        } else {
          return this.$router.push("/users/create");
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style scoped></style>
