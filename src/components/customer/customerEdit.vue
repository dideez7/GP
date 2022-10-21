<template>
  <div id="customerEdit" class="content-margin-top">
    <div
      class="jumbotron jumbotron-fluid text-center"
      v-for="(item, index) in customerEdit"
      :key="index++"
    >
      <h1 class="display-4">CUSTOMER: {{ item.company }}</h1>
    </div>

    <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
      <form action>
        <div class="card">
          <div class="card-body">
            <!--New Customer List-->
            <div class="newForm" v-for="(item, index) in customerEdit" :key="index++">
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="inputCompanyName">Company Name</label>
                  <input
                    type="text"
                    id="inputCompanyName"
                    class="form-control"
                    placeholder="item.company"
                    v-model="inputCompanyName"
                    required
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputPhoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="inputPhoneNumber"
                    class="form-control"
                    :placeholder="item.contact"
                    v-model="inputPhoneNumber"
                    required
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
                    :placeholder="item.addressMain"
                    v-model="inputAddressMain"
                    required
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputEmail">Email Address</label>
                  <input
                    type="text"
                    id="inputEmail"
                    class="form-control"
                    :placeholder="item.email"
                    v-model="inputEmail"
                    required
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8">
                  <input
                    type="text"
                    id="inputAddressSub"
                    class="form-control"
                    :placeholder="item.addressSub"
                    v-model="inputAddressSub"
                    required
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="inputPostcode">Postcode</label>
                  <input
                    type="text"
                    id="inputPostcode"
                    class="form-control"
                    placeholder="Postcode"
                    v-model="inputPostcode"
                    required
                  />
                </div>
                <div class="form-group col-md-5">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control" v-model="inputState">
                    <option selected>Choose...</option>
                    <option>Selangor</option>
                    <option>Kuala Lumpur</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="inputCountry">Country</label>
                  <select id="inputCountry" class="form-control" v-model="inputCountry">
                    <option selected>Choose...</option>
                    <option>Malaysia</option>
                    <option>Indonesia</option>
                    <option>Brunei</option>
                  </select>
                </div>
              </div>
            </div>

            <router-link
              :to="'/customer/view/' + this.$route.params.cid"
              tag="button"
              class="btn btn-danger ml-3"
              style="float: right;"
            >Cancel</router-link>
            <router-link
              :to="'/customer/view/' + this.$route.params.cid"
              tag="button"
              class="btn btn-primary ml-3"
              style="float: right;"
            >Save</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "customerEdit",
  data: function() {
    return {
      customerEdit: [
        {
          id: "12345",
          company: "company a",
          license: "abc1234",
          contact: "+60193737373",
          email: "companyA@mail.com"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>