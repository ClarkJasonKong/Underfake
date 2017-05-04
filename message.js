
var canvas = document.getElementById("message")
var context = canvas.getContext("2d")

var screenWidth = 1950
var screenHeight = 1500

var rainDropsX = new Array()
var rainDropsY = new Array()
var rainDropWidth = 1
var rainDropHeight = 9
var rainDropSpeed = 8
var maxRpr = 2
var minRpr = 0


var mess
var numofMess

document.onkeyup = keyUp


menuInit()

function menuInit(){
	mess = 0
	numofMess = 8
	menuLoop()
}

function menuLoop(){
	menuUpdate()
	addRain()
	drawBG()
	drawRain()
	drawTitle()
	setTimeout(menuLoop, 32)
	//drawChoices()
}
function menuUpdate(){
	for(var i = 0; i < rainDropsY.length ; i++){
		if(rainDropsY[i] > screenHeight){
			rainDropsY.splice(i, 1)
			rainDropsX.splice(i, 1)
		}
		rainDropsY[i]+=rainDropSpeed;
	}
}
function addRain(){
	for( var i = 0; i< Math.floor((Math.random() * maxRpr) + minRpr); i++){
		rainDropsX.push(Math.floor(Math.random() * screenWidth))
		rainDropsY.push(0)
	}
}
function drawRain(){
	for(var i=0; i< rainDropsY.length ; i++){
		context.fillStyle = "blue"
		context.fillRect(rainDropsX[i], rainDropsY[i], rainDropWidth, rainDropHeight)
	}
}
function drawTitle(){
	context.fillStyle="blue"
	context.font = "20px Charlemagne STD";
	context.fillText("Press up or down", screenWidth/2-150, screenHeight/15)

	context.fillStyle="red"
	context.font = "30px Charlemagne STD";
	if(mess >=1)
		context.fillText("I shouldn't be overreacting, I'm sorry.", screenWidth/15, screenHeight/10+50)
	if(mess >=2)
		context.fillText("I've just been in a bad place for the past week", screenWidth/15, screenHeight/10 +100)
	if(mess >=3)
		context.fillText("and my stupid feelings are trying to find someone to blame", screenWidth/15, screenHeight/10 +150)
	if(mess >=4)
		context.fillText("i'm just very confused at the moment.", screenWidth/15, screenHeight/10 +200)
	if(mess >=5)
		context.fillText("and I'm sorry if I'm letting it all out on you", screenWidth/15, screenHeight/10 +250)
	if(mess >=6)
		context.fillText("i just hope everything's fine ", screenWidth/15, screenHeight/10 +300)
	if(mess >=7)
		context.fillText("and i hope you're doing okay", screenWidth/15, screenHeight/10 +350)
	if(mess >=8)
		context.fillText("goodbye", screenWidth/15, screenHeight/10 +500)
}

function drawBG(){
	context.fillStyle = "black"
	context.fillRect(0, 0, screenWidth, screenHeight)
}

function keyUp(event){
	//console.log(event.keyCode);
	if (event.keyCode == 38){
		if(mess>0)
			mess--


	}
	else if (event.keyCode ==40){
		if(mess < numofMess)
			mess++
	}
	
}

/*<html>
<head>
	<style>
		html, body{ width: 100%; height:100%; margin:0; } canvas{display: block; position: absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%}
	</style>
</head>
<body>
<canvas id= "message" width="1920" height="955"></canvas>
<script type="text/javascript" src ="message.js"></script>
</body>
</html>*/