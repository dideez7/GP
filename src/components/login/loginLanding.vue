<template>
  <div id="loginLanding" class="content-margin-top">
    <main class="login-form">
      <div class="loginFormBox">
        <div class="card">
          <div class="card-header">GRIZPOWER SYSTEM</div>
          <div class="card-body">
            <form @submit.prevent="login()" action method>
              <div class="form-group row">
                <label for="username" class="col-md-4 col-form-label text-md-right">Username</label>
                <div class="col-md-6">
                  <input
                    type="text"
                    id="username"
                    class="form-control"
                    placeholder="username"
                    v-model="username"
                    @blur="$v.username.$touch"
                    @change="$v.username.$touch"
                    required
                    autofocus
                  />
                  <p
                    class="text-danger"
                    v-if="!$v.username.required && $v.username.$error"
                  >Username is required!</p>
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                <div class="col-md-6">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    placeholder="password"
                    v-model="password"
                    @blur="$v.password.$touch"
                    @change="$v.password.$touch"
                    required
                  />
                  <p
                    class="text-danger"
                    v-if="!$v.password.required && $v.password.$error"
                  >Password is required!</p>
                </div>
              </div>

              <!-- <div class="form-group row">
                <div class="col-md-6 offset-md-4">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" name="remember" /> Remember Me
                    </label>
                  </div>
                </div>
              </div>-->

              <div class="col-md-6 offset-md-4">
                <button type="button" class="btn btn-primary pl-5 pr-5" @click="onLogin">Login</button>
                <!-- <a href="#" class="btn btn-link">Forgot Your Password?</a> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "loginLanding",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  computed: {
    ...mapGetters(["user", "success"])
  },
  watch: {
    success(val) {
      if (val) {
        this.$router.push({ name: "home" });
      }
    }
  },
  methods: {
    login() {},
    onLogin() {
      if (this.$v.$invalid === false) {
        this.handleLogin({ username: this.username, password: this.password });
      } else {
        this.$v.$touch();
      }
    },
    ...mapActions(["handleLogin"]),
    ...mapMutations(["resetSucess"])
  },
  destroyed() {
    this.resetSucess();
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:300, 400, 600);

body {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.6;
  color: #212529;
  text-align: left;
  background-color: #f5f8fa;
}

.loginFormBox {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  transform: translate(-50%, -50%);
}
.navbar-laravel {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.navbar-brand,
.nav-link,
.my-form,
.login-form {
  font-family: Raleway, sans-serif;
}

.my-form {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.my-form .row {
  margin-left: 0;
  margin-right: 0;
}

.login-form {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: url("../../assets/img/slide1.jpg");
  background-size: cover;
  height: calc(100vh - 118px);
  position: relative;
}

.login-form .row {
  margin-left: 0;
  margin-right: 0;
}
</style>
