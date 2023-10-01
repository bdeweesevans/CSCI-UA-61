//========================================
var clickCounter = 0; // for change function
//----------------------------------------
function change() { //Complete
    let element1 = document.getElementById('element1');
    let element2 = document.getElementById('element2');
    let element3 = document.getElementById('element3');
    let element4 = document.getElementById('element4');

    var colors = ["red", "maroon", "orange", "coral", "green", "lime", "blue", "teal", "purple", "blueviolet", "pink"];

    if ((clickCounter % 2) === 0) {
        element1.style.fontSize = "40px";
        element1.style.color = "#DD6E0F";
        element1.style.border = "2px dotted white";

        element2.innerText = "keep clicking me to get a new random background color, change the title's color & font size, and the text of this button!";

        let randColor = Math.floor(Math.random() * colors.length);
        element3.style.backgroundColor = colors[randColor];

        element4.innerText = 'The current background color is "' + colors[randColor] + '".';

    }
    else {  //resets the style changes
        element1.style.fontSize = "";
        element1.style.color = "";
        element1.style.border = "";
        element2.innerText = "Click me again! see what color the page turns!";
        element3.style.backgroundColor = "white"
        element4.innerText = 'The current background color is "white".';
    }
    clickCounter ++;
}
//========================================
function swapT() { //COMPLETE - one p element is hidden w/ inline css to reveal a secret upon click! I promise, you can click on either and it will work.
    let p1 = document.getElementById("text1");
    let p2 = document.getElementById("text2");

    let textHtml1 = p1.innerHTML;
    let textHtml2 = p2.innerHTML;
    p1.innerHTML = textHtml2;
    p2.innerHTML = textHtml1;
}
//========================================
function swapImg() { //COMPLETE - rotates the images clockwise!
    let image1 = document.getElementById("image1");
    let image2 = document.getElementById("image2");
    let image3 = document.getElementById("image3");
    let image4 = document.getElementById("image4");

    let src1 = image1.src;
    let src2 = image2.src;
    let src3 = image3.src;
    let src4 = image4.src;
    image1.src = src3;
    image2.src = src1;
    image3.src = src4;
    image4.src = src2;
}
//========================================