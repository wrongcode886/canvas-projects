var can1,
    can2;
var ctx1,
	ctx2;
var lastTime,
	deltaTime;
var canWidth,
	canHeight;
var bgPic=new Image();	
var ane,
	fruit;
var mom;
var baby;

var mx,
	my;

document.body.onload=game;
function game(){
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}

function init(){
	can1=document.getElementById("canvas1");
	ctx1=can1.getContext('2d');
	can2=document.getElementById("canvas2");
	ctx2=can2.getContext('2d');

	can1.addEventListener('mousemove',onMouseMove,false);

	bgPic.src="./img/background.jpg";

	canWidth=can1.width;
	canHeight=can1.height;

	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();

	baby= new babyObj();
	baby.init();
	
	mx=canWidth*0.5;
	my=canHeight*0.5;

}

function gameloop(){
	window.requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=deltaTime<30?now-lastTime:30;//解决暂停网页，球无限变大bug
	lastTime=now;
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	momFruitCollision();

	baby.draw();

}

function onMouseMove(e){ //获取鼠标移动位置
	if(e.offsetX||e.layerX){
		mx=e.offsetX==undefined? e.layerX:e.offsetX;
		my=e.offsetY==undefined? e.layerY:e.offsetY;
	}
}