<template>
  <div id="metadata" class="content-margin-top">
    <div class="jumbotron jumbotron-fluid text-center">
      <h1 class="display-4">METADATA</h1>
      <p
        class="lead"
      >This is the listing of metadata. Each of the item comes with the price history. Click on the history link to check for the price history</p>
      <p class="lead">
        <router-link to="metadata/add" tag="button" class="btn btn-primary">Add New Metadata</router-link>
      </p>
    </div>

    <div class="container-fluid" style="margin-bottom: 60px;">
      <div class="card">
        <div class="card-body">
      
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col" class="text-center">Description</th>
              <th scope="col" class="text-center">Part</th>
              <th scope="col" class="text-center">Model</th>
              <th scope="col" class="text-center">Serial</th>
              <th scope="col" class="text-center">Drawing</th>
              <th scope="col" class="text-center">Item</th>
              <th scope="col" class="text-center">Option</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in metadatas" :key="index++">
              <th scope="row">{{ index }}</th>
              <td class="text-center">
                <a href="#" @click="clickHistory(item.id)">{{ item.partName }}</a>
              </td>
              <td class="text-center">{{ item.partNumber }}</td>
              <td class="text-center">{{ item.modelNumber }}</td>
              <td class="text-center">{{ item.serialNumber }}</td>
              <td class="text-center">{{ item.drawingNumber }}</td>
              <td class="text-center">{{ item.tagNumber }}</td>
              <td class="text-center">
                <a href="#" class="text-danger">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>

        <nav aria-label="..." style="margin: auto;" v-show="false">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#">
                2
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>

        </div>
      </div>
        
    </div>

    <!--metadata View-->
    <div class="metadataHistory" v-if="historyActive === true">
      <div class="popupBox">
        <div class="card mhCard">
          <h5 class="card-header">
            {{metadata.partName}}
            <button
              type="button"
              class="btn btn-danger btn-sm"
              style="float: right;"
              @click="closeHistory()"
            >Close</button>
          </h5>
          <div class="card-body mhCardBody">
            <table class="table metaViewTable">
              <tbody>
                <tr>
                  <th scope="row">Revision</th>
                  <td><span v-if="metadata.revision != null">{{metadata.revision}}</span></td>
                </tr>
                <tr>
                  <th scope="row">Remarks</th>
                  <td><span v-if="metadata.remarks != null">{{metadata.remarks}}</span></td>
                </tr>
                <tr>
                  <th scope="row">UOM</th>
                  <td><span v-if="metadata.unitOfMeasurement != null">{{metadata.unitOfMeasurement}}</span></td>
                </tr>
              </tbody>
            </table>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in metadataPrices" :key="index++">
                  <td>{{item.dateCreated}}</td>
                  <td>{{item.currency}} {{item.amount}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer mhCardFooter text-center">
            <router-link
              :to="'metadata/edit/' + metadata.id"
              @click="closeHistory()"
            >Modify the metadata</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "metadata",
  data: function() {
    return {
      historyActive: false,
      selectedMetadata: ""
    };
  },
  mounted() {
    this.getMetadatas();
  },
  computed: {
    ...mapGetters(["metadata","metadatas", "metadataPrices"])
  },
  methods: {
    ...mapActions(["getMetadatas", "getMetadataPrices","getMetadata"]),
    clickHistory(mid) {
      this.getMetadataPrices(mid);
      this.getMetadata(mid);
      this.historyActive = true;
    },
    closeHistory() {
      this.historyActive = false;
    }
  }
};
</script>

<style scoped>
#metadata {
  position: relative;
}
.popupBox {
  position: fixed;
  top: 60px;
  right: 0;
  height: calc(100vh - 116px);
  background: white;
  width: 500px;
  box-shadow: 0 0 50px #00000040;
  overflow: auto;
}
.mhCard {
  height: 100%;
}
.mhCardBody {
  overflow: auto;
}
.mhCardFooter {
  position: static;
  bottom: 55px;
  width: 100%;
  background: white;
}
.metaViewTable td{
  border: 0 !important;
}
.metaViewTable th{
  border: 0 !important;
  width: 100px;
}


</style>