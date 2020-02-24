<template>
    <div id="piSupplierRfqList">
        <div class="container-fluid" style="margin-bottom: 60px;">
            <div class="card">
                <div class="card-body">

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Description</th>
                            <th scope="col" class="text-center">Part Number</th>
                            <th scope="col" class="text-center">Model Number</th>
                            <th scope="col" class="text-center">Serial Number</th>
                            <th scope="col" class="text-center">Drawing Number</th>
                            <th scope="col" class="text-center">Item Number</th>
                            <th scope="col" class="text-center">Quantity</th>
                            <th scope="col" class="text-center">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in projectRFQ.items" :key="index++">
                        <td scope="row">{{ index }}</td>
                        <td>{{ item.partName }}</td>
                        <td class="text-center">{{ item.partNumber }}</td>
                        <td class="text-center">{{ item.modelNumber }}</td>
                        <td class="text-center">{{ item.serialNumber }}</td>
                        <td class="text-center">{{ item.drawingNumber }}</td>
                        <td class="text-center">{{ item.tagNumber }}</td>
                        <td class="text-center">{{ item.quantity }}</td>
                        <td class="text-center"><a href="#" class="text-danger">Delete</a></td>
                        </tr>
                    </tbody>
                </table>
                
                <button class="btn btn-primary" style="float: right;" type="submit">Edit</button>
                <button class="btn btn-primary mr-3" style="float: right;" type="button">Add New</button>
                <button class="btn btn-info mr-3" style="float: right;" type="button">Generate</button>
                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'piSupplierRfqList',
    data: function(){
        return {
        }
    },
    mounted() {
        this.getProjectSupplierRFQ(this.$route.params.pid);
    },
    computed: {
        ...mapGetters(["projectRFQ"])
    },
    methods: {
        ...mapActions(["getProjectSupplierRFQ"])
    }
}
</script>

<style scoped>

</style>