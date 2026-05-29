sap.ui.define([
    "sap/ui/core/mvc/Controller"
],(Controller) => {
    "use strict";

    const AppController = Controller.extend("ui5.walkthrough.controller.App", {
        onSayHello(){
            alert("Hello World Controller");
        }

    });

    return AppController;
});