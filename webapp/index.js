sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], (XMLView) => {
    "use strict";
    
    XMLView.create({
        viewName: "ui5.walkthrough.view.App",
        id: "app"
    }).then((view) => {
        view.placeAt("content");
    });
});