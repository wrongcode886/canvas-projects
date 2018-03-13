//判断大鱼与果实的距离，
function momFruitCollision(){
	for(var i=0;i<fruit.num;i++){
		if(fruit.isalive[i]){
			var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			if(l<900){//30
				fruit.dead(i);
			}
		}
	}
}