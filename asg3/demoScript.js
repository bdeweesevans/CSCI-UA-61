var imgarray = ["nyc1.jpg", "nyc2.jpg", "nyc3.jpg"];

function start(){
	let count = 0;
	if (count >= imgarray.length){
		count = 0;
	}
	document.images[0].src = imgarray[count]
	count ++;
	var timer = setTimeout(start, 3000);
}

function stop(){
	clearTimeout(timer);
}

document.querySelector("#p1")	//returns the first element when you select a tagname
// and classname. so if you have multiple classes of the same, it will do the first.
// it allows you to get the ED, class or tag. Which has more freedoms than the getElementById
