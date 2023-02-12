<template>
  <div class="wrapper">
    <div class="profile">
      
      <div class="profile__picture">
		    <img src="/roman.jpg" alt="Profile picture" class="profile__picture-img">
		  </div>

      <hr>

      <div class="profile__information">
        <div class="profile__information-field" v-for="field in fieldNames" :key="field">
          <div class="field__name">{{ field }}:</div>
          <div class="field__data">{{ currentUser[field] }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fieldNames: ["username", "_id", "email", "adminRoot"],
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
  
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
  max-width: 30%;
  margin: 0 auto;
  margin-top: 75px;
  height: 1000px;
}

.profile__picture {
  text-align: center;
  margin: 100px 0 12px 0;
}

.profile__picture-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.profile__information-field {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 15px;
  background: rgba(204, 204, 204, 0.304);
}

.field__name {
  font-size: 20px;
  font-weight: 500;
}

.field__data {
  font-size: 20px;
  font-weight: 500;
  color: #04AA6D;
  text-align: end;
  justify-content: end;
  align-items: flex-end;
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