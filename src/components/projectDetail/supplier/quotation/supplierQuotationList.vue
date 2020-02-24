<template>
    <div id="piSupplierQuotationList">
        <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Date</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Quotation Status</th>
                            <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in supplierQuotationList" :key="index++">
                            <td scope="row">{{ index }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.supplier }}</td>
                            <td>{{ item.status }}</td>
                            <td class="text-center"><router-link to="sq/view/" class="nav-link">View Quotation</router-link></td>
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
export default {
    name: 'piSupplierQuotationList',
    data: function(){
        return {
            supplierQuotationList : [
                { date: '12/01/2020', supplier: 'Concrete Malaysia Sdn. Bhd.', status: 'Rejected', option: 'View'},
                { date: '12/01/2020', supplier: 'Aris Kayu Sdn. Bhd.', status: 'Rejected', option: 'View'},
                { date: '12/01/2020', supplier: 'Kim Tiles Sdn. Bhd.', status: 'Accepted', option: 'View'}
            ]
        }
    }
}
</script>

<style scoped>

</style>