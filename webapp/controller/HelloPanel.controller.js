sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
],(Controller, MessageToast) => {
    "use strict"

    const HelloPanel = Controller.extend("ui5.walkthrough.controller.HelloPanel", {
        
        onSayHello(){
            const recipient = this.getView()?.getModel()?.getProperty("/recipient/name");
            const resourceBundle = this.getView()?.getModel("i18n")?.getResourceBundle();
            const msg = resourceBundle.getText("helloMsg", [recipient]);

            MessageToast.show(msg);
        },

        async onOpenDialog(){
            this._dialog ??= await this.loadFragment({
                name: "ui5.walkthrough.view.HelloDialog"
            });
            this._dialog.open();
        },

        onCloseDialog(){
            //this.byId("helloDialog")?.close(); //Official version on WalkThrough tutorial
           this._dialog.close();
        }
    });

    return HelloPanel;
})