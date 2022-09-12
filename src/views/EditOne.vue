<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="listAll_header mt-4">Edit User</h3>
      </div>
    </div>
    <div class="row mt-3">
      <form class="col-md-4 p-4 shadow-lg">
        <div class="form-group">
          <label for="InputName" class="sr-only">Name</label>
          <input
            type="text"
            class="form-control mb-2"
            id="inputName"
            aria-describedby="Name"
            placeholder="Enter Name"
          />
          <label for="exampleInputEmail1" class="sr-only">Email address</label>
          <input
            type="email"
            class="form-control mb-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <p class="mt-2 sr-only">Gender</p>
        <div class="d-flex justify-content-around">
          <div>
            <label for="gender-male">Male</label>

            <input type="radio" id="gender" name="gender" value="0" />
          </div>
          <div class="mb-2">
            <label for="gender-email">female</label>

            <input type="radio" id="gender-female" name="gender" value="1" />
          </div>
        </div>

        <button type="submit" class="btn btn-dark mb-2">Update</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "EditOne",
};
</script>
<style scoped></style>
