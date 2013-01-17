#Pablo Pie Chart Template

A pie chart plugin for the [Pablo](http://pablojs.com/) SVG library by [Premasagar Rose](http://github.com/premasagar).

Just give this plugin your values, and it will produce a pie chart with segments in SVG. It returns a Pablo collection.

###Simple Pie chart example

	// at minimum, you need to provide values
	var paper = Pablo('#foo').root({height:200,width:200}),
		myPieChart = paper.pie({ values:[37, 60.67, 27, 23.405] });

##Installation

Load the pie.js template after Pablo, but before your code.

##Options

* **values**: An array of numbers (floating point or integer)
* **colours**: An array of colours for the fill (rgb, hex, rgba, gradient). If you don't provide any colours, or there is not enough colours in your array for the number of values, a random colour will be used to fill the segment.
* **size**: The width in pixels (integer)
* **x**: The offset from left of paper (integer)
* **y**: The offset from top of paper (integer)

###Defaut Options

* values: `[]`
* colours: An array of random colours
* size: `100`
* x: `0`
* y: `0`

Returned is a Pablo collection of path segments, or a single circle in the case of only one value.

##Examples

For all examples, you need to have a div on your HTML page with the ID 'foo'. Like so.
	`<div id="foo"></div>`

###Three segment pie chart with custom colours

	var paper = Pablo('#foo').root({height:200,width:200}),
		myPieChart = paper.pie({
			values:[6, 7, 8],
			colours:['#3873b4', '#2b9ac5', '#274bc5'],
			size:150
		});

###Add stroke to the collection to separate segments

	myPieChart.attr({stroke:'#fff'});

###Getting the value of a segment

Each segment has the original value, used to create it, attached to the path element. You can get to this value with the `segmentValue` attribute.
	
	var paper = Pablo('#foo').root({height:200,width:200}),
		myPieChart = paper.pie({
			values:[1674.84, 1129.10, 3434.56, 717.00],
			colours:['#3873b4', '#2b9ac5', '#274bc5'],
			size:120
		});

	// get value of first segment
	console.log(myPieChart.eq(0).attr('segmentValue')); // 1674.84

	// get value of fourth segment
	console.log(myPieChart.eq(3).attr('segmentValue')); // 717

Note: Only tested getting values in Chrome.

###Adding an event listener to display the value

	myPieChart.on('mouseover', function(e) {
		// display this segment value in the console
		console.log(this.attributes.segmentValue.value);
	});

###Only suppling one value

In the case where only one value is given, the template returns a circle instead of a path.

	// returns a Pablo collection with a single circle
	var paper = Pablo('#foo').root({height:200,width:200}),
		myPieChart = paper.pie({
			values:[7]
		});

All options like size, colours, x and y are respected. In the example above, a random colour was generated.

##Licence
Feel free to use this under the [MIT](http://opensource.org/licenses/mit-license.php) license

###About
This template was created by Sky Apperley and originally came from [github.com/skymook/p-pie](http://github.com/skymook/p-pie)
Twitter: [@skymook](http://twitter.com/skymook)

