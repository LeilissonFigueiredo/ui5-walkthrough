sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/Device"
], (UIComponent, XMLView, JSONModel, ResourceModel, Device) => {
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

            //set device model
            const  oDeviceModel =  new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel, "device");


            // create the views based on the url/hash
            this.getRouter().initialize();
        },
    });

    return Component;
});