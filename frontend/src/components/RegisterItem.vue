<template>
  <div class="wrapper">
    <Form @submit="handleLogin" :validation-schema="schema">

      <div class="registartion_info">
				<h1>Registration</h1>
			</div>
			
			<hr>

      <div class="input_container">

        <div class="input_group">
          <label for="username"><b>Username</b></label>
          <Field name="username" type="text" placeholder="Enter Username" class="input_field" :validateOnInput="true" />
          <ErrorMessage name="username" class="error-feedback" />
        </div>

        <div class="input_group">
          <label for="email"><b>Email</b></label>
          <Field name="email" type="email" placeholder="Enter Email" class="input_field" :validateOnInput="true" />
          <ErrorMessage name="email" class="error-feedback" />
        </div>

        <div class="input_group">
          <label for="password"><b>Password</b></label>
          <Field name="password" type="password" placeholder="Enter Password" class="input_field" :validateOnInput="true" />
          <ErrorMessage name="password" class="error-feedback" />
        </div>

        <div class="input_group">
          <label for="confirm_password"><b>Confirm Password</b></label>
          <Field name="confirm_password" type="password" placeholder="Confirm Password" class="input_field" :validateOnInput="true" />
          <ErrorMessage name="confirm_password" class="error-feedback" />
        </div>

        <button class="submit_btn" :disabled="loading">
          <span
            v-show="loading"
            class=""
          ></span>
          <span>Submit</span>
        </button>
      </div>

      <div class="response">
        <div v-if="message" class="message__respones" role="alert">
          {{ message }}
        </div>
      </div>

      <div class="other_info">
        <div class="other_info">
          <p class="other_info-text">By creating an account you agree to our <a href="#" class="other_info-link">Terms & Privacy</a>.</p>
        </div>
      </div>

    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Register",
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
        username: yup.string().min(4).max(this.max).required("Username is required!").label("Username"),
        email: yup.string().email().required("Email is required!").label("Email"),
        password: yup.string().min(6).max(this.max).required("Password is required!").label("Password"),
        confirm_password: yup.string().required("Repeat Password!").oneOf([yup.ref("password")], "Passwords do not match")
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

      this.$store.dispatch("auth/register", user).then(
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

.registartion_info {
  text-align: center;
  margin-top: 40px;
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
  margin-top: -15px;
}

.response {
  margin: -10px;
  margin-bottom: 20px;
}

.message__respones {
  color: #f23648;
  text-align: center;
}

.other_info-link {
  color: dodgerblue;
}

</style>