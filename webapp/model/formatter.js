sap.ui.define([

],() => {

    "use strict";

    const Formatter = {
        
        statusText(status){
            const resouceBundle = this?.getOwnerComponent()?.getModel("i18n")?.getResourceBundle();
            
            switch(status){
                case "A":
                    return resouceBundle.getText('invoiceStatusA');
                case "B":
                    return resouceBundle.getText('invoiceStatusB');
                case "C":
                    return resouceBundle.getText('invoiceStatusC');
                default:
                    return status;
            }
        }  
    }

    return Formatter;

})