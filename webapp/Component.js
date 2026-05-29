sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent, XMLView, JSONModel, ResourceModel) => {
    "use strict";

    const Component = UIComponent.extend("ui5.walkthrough.Component", {
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"]
        },

        init() {
            UIComponent.prototype.init.call(this);

            const data = {
                "recipient" : {
                    "name": "World"
                }
            }

            this.setModel(new JSONModel(data));

            const i18nModel = new ResourceModel({
                "bundleName": "ui5.walkthrough.i18n.i18n",
                "supportedLocales": [""],
                "fallbackLocale": ""
            
            });

            this.setModel(i18nModel, "i18n");
        },

        createContent(){
            return XMLView.create({
                "viewName": "ui5.walkthrough.view.App",
                "id": "app"
            })
        }
    });

    return Component;
});