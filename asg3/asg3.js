//========================================
function randArray() {  //COMPLETE - Prize application
    let prize = document.getElementById('prize');
    let winningtext = document.getElementById('winningtext');
    let giftbutton = document.getElementById('giftbutton');
    let prizeMatrix = ["Cat Gif", "Car", "Fish Tank Computer", "free WinRAR License", "Stone Obelisk"];
    let fileMatrix = ["cat.gif", "car.jpg", "fish.jpg", "license.jpg", "obelisk.jpg"];
    let randPrize = Math.floor(Math.random() * prizeMatrix.length);

    let output="";
    // use loop to print cars array elements inside the document; each on one line
    for (i=0; i<prizeMatrix.length; i++){
        output += "<p>" + " prize " + String(i+1) + " is " + prizeMatrix[i];
    }

    // new html doc initialized
    document.open();
    document.write("<!DOCTYPE html><html><head><title>Asg3 Prize Application</title><link rel='stylesheet' href='styles.css' type='text/css'></head><body>");
    document.write("<h1 class=header>Assigment 3 Prize Application</h1>");
    
    let result= "<h2 style='text-align: center'>You won a " + prizeMatrix[randPrize] + ", Score!</h2>";
    document.write(result);

    // image printed
    document.write("<p style='text-align: center'><img src='./image_assets/" + fileMatrix[randPrize] + "' style='height:330px; width:500px'>");

    // buttons
    document.write("<div style='text-align: center'><button onclick='randArray();' style='padding: 20px; margin: 10px;'>Re-roll</button>");
    document.write("<button onclick='location.href=\"./index.html\";' style='padding: 20px; margin: 10px;'>Return to Assignment 3</button>");

    for (var i = 0; i < prizeMatrix.length; i++) {
        document.write("<li>The " + prizeMatrix[i] + " is prize #" + (i+1) + ".</li>");
    }
    document.write("</div>");

    // footer
    document.write("<footer>© 2023 Benjamin DeWeese van Schooneveld</footer> <!--To be replaced with import similar to header-->")
    // closing html
    document.write("</body></html>");
}
//========================================
function randImage() {  //INCOMPLETE (need different images) - Random image on load.
    console.log("window has been reloaded and randImage() ran");
    let randomLoadImage = document.getElementById('randomLoadImage');
    let fileMatrix = ["random1", "random2", "random3", "random4", "random5"];
    let randImage = Math.floor(Math.random() * fileMatrix.length);
    randomLoadImage.src = "./image_assets/" + fileMatrix[randImage] + ".jpg";
}
//========================================
var i = 0;
var timeoutID;
//----------------------------------------
function start() {
    let slide = document.getElementById('img1');
    let imgMatrix = ['image1', 'image2', 'image3', 'image4'];

    slide.src = "../images/" + imgMatrix[i] + ".jpg";

    if (i < imgMatrix.length - 1) {
        i++;
    } else {
        i = 0;
    }

    timeoutID = setTimeout(start, 2000);
    document.getElementById('start').disabled = true;
}
//----------------------------------------
function stop() {
    clearTimeout(timeoutID);
    document.getElementById('start').disabled = false;
}
//========================================