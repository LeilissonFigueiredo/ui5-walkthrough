sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],(Controller,MessageToast,JSONModel) => {
    "use strict";

    const AppController = Controller.extend("ui5.walkthrough.controller.App", {
        
        onInit(){
            const data = {
                recipient : {
                    name: "World"
                }
            }

            this.getView()?.setModel(new JSONModel(data));
        },

        onSayHello(){
            MessageToast.show("Hello World!");
        }

    });

    return AppController;
});