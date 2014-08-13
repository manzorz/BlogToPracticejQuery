var dojoConfig = { parseOnLoad:true };

var map;
require(["esri/map", "esri/arcgis/utils", "dojo/domReady!"], function(Map, arcgisUtils){
	arcgisUtils.createMap("1a40fa5cc1ab4569b79f45444d728067", "mapDiv").then(function (response) {
		map = response.map;
	});
});