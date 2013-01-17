
/*

	p-pie
	Pablo Pie Chart Template
	https://github.com/skymook/p-pie

	by Sky Apperley
	@skymook

*/

Pablo.template('pie', function(options){
	// Version: 0.1.0
	var values = options.values || [],
		colours = options.colours || [],
		valuesLength = values.length,
		size = options.size || 100,
		x = options.x || 0,
		y = options.y || 0,
		r = size * 0.5,
		degreeRadian = Math.PI / 180,
		unit = 0, runningTotal, unitTotal, thisSegment, i, flipBits,
		cosX, sinY, x1, y1, x2, y2, collection, pathStr;

		runningTotal = unitTotal = 0;

		if (valuesLength===1) {
			// return circle
			collection = Pablo.circle({cx:r, cy:r, r:r,
				transform: 'translate('+x+','+y+')',
				fill: colours[0] || '#'+(Math.floor(Math.random()*16777215).toString(16)),
				segmentValue: values[0]
			});
		} else {
			collection = Pablo();

			// work out unit value
			for (i=0; i<valuesLength; i++){
				unitTotal+=values[i];
			}
			unit = unitTotal/360;
			// build each pie segements
			for (i=0; i<valuesLength; i++){
				// start point (x,y cords)
				if (i===0) {
					// set up first segment variables
					x1=size;
					y1=r;
				} else {
					// start is last x,y cords
					x1=x2;
					y1=y2;
				}
				thisSegment = values[i] / unit;
				runningTotal += thisSegment;
				// calculate end point (x,y cords)
				cosX = Math.cos(runningTotal*degreeRadian);
				sinY = Math.sin(runningTotal*degreeRadian);
				x2 = r + (cosX*r);
				y2 = r - (sinY*r);
				// long or short way round
				if (thisSegment>180) {
					flipBits = '0 1,0';
				} else {
					flipBits = '0 0,0';
				}

				pathStr='M'+r+','+r+' L'+x1+','+y1+
					' A'+r+','+r+' '+flipBits+' '+x2+','+y2+' z';

				collection.push(
					Pablo.path({
						d: pathStr,
						fill: colours[i] || '#'+(Math.floor(Math.random()*16777215).toString(16)),
						transform: 'translate('+x+','+y+')',
						segmentValue: values[i]
					})
				);
			}
		}
	return collection;
});
