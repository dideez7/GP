<template>
    <div id="piSupplierDoView">
        <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex flex-row">
                        <div class="col-2">delivery Order To:</div>
                        <div class="col-8">Supplier Company Name</div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Description</th>
                            <th scope="col" class="text-center">Part No</th>
                            <th scope="col" class="text-center">Model No</th>
                            <th scope="col" class="text-center">Serial No</th>
                            <th scope="col" class="text-center">Drawing No</th>
                            <th scope="col" class="text-center">Item No</th>
                            <th scope="col" class="text-center">Qty</th>
                            <th scope="col" class="text-center">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in suppDoView" :key="index++">
                        <td>{{ index }}</td>
                        <td>{{ item.description }}</td>
                        <td class="text-center">{{ item.part }}</td>
                        <td class="text-center">{{ item.model }}</td>
                        <td class="text-center">{{ item.serial }}</td>
                        <td class="text-center">{{ item.drawing }}</td>
                        <td class="text-center">{{ item.item }}</td>
                        <td class="text-center">{{ item.quantity }}</td>
                        <td class="text-center">{{ item.price }}</td>
                        </tr>
                        <tr>
                            <td colspan="8" class="text-right"><b>Total</b></td>
                            <td class="text-center"><b>999</b></td>
                        </tr>
                    </tbody>
                </table>
                
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/sdo/report/sdoid'" class="btn btn-info ml-3" style="float: right;" tag="button">Generate</router-link>
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/sdo/view'" class="btn btn-danger ml-3" style="float: right;" tag="button">Back</router-link>
                <router-link :to="'/project-detail/' + this.$route.params.pid + '/sdo/edit'" class="btn btn-primary ml-3" style="float: right;" tag="button">Edit</router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'piSupplierDoView',
    data: function(){
        return {
            suppDoView : [
                { 
                    id: '1',
                    description: 'Item Description', 
                    part: 'Part No', 
                    model: 'Model No', 
                    serial: 'Serial No', 
                    drawing: 'Drawing No', 
                    item: 'Item No', 
                    quantity: '999',
                    price: '999'
                },
                { 
                    id: '2',
                    description: 'Item Description', 
                    part: 'Part No', 
                    model: 'Model No', 
                    serial: 'Serial No', 
                    drawing: 'Drawing No', 
                    item: 'Item No', 
                    quantity: '999',
                    price: '999'
                },
                { 
                    id: '3',
                    description: 'Item Description', 
                    part: 'Part No', 
                    model: 'Model No', 
                    serial: 'Serial No', 
                    drawing: 'Drawing No', 
                    item: 'Item No', 
                    quantity: '999',
                    price: '999'
                },
                { 
                    id: '4',
                    description: 'Item Description', 
                    part: 'Part No', 
                    model: 'Model No', 
                    serial: 'Serial No', 
                    drawing: 'Drawing No', 
                    item: 'Item No', 
                    quantity: '999',
                    price: '999'
                }
             ]
        }
    }
}
</script>

<style scoped>

</style>