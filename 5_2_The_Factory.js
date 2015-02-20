require(["5_2_The_Factory_module.js"], function(controls){
	var text = controls.create({type:"text", value: "hello factory"});
	var check = controls.create({type: "checkbox", checked: true });

	document.body.appendChild(text);
	document.body.appendChild(check);
});