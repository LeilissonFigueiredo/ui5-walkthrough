sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"
],(Controller,UIComponent, History) => {
    
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
        },

        onNavback(){
            const history = History.getInstance();
            const previousHash = history.getPreviousHash();
            if (previousHash){
                window.history.go(-1);

            }else{
                const router =  UIComponent.getRouterFor(this);
                router.navTo("overview",{}, true);
            }
        }

    })

    return Detail;
    
})