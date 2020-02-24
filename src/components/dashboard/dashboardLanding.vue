<template>
  <div id="dashboardLanding" class="content-margin-top">
    <div class="jumbotron jumbotron-fluid">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-9">
            <h1 class="display-4">DASHBOARD</h1>
            <p class="lead">Welcome to Request For Quotation System</p>
          </div>
          <div class="col-lg-3">
            <!-- <form class="form-inline my-2 my-lg-0" style="padding: 2.6em 0;">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>-->
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid" style="margin-bottom: 60px;">

          <div class="row mb-4">
              <div class="col currency">
                <div class="left">
                  <img class="flag" src="../../assets/img/currency/usd.svg">
                </div>
                <div class="right">
                  <div class="title">USD</div>
                  <div class="sub">4.50001</div>
                </div>
              </div>

              <div class="col currency">
                <div class="left">
                  <img class="flag" src="../../assets/img/currency/myr.svg">
                </div>
                <div class="right">
                  <div class="title">MYR</div>
                  <div class="sub">4.50001</div>
                </div>
              </div>

              <div class="col currency">
                <div class="left">
                  <img class="flag" src="../../assets/img/currency/sgd.svg">
                </div>
                <div class="right">
                  <div class="title">SGD</div>
                  <div class="sub">4.50001</div>
                </div>
              </div>

              <div class="col currency">
                <div class="left">
                  <img class="flag" src="../../assets/img/currency/jpy.svg">
                </div>
                <div class="right">
                  <div class="title">JPY</div>
                  <div class="sub">4.50001</div>
                </div>
              </div>

              <div class="col currency">
                <div class="left">
                  <img class="flag" src="../../assets/img/currency/aud.svg">
                </div>
                <div class="right">
                  <div class="title">AUD</div>
                  <div class="sub">4.50001</div>
                </div>
              </div>

              <div class="col currency">
                <div class="left">
                  <img class="flag" src="../../assets/img/currency/eur.svg">
                </div>
                <div class="right">
                  <div class="title">EUR</div>
                  <div class="sub">4.50001</div>
                </div>
              </div>

            </div>
      

      <div class="row">
        <div class="col-lg-9">
          <!--project status-->
          <project-status :projects="projects"></project-status>
        </div>
        <div class="col-lg-3">
          <!--invoice status-->
          <invoice-status :projects="allProjects"></invoice-status>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**project status */
import ProjectStatus from "./projectStatus.vue";
import InvoiceStatus from "./invoiceStatus.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "dashboardLanding",
  components: {
    ProjectStatus,
    InvoiceStatus
  },
  mounted() {
    this.getDashboardProjects();
  },
  data() {
    return {
      projects: [],
      allProjects: []
    };
  },
  computed: {
    ...mapGetters(["getLatestProjects", "project"])
  },
  watch: {
    getLatestProjects(val) {
      this.projects = val;
    },
    project(val) {
      this.allProjects = val;
    }
  },
  methods: {
    ...mapActions(["getDashboardProjects"])
  }
};
</script>

<style scoped>
.currency img.flag {
    width: 40px;
}

.currency .title {
    font-weight: bold;
    color: #3F51B5;
    font-size: 1.2em;
}
.currency .left {
    float: left;
    padding: 8px;
}
.currency {
    border: 1px solid #d8d8d8;
    margin: 0 15px;
    border-radius: 5px;
    background: white;
}
</style>
