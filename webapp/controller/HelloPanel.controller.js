sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (
    Controller,
    MessageToast
) => {
    "user strict";

    return Controller.extend("ui.walktrhough.controller.HelloPanel", {
        onShowHello(){
            //read message from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // show message
            MessageToast.show(sMsg);

        },

        async onOpenDialog(){
            this.oDialog ??= await this.loadFragment({
                name: "ui5.walkthrough.view.HelloDialog"
            });

            this.oDialog.open();
        },

        onCloseDialog(){
            this.byId("helloDialog").close();
        }
    });
})