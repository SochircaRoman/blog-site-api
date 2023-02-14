<template>
  <div class="wrapper">
    <div class="settings__container">

      <h2 class="settings__text">Edit Settings</h2>

      <div class="update__container">

        <div class="profile__information-field">
          <div class="field__name">Current Username:</div>
          <div class="field__data">{{ currentUser.username }}</div>
        </div>
        <input-field name="" type="text" placeholder="New Username"></input-field>
        <button-item btnName="Update Username"></button-item>
        
      </div>

    </div>
  </div>
</template>

<script>
import InputField from "../components/UI/InputField.vue";
import ButtonItem from "../components/UI/ButtonItem.vue";

export default {
  components: { 
    InputField,
    ButtonItem
  },
  data() {
    return {
      
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
}
</script>

<style>
.wrapper {
  max-width: 25%;
  margin: 0 auto;
  margin-top: 75px;
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

.settings__text {
  font-size: 30px;
  font-weight: 600;
  margin-top: 50px;
}

.current__data {
  margin-left: 20px;
}
</style>