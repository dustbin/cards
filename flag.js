class Flag{
	static Mount = 0x1;
	static Fast = 0x2;
	static Healer = 0x4;
	static StartTapped = 0x8

	static Path = curvedRectanglePath(35,35,5);

	static Data = [
		[Flag.Mount, "orange"],
		[Flag.Fast, "yellow"]
		[Flag.Healer, "red"]
		[Flag.StartTapped, "grey"]
	]

	static drawFlags(context, flags){
		context.save();
		context.translate(14, 299);
		context.lineWidth = 2;
		for(let d in Flag.Data){
			if(flags & Flag.Data[d][0]){
				context.strokeStyle = Flag.Data[d][1];
				context.stroke(Flag.Path);
				context.translate(37,0);
			}
		}
		context.restore();
	}
}
