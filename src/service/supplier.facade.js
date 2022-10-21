import GPApiService from "./api-service";

export default class SuppliersFacade {
  constructor() {
    this.initiateGP();
  }

  initiateGP() {
    this.GPAPI = new GPApiService();
  }

  getAllSuppliers() {
    return this.GPAPI.getAllSuppliers().then(res => res.data);
  }

  createSupplier(data) {
    return this.GPAPI.createSupplier(data);
  }

  deleteSupplier(id) {
    return this.GPAPI.deleteSupplier(id).then(res => res.data);
  }

  getSupplier(id) {
    return this.GPAPI.getSupplier(id).then(res => res.data);
  }

  updateSupplier(data) {
    return this.GPAPI.updateSupplier(data).then(res => res.data);
  }
}
