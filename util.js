function curvedRectanglePath(width,height,radius){
	let path = new Path2D();
	path.moveTo(radius,0);
	path.arcTo(width, 0, width, radius, radius);
	path.arcTo(width, height, width-radius, height, radius);
	path.arcTo(0, height, 0, height-radius, radius);
	path.arcTo(0, 0, radius, 0, radius);
	return path;
}
