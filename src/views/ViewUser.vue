<template>
  <div class="container">
    <h3 class="text-color-black listAll_header mx-1 mt-4">Users Info</h3>

    <div class="row d-flex justify-content-center mt-2 container">
      <ul class="list-group rounded-0 col-md-6">
        <li class="list-group-item">Name:</li>
        <li class="list-group-item">email:</li>
        <li class="list-group-item">gender:</li>
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
export default {
  name: "ViewUser",
};
</script>
<style scoped></style>
