function randomImage(){
	imgArr = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
	rand = Math.floor(Math.random() * imgArr.length);
	let image = document.getElementById("imageThing");
	image.src = "./images/" + imgArr[rand];
}

