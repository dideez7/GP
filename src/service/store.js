import Vue from "vue";
import Vuex from "vuex";
import GPOpsFactory from "./gp-ops.factory";
import GPApiService from "./api-service";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    project: null,
    customer: [],
    currentCustomer: null,
    currentSupplier: null,
    metadata: null,
    metadataList: null,
    metadataPrices: null,
    suppliers: null,
    user: null,
    isLoading: false,
    success: false,
    handleError: {
      status: false,
      message: null
    },
    userData: null,
    userSettings: null,
    projectDetail: null,
    rfq: null,
    projectRfq: [],
    currentProject: null,
    projectDetail: null,
    currentCustomerRfq: null,
    currentCustomerQuotation: null,
    currentSupplierRfq: null,
    currentSupplierQuotation: null,
    currentCustomerPO: null,
    currentSupplierPO: null,
    currentSupplierDO: null,
    supplierDoList:null
  },
  getters: {
    project: state => state.project,
    customer: state => state.customer,
    suppliers: state => state.suppliers,
    metadata: state => state.metadata,
    metadatas: state => state.metadataList,
    metadataPrices: state => state.metadataPrices,
    user: state => state.user,
    isLoading: state => state.isLoading,
    success: state => state.success,
    error: state => state.error,
    getLatestProjects: state => {
      const { project } = state;
      if (project) {
        return project.filter((pro, i) => i < 5);
      }

      return null;
    },
    userDetails: state => state.userData,
    userSettings: state => state.userSettings,
    projectDetail: state => state.projectDetail,
    projectRFQ: state => state.rfq,
    projectRfq: state => state.projectRfq,
    currentProject: state => state.currentProject,
    projectDetail: state => state.projectDetail,
    currentCustomerRfq: state => state.currentCustomerRfq,
    currentCustomerQuotation: state => state.currentCustomerQuotation,
    currentSupplierRfq: state => state.currentSupplierRfq,
    currentSupplierQuotation: state => state.currentSupplierQuotation,
    currentCustomerPO: state => state.currentCustomerPO,
    currentSupplierPO: state => state.currentSupplierPO,
    currentCustomer: state => state.currentCustomer,
    currentSupplier: state => state.currentSupplier,
    currentSupplierDO : state => state.currentSupplierDO,
    supplierDoList: state => state.supplierDoList
  },
  mutations: {
    setProject: (state, payload) => {
      state.project = payload;
    },
    setCustomer: (state, payload) => {
      state.customer = payload;
    },
    setMetadata: (state, payload) => {
      state.metadata = payload;
    },
    setUser: (state, payload) => {
      state.user = payload;
    },
    setLoading: (state, payload) => {
      state.isLoading = payload;
    },
    setSuccess: (state, payload) => {
      state.success = payload;
    },
    setError: (state, payload) => {
      state.error = payload;
    },
    resetSucess: state => {
      state.success = false;
    },
    setUserData: (state, payload) => {
      state.userData = payload;
    },
    setSuppliers: (state, payload) => {
      state.suppliers = payload;
    },
    setUserSettings: (state, payload) => {
      state.userSettings = payload;
    },
    setMetadatas: (state, payload) => {
      state.metadataList = payload;
    },
    setMetadataPrices: (state, payload) => {
      state.metadataPrices = payload;
    },
    setRfq: (state, payload) => {
      state.projectRfq = payload;
    },
    setCurrentProject: (state, payload) => {
      state.currentProject = payload;
    },
    setProjectDetail: (state, payload) => {
      state.projectDetail = payload;
    },
    setProjectRFQ: (state, payload) => {
      state.rfq = payload;
    },
    setCurrentCustomerRfq: (state, payload) => {
      state.currentCustomerRfq = payload;
    },
    setCurrentCustomerQuotation: (state, payload) => {
      state.currentCustomerQuotation = payload;
    },
    resetCurrentQuotationRfq: state => {
      state.currentCustomerRfq = null;
      state.currentCustomerQuotation = null;
    },
    setCurrentSupplierrfq: (state, payload) => {
      state.currentSupplierRfq = payload;
    },
    setCurrentSupplierQuotation: (state, payload) => {
      state.currentSupplierQuotation = payload;
    },
    resetCurrentQuotationRfq: state => {
      state.currentSupplierRfq = null;
      state.currentSupplierQuotation = null;
    },
    setCurrentCustomerPO: (state, payload) => {
      state.currentCustomerPO = payload;
    },
    setCurrentSupplierPO: (state, payload) => {
      state.currentSupplierPO = payload;
    },
    resetCurrentCustomerPO: state => {
      state.currentCustomerPO = null;
      state.currentCustomerQuotation = null;
    },
    setDeleteSupplier: (state, payload) => {
      state.suppliers = state.suppliers.filter(s => s.id !== payload);
    },
    setDeleteCustomer: (state, payload) => {
      state.customer = state.customer.filter(c => c.id !== payload);
    },
    setCurrentCustomer: (state, payload) => {
      state.currentCustomer = payload;
    },
    setCurrentSupplier: (state, payload) => {
      state.currentSupplier = payload;
    },
    setSupplierDO: (state, payload) => {
      state.currentSupplierDO = payload;
    },
    setSupplierDoList: (state, payload) => {
      state.supplierDoList = payload;
    }
  },
  actions: {
    createProject: (context, payload) => {
      context.commit("setProject", payload);
    },
    createCustomer: (context, payload) => {
      context.commit("setCustomer", payload);
    },
    createMetadata: (context, payload) => {
      context.commit("setMetadata", payload);
    },
    handleLogin: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handleLogin(payload)
        .then(res => {
          context.commit("setUser", res);
          context.commit("setLoading", false);
          context.commit("setSuccess", true);
        })
        .catch(err => {
          context.commit("setLoading", false);
          context.commit("setError", {
            status: true,
            errorMessage: "Invalid login"
          });
        });
    },
    registerUser: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.registerUser(payload).then(res => {
        context.commit("setUser", res);
        context.commit("setLoading", false);
        context.commit("setSuccess", true);
      });
    },
    initializeUserData: context => {
      const user = GPOpsFactory.getUserDetails();
      context.commit("setUser", user);
    },
    handleLogout: context => {
      GPOpsFactory.customerLogout();
      context.commit("setUser", null);
    },
    getAllProjects: context => {
      context.commit("setLoading", true);
      GPOpsFactory.getAllProjects()
        .then(res => {
          context.commit("setLoading", false);
          context.commit("setProject", res);
        })
        .catch(err => {
          context.commit("setLoading", false);
        });
    },
    getDashboardProjects: context => {
      context.commit("setLoading", true);
      GPOpsFactory.getDashboardProjects()
        .then(res => {
          context.commit("setLoading", false);
          context.commit("setProject", res);
        })
        .catch(err => {
          context.commit("setLoading", false);
        });
    },
    getUsers: context => {
      context.commit("setLoading", true);
      GPOpsFactory.getAllUser().then(res => {
        context.commit("setLoading", false);
        context.commit("setUserSettings", res);
        console.log(res);
      });
    },
    createProjectWithCustomer: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.createProjectWithCustomer(payload).then(res => {
        context.commit("setLoading", false);
        context.commit("setSuccess", true);
      });
    },
    createProjectExistingCustomer: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.createProjectExistingCustomer(payload).then(res => {
        context.commit("setLoading", false);
        context.commit("setSuccess", true);
      });
    },
    getAllCustomers: context => {
      context.commit("setLoading", true);
      GPOpsFactory.getAllCustomers().then(res => {
        context.commit("setCustomer", res);
        context.commit("setLoading", false);
      });
    },
    createCustomer: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.createCustomer(payload).then(res => {
        context.commit("setLoading", false);
        context.commit("setSuccess", true);
      });
    },
    getUser: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.getUser(payload)
        .then(res => {
          context.commit("setUserData", res);
          context.commit("setLoading", false);
        })
        .catch(err => {
          context.commit("setLoading", false);
        });
    },
    getAllSuppliers: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.getAllSuppliers(payload)
        .then(res => {
          context.commit("setSuppliers", res);
          context.commit("setLoading", false);
        })
        .catch(err => {
          context.commit("setLoading", false);
        });
    },
    createSupplier: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.createSupplier(payload)
        .then(res => {
          context.commit("setLoading", false);
          context.commit("setSuccess", true);
        })
        .catch(err => {
          context.commit("setLoading", false);
        });
    },
    modifyUser: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.modifyUser(payload.id, payload).then(res => {
        context.commit("setSuccess", true);
        context.commit("setLoading", false);
      });
    },
    getMetadatas: context => {
      context.commit("setLoading", true);
      GPOpsFactory.handleMetadata()
        .metadataList()
        .then(res => {
          context.commit("setMetadatas", res);
          context.commit("setLoading", false);
        });
    },
    getMetadata: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handleMetadata()
        .metadata(payload)
        .then(res => {
          context.commit("setMetadata", res);
          context.commit("setLoading", false);
        });
    },
    getMetadataPrices: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handleMetadata()
        .metadataPrices(payload)
        .then(res => {
          context.commit("setMetadataPrices", res);
          context.commit("setLoading", false);
        });
    },
    newMetadata: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handleMetadata()
        .newMetadata(payload)
        .then(res => {
          context.commit("setSuccess", true);
          context.commit("setLoading", false);
        });
    },
    editMetadata: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handleMetadata()
        .editMetadata(payload)
        .then(res => {
          context.commit("setSuccess", true);
          context.commit("setLoading", false);
        });
    },
    getRfq: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.getRfq(payload).then(res => {
        context.commit("setRfq", res);
        context.commit("setLoading", false);
      });
    },
    getCurrentProject: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.getCurrentProject(payload).then(res => {
        context.commit("setCurrentProject", res);
        context.commit("setLoading", false);
      });
    },
    getProjectDetail: (context, payload) => {
      context.commit("setLoading", false);
      GPOpsFactory.handlerProject()
        .getProjectDetail(payload)
        .then(res => {
          context.commit("setProjectDetail", res);
          context.commit("setLoading", false);
        });
    },
    getProjectCustomerRFQ: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject()
        .getProjectCustomerRFQ(payload)
        .then(res => {
          context.commit("setProjectRFQ", res[res.length - 1]);
          context.commit("setLoading", false);
        });
    },
    getProjectSupplierRFQ: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject()
        .getProjectSupplierRFQ(payload)
        .then(res => {
          context.commit("setProjectRFQ", res[res.length - 1]);
          context.commit("setLoading", false);
        });
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject()
        .getProjectDetail(payload)
        .then(res => {
          context.commit("setProjectDetail", res);
          context.commit("setLoading", false);
        });
    },
    generateSupplierRFQ: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject()
        .generateSupplierRFQ(payload)
        .then(res => {
          context.commit("setCurrentSupplierrfq", res);
          console.log(context);
          context.commit("setLoading", false);
        });
    },
    getBothRfq: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.getCustomerRfqQuo(payload).then(res => {
        console.log(res, "real data");
        let rfq = null;
        let quotation = null;
        res.map(r => {
          console.log(r.config.url.indexOf("rfq"), "test url");
          if (r.config.url.indexOf("rfq") >= 0) {
            rfq = r.data.length > 0 ? r.data[0] : null;
            console.log(r.data.length, "test");
            // rfq = data;
          } else {
            // r.data.length > 0 ? r.data[0] : null;
            quotation = r.data.length > 0 ? r.data[0] : null;
            // context.commit("setCurrentCustomerQuotation", data);
          }
        });

        if (quotation) {
          context.commit("setCurrentCustomerQuotation", quotation);
        } else {
          context.commit("setCurrentCustomerRfq", rfq);
        }
        context.commit("setLoading", false);
      });
    },
    createQuotation: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.createQuotation(payload).then(res => {
        context.commit("setSuccess", true);
        context.commit("setLoading", false);
      });
    },
    updateQuotation: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.updateQuotation(payload).then(res => {
        context.commit("setSuccess", true);
        context.commit("setLoading", false);
      });
    },
    createSupplierQuotation: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.createSupplierQuotation(payload).then(res => {
        context.commit("setSuccess", true);
        context.commit("setLoading", false);
      });
    },
    getBothSupplierRfq: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.getSupplierfqQuo(payload).then(res => {
        console.log(res, "real data");
        let rfq = null;
        let quotation = null;
        res.map(r => {
          console.log(r.config.url.indexOf("rfq"), "test url");
          if (r.config.url.indexOf("rfq") >= 0) {
            rfq = r.data.length > 0 ? r.data[0] : null;
            console.log(r.data.length, "test");
            // rfq = data;
          } else {
            // r.data.length > 0 ? r.data[0] : null;
            quotation = r.data.length > 0 ? r.data[0] : null;
            // context.commit("setCurrentCustomerQuotation", data);
          }
        });
        console.log(rfq, "test");
        if (quotation) {
          context.commit("setCurrentSupplierQuotation", quotation);
        } else {
          context.commit("setCurrentSupplierrfq", rfq);
        }
        context.commit("setLoading", false);
      });
    },
    createCustomerPO: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.createCustomerPO(payload).then(res => {
        context.commit("setCurrentCustomerPO", res);
        context.commit("setSuccess", true);
        context.commit("setLoading", false);
      });
    },
    createSupplierPO: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.createSupplierPO(payload).then(res => {
        context.commit("setCurrentSupplierPO", res);
        context.commit("setSuccess", true);
        context.commit("setLoading", false);
      });
    },
    getBothCustomerPO: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.getBothCustomerPO(payload).then(res => {
        console.log(res, "real data");
        let rfq = null;
        let quotation = null;
        res.map(r => {
          console.log(r.config.url.indexOf("rfq"), "test url");
          if (r.config.url.indexOf("purchaseorders") >= 0) {
            rfq = r.data.length > 0 ? r.data[0] : null;
            console.log(r.data.length, "test");
            // rfq = data;
          } else {
            // r.data.length > 0 ? r.data[0] : null;
            quotation = r.data.length > 0 ? r.data[0] : null;
            // context.commit("setCurrentCustomerQuotation", data);
          }
        });
        console.log(rfq, "test");
        if (rfq) {
          context.commit("setCurrentCustomerPO", rfq);
        } else {
          context.commit("setCurrentCustomerQuotation", quotation);
        }
        context.commit("setLoading", false);
      });
    },
    getBothSupplierPO: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.getBothSupplierPO(payload).then(res => {
        console.log(res, "real data");
        let rfq = null;
        let quotation = null;
        res.map(r => {
          console.log(r.config.url.indexOf("rfq"), "test url");
          if (r.config.url.indexOf("purchaseorders") >= 0) {
            rfq = r.data.length > 0 ? r.data[0] : null;
            console.log(r.data.length, "test");
            // rfq = data;
          } else {
            // r.data.length > 0 ? r.data[0] : null;
            quotation = r.data.length > 0 ? r.data[0] : null;
            // context.commit("setCurrentCustomerQuotation", data);
          }
        });
        console.log(rfq, "test");
        if (rfq) {
          context.commit("setCurrentSupplierPO", rfq);
        } else {
          context.commit("setCurrentSupplierQuotation", quotation);
        }
        context.commit("setLoading", false);
      });
    },
    deleteSupplier: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.deleteSupplier(payload).then(res => {
        console.log(res, "haha");
        context.commit("setDeleteSupplier", payload);
        // context.commit("setSuppliers", filterData);
        // context.commit("setSuccess", true);
        context.commit("setLoading", false);
      });
    },
    deleteCustomer: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.deleteCustomer(payload).then(res => {
        console.log(res, "haha");
        context.commit("setDeleteCustomer", payload);
        // context.commit("setSuppliers", filterData);
        // context.commit("setSuccess", true);
        context.commit("setLoading", false);
      });
    },
    getCustomer: (context, payload) => {
      console.log(payload, "test");
      context.commit("setLoading", true);
      GPOpsFactory.getCustomer(payload).then(res => {
        context.commit("setCurrentCustomer", res);
        context.commit("setLoading", false);
      });
    },
    updateCustomer: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.updateCustomer(payload).then(res => {
        // context.commit("setCurrentCustomer", res);
        context.commit("setLoading", false);
        context.commit("setSuccess", true);
      });
    },
    getSupplier: (context, payload) => {
      console.log(payload, "test");
      context.commit("setLoading", true);
      GPOpsFactory.getSupplier(payload).then(res => {
        context.commit("setCurrentSupplier", res);
        context.commit("setLoading", false);
      });
    },
    updateSupplier: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.updateSupplier(payload).then(res => {
        // context.commit("setCurrentCustomer", res);
        context.commit("setLoading", false);
        context.commit("setSuccess", true);
      });
    },
    createSupplierRFQ: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject()
        .createSupplierRfq(payload)
        .then(res => {
          context.commit("setSuccess", true);
          context.commit("setLoading", false);
        })
        .catch(res => {
          context.commit("setLoading", false);
          console.log(res);
        });
    },
    getProjectSupplierQuotation: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject()
        .getProjectSupplierQuotation(payload)
        .then(res => {
          context.commit("setCurrentSupplierQuotation", res);
          context.commit("setLoading", false);
        });
    },
    getDetailProjectSupplierQuotation: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject()
        .getDetailProQuo(payload)
        .then(res => {
          console.log(res);
          context.commit("setCurrentSupplierQuotation", res);
          context.commit("setLoading", false);
        });
    },
    getProjectCustomerQuotation: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject()
        .getProjectCustomerQuotation(payload)
        .then(res => {
          context.commit("setCurrentCustomerQuotation", res);
          context.commit("setLoading", false);
        });
    },
    getDetailProjectCustomerQuotation: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject().getDetailProQuo(payload).then(res=>{
        context.commit("setCurrentCustomerQuotation", res);
        context.commit("setLoading", false);
      })
    },
    getLatestQuoForPo: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject().getProjectCustomerQuotation(payload).then(res=>{
        context.commit("setCurrentCustomerPO", res[res.length-1]);
        context.commit("setLoading", false);
      })
    },
    getLatestQuoForSupPo: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject().getProjectCustomerQuotation(payload).then(res=>{
        context.commit("setCurrentCustomerPO", res[res.length-1]);
        context.commit("setLoading", false);
      })
    },
    createSupplierDO: (context, payload) => {
        context.commit("setLoading", true);
        GPOpsFactory.handlerProject().addSupplierDO(payload).then(res=>{
          context.commit("setSuccess", true);
          context.commit("setLoading", false);
        })
    },
    getLatestProjectSupplierDO: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject().getLatestDO(payload).then(res=>{
        context.commit("setSupplierDO", res);
        context.commit("setLoading", false);
      })
    },
    getDetailSupplierDO: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject().getDetailDO(payload).then(res=>{
        context.commit("setSupplierDO", res);
        context.commit("setLoading", false);
      })
    },
    getLatestProjectCustomerDO: (context, payload) => {
      
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject().getLatestCustDO(payload).then(res=>{
        context.commit("setSupplierDoList", res);
        context.commit("setLoading", false);
      })
    },
    createCustomerDO: (context, payload) => {
      context.commit("setLoading", true);
      GPOpsFactory.handlerProject().addCustomerDO(payload).then(res=>{
        context.commit("setSuccess", true);
        context.commit("setLoading", false);
      })
    }
  }
});
