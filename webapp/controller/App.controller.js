sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],(Controller,MessageToast,JSONModel,ResourceModel) => {
    "use strict";

    const AppController = Controller.extend("ui5.walkthrough.controller.App", {
        
        onInit(){
            const data = {
                recipient : {
                    name: "World"
                }
            }

            this.getView()?.setModel(new JSONModel(data));

            const i18nModel = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n"
            });

            this.getView()?.setModel(i18nModel, "i18n");
        },

        onSayHello(){
            const recipient = this.getView()?.getModel()?.getProperty("/recipient/name");
            const resourceBundle = this.getView()?.getModel("i18n")?.getResourceBundle();
            const msg = resourceBundle.getText("helloMsg", [recipient]);

            MessageToast.show(msg);
        }

    });

    return AppController;
});