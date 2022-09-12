<template>
  <section aria-label="list all users info" class="container mt-3">
    <div class="row">
      <div class="col listAll__header--container">
        <h3 class="text-color-black listAll_header mx-1" @click="getUsers">
          Users Info
        </h3>
        <router-link
          to="/users/create"
          type="button"
          class="btn btn-dark rounded-1"
        >
          <i class="fa fa-plus-circle"></i>
          USER
        </router-link>
      </div>
      <div class="row mt-3 d-flex justify-content-center">
        <form class="form-inline col-md-4 d-flex">
          <label class="sr-only" for="inlineFormInputName2">Name</label>
          <input
            type="text"
            class="form-control m-2"
            id="inlineFormInputName2"
            placeholder="User Name"
          />
          <button type="submit" class="btn background-color-primary mb-2">
            Find
          </button>
        </form>
      </div>
    </div>

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
    <!-- data loading here -->
    <div class="row mt-2 d-flex justify-content-center" v-if="users.length > 0">
      <div class="col-md-5 ml-2" v-for="user of users" :key="user.id">
        <div class="card my-2 text-light background-color-primary rounded-0">
          <div class="card-body">
            <div class="row">
              <div class="col-10">
                <ul class="list-group rounded-0">
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
              </div>
              <div
                class="col-2 d-flex justify-content-center align-items-center flex-column"
              >
                <router-link
                  :to="`/users/view/${user.id}`"
                  class="btn btn-dark mb-1"
                >
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link to="/users/edit/:id" class="btn btn-dark mb-1">
                  <i class="fa fa-pen"></i>
                </router-link>
                <router-link
                  to="/users/delete"
                  class="btn btn-danger d-flex align-items-center justify-content-center"
                >
                  <i class="fa fa-trash"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SpinnerComponent from "../components/SpinnerComponent.vue";
import axios from "axios";
export default {
  name: "ListAll",
  data: function () {
    return {
      loading: false,
      users: [],
      errMessage: "",
    };
  },
  methods: {
    async getUsers() {
      try {
        this.loading = true;

        const users = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        this.users = users.data;
        this.loading = false;
      } catch (err) {
        this.errMessage = err;
        this.loading = false;
      }
    },

    // getUsers: async function () {
    //   try {
    //     console.log("hello");
    //     this.loading = true;
    //     let response = await UserService.getAllUsers();
    //     this.users = response.data;
    //     console.log(this.users, "esraa");
    //     this.loading = false;
    //   } catch (err) {
    //     this.errMessage = err;
    //     this.loading = false;
    //   }
    // },
  },

  created() {
    this.getUsers();
  },
  components: {
    SpinnerComponent,
  },
};
</script>
<style scoped></style>
