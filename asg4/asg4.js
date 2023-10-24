function parseLocalDate(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month, day);
}

const f = document.forms[0];
f.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from being submitted to the server
    let birthDateVal = document.getElementById("dateInput").value;
    let birthDateObj = parseLocalDate(birthDateVal);
    let sign = returnHoroscope(birthDateObj);

    console.log(sign);
    if (sign.length > 0){
        document.images[0].src = "./images/image_" + sign + ".jpg";
        document.images[0].alt = sign + " image";
        document.getElementById("bottomText").innerText = "Your sign is " + sign;
        document.images[1].src = "./images/image_" + sign + ".jpg"; //need to change this image to the fortune.
    }
});

f.addEventListener("reset", (event) => {
    event.preventDefault();
    document.images[0].src = "./images/image_Placeholder.jpg";
    document.getElementById("bottomText").innerText = "Input your birthday above.";
});

function returnHoroscope(birthDateObj) {
    // day is broken, will return 31 if you selectthe first of the month
    let day = birthDateObj.getDate();
    let month = birthDateObj.getMonth();    //month works.
    let sign = "";

    //useless array, can be deleted later.
    let starSigns = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];    

    let theThingArray = [
        ["Capricorn", 12, 22, 1, 20], 
        ["Aquarius", 1, 21, 2, 19],
        ["Pisces", 2, 20, 3, 20],
        ["Aries", 3, 21, 4, 20],
        ["Taurus", 4, 21, 5, 21],
        ["Gemini", 5, 22, 6, 21],
        ["Cancer", 6, 22, 7, 22],
        ["Leo", 7, 23, 8, 22],
        ["Virgo", 8, 23, 9, 21],
        ["Libra", 9, 22, 10, 22],
        ["Scorpio", 10, 23, 11, 21],
        ["Sagittarius", 11, 22, 12, 21]];

    //we dont even need a nested loop for this. why she say we need??
    for (let i = 0; i < theThingArray.length; i++){
        if (((theThingArray[i][1] == month) && (day >= theThingArray[i][2])) || ((theThingArray[i][3] == month) && (day <= theThingArray[i][4]))) {
            sign = theThingArray[i][0];
        }
    }

    return sign;
}
