sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"user strict";
	return Controller.extend("sap.ui.demo.wt.controller.App", {
		onShowHello : function() {
			//alert("Hello World!!!");
			MessageToast.show("Hello World");
		}
	});
});