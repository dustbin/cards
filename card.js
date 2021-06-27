class Card{
	static OuterPath = curvedRectanglePath(250,350,10);
	static NamePath = curvedRectanglePath(230,30,7);
	static FlagsPath = curvedRectanglePath(230,45,7);
	constructor(name,flags){
		this.name = name;
		this.flags = flags;
	}
	
	draw(context){
		this.drawCard(context);
		this.drawText(context);
		Flag.drawFlags(context, this.flags);
	}
	drawCard(context){
		context.save();
		if(this.flags & Flag.Green){
			context.fillStyle = "green";
		}else if(this.flags & Flag.Orange){
			context.fillStyle = "orange";
		}else{
			context.fillStyle = "purple";
		}
		context.fill(Card.OuterPath);
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
