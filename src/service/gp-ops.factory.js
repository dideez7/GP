import GPLoginFacade from "./login.facade";
import GetUserFacade from "./getuser.facade";
import LogoutFacade from "./logout.facade";
import ProjectsFacade from "./projects.facade";
import UserFacade from "./user.facade";
import CustomerFacade from "./customer.facade";
import SupplierFacade from "./supplier.facade";
import MetadataFacade from "./metadata.facade";

export default class GPOpsFactory {
  static handleMetadata() {
    const metadataFacade = new MetadataFacade();
    return metadataFacade;
  }

  static handlerProject() {
    const projectFacade = new ProjectsFacade();
    return projectFacade;
  }

  static handleLogin(data) {
    const loginFacade = new GPLoginFacade();
    return loginFacade.handleLogin(data);
  }

  static getUserDetails() {
    const userFacade = new GetUserFacade();
    return userFacade.getUser();
  }

  static customerLogout() {
    const logoutFacade = new LogoutFacade();
    return logoutFacade.logout();
  }

  static getAllProjects() {
    const ProjectsFcd = new ProjectsFacade();
    return ProjectsFcd.getAllProjects();
  }

  static getDashboardProjects() {
    const ProjectsFcd = new ProjectsFacade();
    return ProjectsFcd.getDashboardProjects();
  }

  static registerUser(data) {
    const UserFcd = new UserFacade();
    return UserFcd.registerUser(data);
  }

  static getAllUser() {
    const UserFcd = new UserFacade();
    return UserFcd.allUsers();
  }

  static getUser(id) {
    const UserFcd = new UserFacade();
    return UserFcd.user(id);
  }
  static modifyUser(id, data) {
    const UserFcd = new UserFacade();
    return UserFcd.modifyUser(id, data);
  }

  static createProjectWithCustomer(data) {
    const ProjectsFcd = new ProjectsFacade();
    return ProjectsFcd.createProject(data);
  }

  static createProjectExistingCustomer(data) {
    const ProjectsFcd = new ProjectsFacade();
    return ProjectsFcd.createExistingProject(data);
  }

  static getAllCustomers() {
    const CustomerFcd = new CustomerFacade();
    return CustomerFcd.getAllCustomers();
  }

  static createCustomer(data) {
    const CustomerFcd = new CustomerFacade();
    return CustomerFcd.createCustomer(data);
  }

  static getAllSuppliers() {
    const SupplierFcd = new SupplierFacade();
    return SupplierFcd.getAllSuppliers();
  }

  static createSupplier(data) {
    const SupplierFcd = new SupplierFacade();
    return SupplierFcd.createSupplier(data);
  }
}
