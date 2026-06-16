sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/UIComponent"
], (Controller, JSONModel, Filter, FilterOperator, UIComponent) => {

   const InvoiceList = Controller.extend("ui5.walkthrough.controller.InvoiceList", {
       
    onInit(){
            const oViewModel = new JSONModel({
                currency : "EUR"
            });

            this.getView()?.setModel(oViewModel, "view");
    },

    onFilterInvoices(oEvent){
        //build filter array
        const aFilter = [];
        const query = oEvent.getParameter("query");
        if(query){
            aFilter.push(new Filter("ProductName", FilterOperator.Contains, query));
        }

        //filter binding

        const oBinding = this.byId('invoiceList')?.getBinding("items");
        oBinding?.filter(aFilter);
    },

    onPress(oEvent){
        const item = oEvent.getSource();

        const router =  UIComponent.getRouterFor(this);
        router.navTo('detail', {
            invoicePath: window.encodeURIComponent(
            item.getBindingContext("invoice").getPath().substring(1))
        });
    }
        
   });
   
   return InvoiceList;

})