var c = document.getElementById("leftJoystick");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100,100,100,0,2*Math.PI);
ctx.fillStyle = "silver";
ctx.fill();
ctx.beginPath();
ctx.arc(100,100,30,0,2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();
for(var ids in ["leftJoystick","rightJoystick"]) {
	windows.alert("id"+ids);
}

