<template>
  <div id="customerView" class="content-margin-top" v-if="customerView">
    <div class="jumbotron jumbotron-fluid text-center">
      <h1 class="display-4">Supplier: {{ customerView.companyName }}</h1>
    </div>

    <div class="editForm">
      <div class="form-row">
        <div class="form-group col-md-8">
          <label for="inputCompanyName">Company Name</label>
          <input
            type="text"
            id="inputCompanyName"
            class="form-control"
            placeholder="Company Name"
            v-model="customerView.companyName"
            :disabled="disabled"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="inputPhoneNumber">Phone Number</label>
          <input
            type="text"
            id="inputPhoneNumber"
            class="form-control"
            placeholder="Phone Number"
            v-model="customerView.phone"
            :disabled="disabled"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8">
          <label for="inputAddressMain">Address</label>
          <input
            type="text"
            id="inputAddressMain"
            class="form-control"
            placeholder="Address"
            v-model="customerView.address"
            :disabled="disabled"
          />
        </div>
        <div class="form-group col-md-4">
          <label for="inputEmail">Email Address</label>
          <input
            type="text"
            id="email"
            class="form-control"
            placeholder="Email"
            v-model="customerView.email"
            :disabled="disabled"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8">
          <input
            type="text"
            id="inputAddressSub"
            class="form-control"
            placeholder="Address"
            v-model="customerView.address"
            :disabled="disabled"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-3">
          <label for="inputPostcode">Postcode</label>
          <input
            type="text"
            class="form-control"
            id="inputCity"
            placeholder="inputPostcode"
            v-model="customerView.poscode"
            :disabled="disabled"
          />
        </div>

        <div class="form-group col-md-5">
          <label for="inputState">State</label>
          <input
            type="text"
            id="inputState"
            class="form-control"
            placeholder="Postcode"
            v-model="customerView.state"
            :disabled="disabled"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8">
          <label for="inputCountry">Country</label>
          <input
            type="text"
            id="inputCountry"
            class="form-control"
            placeholder="Postcode"
            v-model="customerView.country"
            :disabled="disabled"
          />
        </div>
      </div>
    </div>

    <router-link to="/supplier" tag="button" class="btn btn-danger ml-3" style="float: right;">Back</router-link>
    <button
      type="button"
      class="btn btn-primary ml-3"
      style="float: right;"
      v-if="disabled"
      @click="changeMode"
    >Edit</button>
    <button
      type="button"
      class="btn btn-primary ml-3"
      style="float: right;"
      v-if="!disabled"
      @click="onSubmit"
    >Save</button>
    <div style="margin-bottom: 120px;"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "customerView",
  data: function() {
    return {
      customerView: [],
      disabled: true
    };
  },
  computed: {
    ...mapGetters(["currentSupplier", "success"])
  },
  mounted() {
    console.log(this.$route, "route");
    this.getSupplier(this.$route.params.sid);
  },
  watch: {
    currentSupplier(val) {
      this.customerView = val;
    },
    success(val) {
      this.$router.push({ name: "supplier" });
    }
  },
  methods: {
    changeMode() {
      this.disabled = !this.disabled;
    },
    onSubmit() {
      this.updateSupplier({
        id: this.$route.params.sid,
        data: this.customerView
      });
    },
    ...mapActions(["getSupplier", "updateSupplier"]),
    ...mapMutations(["resetSucess"])
  },
  destroyed() {
    this.resetSucess();
  }
};
</script>

<style scoped>
</style>