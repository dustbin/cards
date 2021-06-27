class Flag{
	static Purple = 0x0;
	static Green = 0x1;
	static Orange = 0x2;

	static Cake = 0x4;
	static Flower = 0x8;

	static Glasses = 0x10;
	static Hat = 0x20;
	static Jewelry = 0x40;
	static Pet = 0x80;
	static Spikes = 0x100;
	static Spots = 0x200;
	static Stripes = 0x400;
	static Tail = 0x800;

	static Tea = 0x1000;
	static Teeth = 0x2000;

	static Path = curvedRectanglePath(35,35,5);

	static drawFlags(context, flags){
		context.save();
		context.translate(14, 299);
		context.lineWidth = 2;
		if(flags & Flag.Cake){
			context.strokeStyle = "orange";
			context.stroke(Flag.Path);
			context.translate(37,0);
		}
		if(flags & Flag.Flower){
			context.strokeStyle = "orange";
			context.stroke(Flag.Path);
			context.translate(37,0);
		}
		if(flags & Flag.Hat){
			context.strokeStyle = "red";
			context.stroke(Flag.Path);
			context.translate(37,0);
		}
		if(flags & Flag.Jewelry){
			context.strokeStyle = "yellow";
			context.stroke(Flag.Path);
			context.translate(37,0);
		}
		if(flags & Flag.Tea){
			context.strokeStyle = "blue";
			context.stroke(Flag.Path);
			context.translate(37,0);
		}
		context.restore();
	}
}
