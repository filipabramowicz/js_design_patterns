// AMD - Asynchronous Module Definition
require(["4_2_The_AMD_Format_module"], function(dom){
	var el = dom.create("div");
	var el2 = dom.create("div");

	console.log(el.id);
	console.log(el2.id);
});