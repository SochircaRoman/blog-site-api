<template>
  <div>
    <succes-popup></succes-popup>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import SuccesPopup from "../components/UI/SuccesPopup.vue";

export default {
  components: { SuccesPopup },
  name: "Home",
  data() {
    return {
      content: "",
    }
  },
  mounted() {
    UserService.getPublicContent().then(
    (response) => {
      this.content = response.data;
    },
    (error) => {
      this.content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    }
    );
  },
};
</script>

<style>

</style>