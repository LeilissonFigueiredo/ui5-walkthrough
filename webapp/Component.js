sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent, XMLView, JSONModel, ResourceModel) => {
    "use strict";

    const Component = UIComponent.extend("ui5.walkthrough.Component", {
        metadata: {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            "manifest": "json"
        },

        init() {
            UIComponent.prototype.init.call(this);

            const data = {
                "recipient" : {
                    "name": "World"
                }
            }

            this.setModel(new JSONModel(data));
        },
    });

    return Component;
});