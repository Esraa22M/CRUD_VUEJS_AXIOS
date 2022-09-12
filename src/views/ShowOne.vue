<template>
  <div class="row">
    <div class="col-10">
      <ul class="list-group rounded-0">
        <li class="list-group-item">Name:</li>
        <li class="list-group-item">email:</li>
        <li class="list-group-item">gender:</li>
      </ul>
    </div>
    <div
      class="col-2 d-flex justify-content-center align-items-center flex-column"
    >
      <router-link to="/users/view/:id" class="btn btn-dark mb-1">
        <i class="fa fa-eye"></i>
      </router-link>
      <router-link to="/users/edit/:id" class="btn btn-dark mb-1">
        <i class="fa fa-pen"></i>
      </router-link>
      <router-link
        to="/delete"
        class="btn btn-danger d-flex align-items-center justify-content-center"
      >
        <i class="fa fa-trash"></i>
      </router-link>
    </div>
    <router-link t0="/" class="btn btn-dark mt-2">back</router-link>
  </div>
</template>
<script>
export default {
  name: "ShowOne",
};
</script>
<style scoped></style>
