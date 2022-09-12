<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="listAll_header mt-4">Edit User</h3>
      </div>
    </div>
    <div class="row mt-3" v-if="!loading">
      <form class="col-md-4 p-4 shadow-lg" @submit.prevent="updateSubmit">
        <div class="form-group">
          <label for="InputName" class="sr-only">Name</label>
          <input
            type="text"
            class="form-control mb-2"
            id="inputName"
            v-model="user.name"
            aria-describedby="Name"
            :placeholder="user.name"
            @keyup="checkName"
          />
          <div v-if="error" class="alert">{{ error }}</div>

          <label for="exampleInputEmail1" class="sr-only">Email address</label>
          <input
            type="email"
            v-model="user.email"
            class="form-control mb-2"
            id="InputEmail1"
            aria-describedby="emailHelp"
            :placeholder="user.email"
          />
          <input
            type="phone"
            v-model="user.phone"
            class="form-control my-2"
            id="InputPhone"
            aria-describedby="phoneHelp"
            :placeholder="user.phone"
          />
        </div>
        <button type="submit" class="btn btn-dark mb-2">Update</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "EditOne",
  data: function () {
    return {
      userId: this.$route.params.userId,
      loading: false,
      user: {},
      errMessage: null,
      error: "",
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
    } catch (err) {
      this.errMessage = err;
      this.loading = false;
    }
  },
  methods: {
    updateSubmit: async function () {
      try {
        const user = await axios.put(
          `https://jsonplaceholder.typicode.com/users/${this.userId}`,
          this.user
        );

        if (user) {
          return this.$router.push("/");
        } else {
          return this.$router.push(`/users/edit/${this.userId}`);
        }
      } catch (e) {
        console.log(e);
      }
    },
    checkName() {
      if (/[^a-zA-Z]/.test(this.user.name)) {
        this.error = "Input value contains other syantax.";
      } else {
        this.error = "";
      }
    },
  },
};
</script>
<style scoped></style>
