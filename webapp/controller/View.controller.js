sap.ui.define([
	'jquery.sap.global',
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/Filter',
	'sap/ui/model/json/JSONModel',
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function(jQuery, Controller, JSONModel) {
	"use strict";

	return Controller.extend("Portal.controller.View", {

		onInit: function() {
			var model = new sap.ui.model.json.JSONModel(jQuery.sap.getResourcePath("Portal/model/Device.json"));
			this.getView().setModel(model);
		},

		onSelectionChange: function(oEvt) {

			var oList = oEvt.getSource();
			var oLabel = this.byId("idFilterLabel");
			var oInfoToolbar = this.byId("idInfoToolbar");

			// With the 'getSelectedContexts' function you can access the context paths
			// of all list items that have been selected, regardless of any current
			// filter on the aggregation binding.
			var aContexts = oList.getSelectedContexts(true);

			// update UI
			var bSelected = (aContexts && aContexts.length > 0);
			var sText = (bSelected) ? aContexts.length + " selected" : null;
			oInfoToolbar.setVisible(bSelected);
			oLabel.setText(sText);
		},

		onDownload: function() {
			//var sText = this.getView().getModel().getProperty("/code");
			//File.save(sText, "download", "html");
		
			var sUrl = "config/application.py";
    	    var encodeUrl = encodeURI(sUrl);
			sap.m.URLHelper.redirect(encodeUrl,true);
		}
	
	});
});