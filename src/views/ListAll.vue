<template>
  <section aria-label="list all users info" class="container mt-3">
    <div class="row">
      <div class="col listAll__header--container">
        <h3 class="text-color-black listAll_header mx-1">Users Info</h3>
        <router-link
          to="/users/create"
          type="button"
          class="btn btn-dark rounded-1"
        >
          <i class="fa fa-plus-circle"></i>
          USER
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ListAll",
};
</script>
<style scoped></style>
