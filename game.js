class Game{
	static Cards = [
		new Card("Adam", "black", "horse.png", Flag.Mount|Flag.Fast, 0, 3),
		new Card("Bob", "red", "horse.png", Flag.Healer|Flag.StartTapped, 4, 3)
	]
}
let canvas,context;
window.onload = function(){
	canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context = canvas.getContext("2d");
	window.requestAnimationFrame(tick);
};
function tick(time){
	if(Game.Cards.filter(x => !x.loaded).length == 0){
		context.clearRect(0,0,canvas.width,canvas.height);
		context.save();
		context.translate(50,50);
		for(let i in Game.Cards){
			Game.Cards[i].draw(context);
			context.translate(300,0);
		}
		context.restore();
	}
	window.requestAnimationFrame(tick);
}
