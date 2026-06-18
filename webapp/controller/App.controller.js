sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],(Controller,MessageToast,JSONModel,ResourceModel) => {
    "use strict";

    const App = Controller.extend("ui5.walkthrough.controller.App", {
        onInit(){
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        }
        
    });

    return App;
});