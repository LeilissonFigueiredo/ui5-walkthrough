sap.ui.define([
    "sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
    "use strict";
    
    new ComponentContainer({
        id: "container",
        name: "ui5.walkthrough",
        settings: {
            id: "walkthrough"
        },
        autoPrefixId: true,
        async: true
    }).placeAt("content");
});