
<template>
  <div class="signup">
    <v-container v-if="error">
      <v-row>
        <v-col>
          <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-form @submit.prevent="onSignupWithGH" :lazy-validation="true">
        <v-row justify="center">
          <!-- <v-card ref="form" dark height="1000"> -->
          <div class="car">
            <h1 align="center">Sign in with GitHub</h1>
            <v-btn
              dark
              large
              class="gh-button white--text"
              type="submit"
              :disabled="loading"
              :loading="loading"
            >
              <v-icon class="gh-icon" large right> mdi-github </v-icon>Login
              <span slot="loader" class="custom-loader">
                <v-icon>mdi-cached</v-icon>
              </span>
            </v-btn>
          </div>
          <!-- </v-card> -->
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      technologies: [],
    };
  },
  methods: {
    onSignupWithGH() {
      this.setTechnologies();
      this.$store.dispatch("signUserUp");
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    },
    setTechnologies() {
      this.$store.dispatch("setTechnologies");
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        // console.log(value, "routerPush");
        this.$router.push("/").catch((error) => {
          if (error.name != "NavigationDuplicated") {
            throw error;
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.gh-button {
  width: 200px;
  margin: auto;
  margin-top: 40px;
}
.gh-icon {
  padding-right: 40px;
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>