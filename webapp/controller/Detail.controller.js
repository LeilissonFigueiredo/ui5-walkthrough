sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],(Controller,UIComponent) => {
    
    const Detail = Controller.extend("ui5.walkthrough.controller.Detail", {
        onInit(){
            const router = UIComponent.getRouterFor(this);
            router.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);

        },

        _onObjectMatched(oEvent){
            this.getView().bindElement({
                path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                model: "invoice"
            });
        }

    })

    return Detail;
    
})