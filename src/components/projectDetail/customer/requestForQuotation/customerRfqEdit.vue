<template>
    <div id="piCustomerRfqEdit">
        <div class="container-fluid" style="margin-bottom: 60px;margin-top: 30px;">
            <div class="card">
                <div class="card-body">
                    <form action="">
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Description</th>
                                    <th scope="col" class="text-center">Part No</th>
                                    <th scope="col" class="text-center">Model No</th>
                                    <th scope="col" class="text-center">Serial No</th>
                                    <th scope="col" class="text-center">Drawing No</th>
                                    <th scope="col" class="text-center">Item No</th>
                                    <th scope="col" class="text-center">Qty</th>
                                    <th scope="col" class="text-center">Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in custRfqList" :key="index++">
                                    <td scope="row">{{ index }}</td>
                                    <td v-html="item.description"></td>
                                    <td class="text-center" v-html="item.part"></td>
                                    <td class="text-center" v-html="item.model"></td>
                                    <td class="text-center" v-html="item.serial"></td>
                                    <td class="text-center" v-html="item.drawing"></td>
                                    <td class="text-center" v-html="item.item"></td>
                                    <td class="text-center" v-html="item.quantity"></td>
                                    <td class="text-center"><router-link to="crfq" class="text-danger">Delete</router-link></td>
                                </tr>
                            </tbody>
                        </table>
                    <button class="btn btn-success ml-3" style="float: right;" type="submit">Submit</button>
                    <button class="btn btn-danger ml-3" style="float: right;" type="submit">Cancel</button>
                    <button class="btn btn-warning ml-3" style="float: right;" type="submit">Add New Row</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'piCustomerRfqEdit',
    data: function(){
        return {
            custRfqList : [
                { 
                    description: '<input class="form-control form-control-sm" type="text" placeholder="Description">', 
                    part: '<input class="form-control form-control-sm" type="text" placeholder="Part No">', 
                    model: '<input class="form-control form-control-sm" type="text" placeholder="Model no">', 
                    serial: '<input class="form-control form-control-sm" type="text" placeholder="Serial No">', 
                    drawing: '<input class="form-control form-control-sm" type="text" placeholder="Drawing No">', 
                    item: '<input class="form-control form-control-sm" type="text" placeholder="Item No">', 
                    quantity: '<input class="form-control form-control-sm" type="text" placeholder="Quantity">'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>