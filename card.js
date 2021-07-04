class Card{
	static OuterPath = curvedRectanglePath(250,350,10);
	static NamePath = curvedRectanglePath(230,30,7);
	static FlagsPath = curvedRectanglePath(230,45,7);
	constructor(name, color, image, flags, attack, defense){
		this.name = name;
		this.color = color;
		this.setImage(image);
		this.flags = flags;
		this.attack = attack;
		this.defense = defense;
	}
	setImage(image){
		this.image = new Image();
		this.image.parentCard = this
		this.image.onload = function(){
			this.parentCard.loaded = true;
		};
		image.src = image;
	}

	draw(context){
		this.drawCard(context);
		this.drawText(context);
		Flag.drawFlags(context, this.flags);
	}
	drawImage(context){
		context.drawImage(this.image, 10, 50, 230, 230);
	}
	drawCard(context){
		context.save();
		context.fillStyle = this.color;
		context.fill(Card.OuterPath);
		this.drawImage(context);
		context.fillStyle = "white";
		context.translate(10, 10);
		context.fill(Card.NamePath);
		context.translate(0, 285);
		context.fill(Card.FlagsPath);
		context.restore();
	}
	drawText(context){
		context.save();
		context.fillStyle = "black";
		context.font = '24px cursive';
		if(this.textOffset == undefined){
			let t = context.measureText(this.name);
			this.textOffset = 10 + (230-t.width)/2;
		}
		context.fillText(this.name,this.textOffset,33);
		context.restore();
	}
}
