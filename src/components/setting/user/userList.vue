<template>
    <div id="userList" class="content-margin-top">

<div class="jumbotron jumbotron-fluid text-center">
  <h1 class="display-4">USER</h1>
  <p class="lead">This is the listing of users</p>
  <p class="lead">
      <router-link to="user/add" tag="button" class="btn btn-primary" >Add New User</router-link>
  </p>
</div>

<div class="container" style="margin-bottom: 60px;">
  <div class="row">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col" class="text-center">Username</th>
          <th scope="col" class="text-center">Email</th>
          <th scope="col" class="text-center">Phone</th>
          <th scope="col" class="text-center">Permission</th>
          <th scope="col" class="text-center">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in userItem" :key="index++">
          <th scope="row">{{ index }}</th>
          <td> <a href="#" @click="clickHistory(item.uid)">{{ item.name }}</a></td>
          <td class="text-center">{{ item.username }}</td>
          <td class="text-center">{{ item.email }}</td>
          <td class="text-center">{{ item.phone }}</td>
          <td class="text-center">{{ item.permission }}</td>
          <td class="text-center"><span :class="'userStatus us' + item.status">{{ item.status }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="row">
    <nav aria-label="..." style="margin: auto;">
      <ul class="pagination">
        <li class="page-item disabled"> <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a> </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active" aria-current="page"> <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a> </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"> <a class="page-link" href="#">Next</a> </li>
      </ul>
    </nav>
  </div>

</div>



      <!--user View-->
      <div class="userView" v-if="viewActive === true">
        <div class="popupBox">
            <div class="card uvCard">
              <div class="card-header">View User 
                <a href="" style="float: right;" @click="closeHistory()"><i class="fas fa-times"></i></a>
              </div>
              <div class="card-body uvCardBody">
                  <div class="row">
                    <div class="col">
                      <h6>Full Name</h6>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col">
                      Ahmad Firdaus Bin Nor Azhar
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <h6>Email Address</h6>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col">
                      afna@gmail.com
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <h6>Phone Number</h6>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col">
                      019-370 3745
                    </div>
                  </div>
                </div>

              </div>
              <div class="card-footer uvCardFooter text-center">  
                <router-link :to="'user/edit/' + selectedUser" @click="closeHistory()">Modify the user</router-link>
              </div>
            </div>
          </div>
      </div>

    </div>
</template>

<script>
export default {
    name : "userList",
    data: function(){
        return {
            userItem : [
                { uid: '1', name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator', status: 'Active'},
                { uid: '2', name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator', status: 'Blocked'},
                { uid: '3', name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator', status: 'Active'},
                { uid: '4', name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator', status: 'Active'},
                { uid: '5', name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator', status: 'Active'},
                { uid: '6', name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator', status: 'Active'},
                { uid: '7', name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator', status: 'Blocked'},
                { uid: '8', name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator', status: 'Active'},
                { uid: '9', name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator', status: 'Pending'},
                { uid: '10', name: 'Ahmad Firdaus Nor Azhar', username: 'afna', email: 'afna@mail.com', phone: '0193773773', permission: 'administrator', status: 'Active'}
            ],
            viewActive: false,
            selectedUser: '',
        }
    },
    methods: {
      clickHistory(uid){
        this.viewActive = true;
        this.selectedUser = uid;
        console.log(this.viewActive)
      },
      closeHistory(){
        this.viewActive = false;
      }
    }
}
</script>

<style scoped>
.userStatus {
    padding: 3px 15px;
    border-radius: 20px;
    font-size: .8rem;
    color: white;
}
.usBlocked {
  background: #d81f30 !important;
}
.usActive {
  background: #4CAF50 !important;
}
.usPending {
  background: #d0d0d0 !important;
}
.popupBox {
    position: fixed;
    top: 60px;
    right: 0;
    height: calc(100vh - 116px);
    background: white;
    width: 350px;
    box-shadow: 0 0 50px #00000040;
    overflow: auto;
}
.uvCard {
    height: calc(100% - 55px);
}
.uvCardBody {
  overflow: auto;
}
.uvCardFooter {
    position: static;
    bottom: 55px;
    width: 100%;
    background: white;
}

/*togle*/
.material-switch > input[type="checkbox"] {
    display: none;   
}

.material-switch > label {
    cursor: pointer;
    height: 0px;
    position: relative; 
    width: 40px;  
}

.material-switch > label::before {
    background: rgb(0, 0, 0);
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    content: '';
    height: 16px;
    margin-top: -8px;
    position:absolute;
    opacity: 0.3;
    transition: all 0.4s ease-in-out;
    width: 40px;
}
.material-switch > label::after {
    background: rgb(255, 255, 255);
    border-radius: 16px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    content: '';
    height: 24px;
    left: -4px;
    margin-top: -8px;
    position: absolute;
    top: -4px;
    transition: all 0.3s ease-in-out;
    width: 24px;
}
.material-switch > input[type="checkbox"]:checked + label::before {
    background: inherit;
    opacity: 0.5;
}
.material-switch > input[type="checkbox"]:checked + label::after {
    background: inherit;
    left: 20px;
}
.label-success {
  background-color: #4caf50;
}
</style>