<template>
  <div class="main">
    <div class="main-title">{{ msg }}</div>
    <div class="user-count">
      <div class="count font-weight-bold">{{ count }}</div>
      Users
    </div>
    <div class="row w-100 justify-content-center">
      <div v-for="user in users" :key="user.name" class="col-6 mt-2">
        <div class="card p-3 ml-2">
          <div class="title text-secondary ">Name</div>
          <div class="name">{{ user.name }}</div>
          <div class="row">
            <div class="col-4">
              <div class="title text-secondary">Email</div>
              <div class="email">{{ user.email }}</div>
            </div>
            <div class="col-4">
              <div class="title text-secondary">Phone</div>
              <div class="phone">{{ user.phone }}</div>
            </div>
            <div class="col-4">
              <div class="title text-secondary">Website</div>
              <div class="website text-success" >{{ user.website }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Users",
  props: {
    msg: String,
  },
  computed: {
    users() {
      return this.$store.getters.getData;
    },
    count() {
      return this.$store.getters.getCountData;
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setData(response.data);
      })
      .catch(() => (this.loading = false));
  },
  methods: {
    setData(data) {
      this.$store.dispatch("setData", data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #f5f7fa;
  padding: 10px;
}
.count {
  color: #83dd8b;
  font-weight: 800;
  margin-right: 10px;
}
.user-count {
  border-bottom: 1px solid #e1e1e7;
  color: #646464;
  display: flex;
}
</style>
