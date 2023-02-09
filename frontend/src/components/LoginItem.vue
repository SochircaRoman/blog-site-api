<template>
  <div class="wrapper">
    <Form @submit="handleLogin" :validation-schema="schema">

      <div class="img_container">
				<img src="/avatar.png" alt="Avatar" class="profile_img">
			</div>

      <div class="input_container">
        <div class="input_group">
          <label for="username"><b>Username</b></label>
          <Field name="username" type="text" placeholder="Enter Username" class="input_field" :validateOnInput="true" />
          <ErrorMessage name="username" class="error-feedback" />
        </div>

        <div class="input_group">
          <label for="password"><b>Password</b></label>
          <Field name="password" type="password" placeholder="Enter Password" class="input_field" :validateOnInput="true" />
          <ErrorMessage name="password" class="error-feedback" />
        </div>

        <button class="submit_btn" :disabled="loading">
          <span
            v-show="loading"
            class=""
          ></span>
          <span>Login</span>
        </button>
      </div>

      <div class="response">
        <div v-if="message" class="message__respones" role="alert">
          {{ message }}
        </div>
      </div>

      <div class="other">
				<div class="other_info">
					<a href="/register" class="other_info-link">Registration?</a>
				</div>
				<div class="other_info">
					Forgot <a href="#" class="other_info-link">password?</a>
				</div>
	  	</div>

    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data: () => ({
    loading: false,
    message: "",
    max: 30,
  }),
  computed: {
    schema() {
      return yup.object({
        username: yup.string().min(4).max(this.max).required("Username is required!").label('Username'),
        password: yup.string().min(6).max(this.max).required("Password is required!").label('Password')
      })
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profile");
        },
        (error) => {
          this.loading = false;
          console.log(error);
          this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        }
      )
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