var o_div;

window.onload = function() {
	o_div = document.getElementById("opener");
	o_div.style.height = "100vh";
	o_div.style.width = "100vw";
}

function openerUp(o) {
	var h = o_div.style.height;
	o_div.style.top = "-" + h;
}