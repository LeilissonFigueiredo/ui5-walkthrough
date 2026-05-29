sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],(Controller,MessageToast) => {
    "use strict";

    const AppController = Controller.extend("ui5.walkthrough.controller.App", {
        onSayHello(){
            MessageToast.show("Hello World!");
        }

    });

    return AppController;
});