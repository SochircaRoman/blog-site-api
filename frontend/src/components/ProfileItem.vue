<template>
  <div class="wrapper">
    <header class="profile">

      <h3><strong>{{ currentUser.username }}</strong> Profile</h3>

      <div class="profile__picture">
		    <img src="" alt="Profile picture" class="profile__picture-img">
		  </div>

      <div class="profile__information">
        <div class="profile__information-field"><strong>Id:</strong>{{ currentUser._id }}</div>
        <div class="profile__information-field"><strong>Email:</strong>{{ currentUser.email }}</div>
        <div class="profile__information-field"><strong>Root:</strong>{{ currentUser.adminRoot }}</div>
      </div>

      <button @click="handleLogout">Logout</button>

    </header>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({}),
  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("auth/logout").then(
        () => {
          this.$router.push("/login");
        },
        (error) => {
          this.loading = false;
          console.log(error);
          this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        }
      )
    }
  },
  mounted () {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>

.wrapper {
  max-width: 25%;
  margin: 0 auto;
  margin-top: 75px;
}

.img_container {
  text-align: center;
  margin: 24px 0 12px 0;
}

.profile_img {
  width: 100px;
  border-radius: 50%;
}

.input_container {
  padding: 16px;
}

.input_group {
  margin-bottom: 15px;
}

.submit_btn {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 20px;
}

.submit_btn:hover {
  opacity: 0.8;
}

.input_field {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.error-feedback {
  color: #f23648;
}

.response {
  margin: -10px;
  margin-bottom: 20px;
}

.message__respones {
  color: #f23648;
  text-align: center;
}

.other {
  min-height: 30px;
  padding-top: 10px;
  display: flex;
  justify-content: space-around;
  background-color:#f1f1f1;
}

.other_info-link {
  text-decoration: none;
  font-size: 15px;
}

</style>