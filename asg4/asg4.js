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

    if (sign.length > 0){
        document.images[0].src = "./images/image_" + sign + ".jpg";
        document.images[0].alt = sign + " image";
        document.images[0].style.width = "50%"
        document.getElementById("bottomText").innerText = "Your sign is " + sign;
        document.images[1].src = "./images/openedCookie.jpg";
        document.getElementById("fortuneText").style.display = "";
        document.getElementById("fortuneText").innerText = returnFortune(sign);
    }
});

f.addEventListener("reset", (event) => {
    event.preventDefault();
    document.images[0].src = "./images/image_Placeholder.jpg";
    document.images[0].style.width = "90%"
    document.getElementById("bottomText").innerText = "Input your birthday above.";
    document.images[1].src = "./images/closedCookie.jpg";
    document.getElementById("fortuneText").style.display = "none";
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

function returnFortune(sign){
    let fortunes = [
    ["Capricorn", "Today, though, allow yourself a moment of vulnerability."],
    ["Aquarius", "Today, they bring whispers of innovation and new ideas."],
    ["Pisces", "Whether you're daydreaming or deep in slumber, pay attention to the symbols that come forth. "],
    ["Aries", "Today might be the day you find clarity in a situation that's been clouding your mind."],
    ["Taurus", "A walk outside could bring both relaxation and an unexpected solution to a problem."],
    ["Gemini", "Whether you're resolving disputes or crafting tales, your voice will be impactful."],
    ["Cancer", "Trust your gut feelings, especially when it comes to close relationships."],
    ["Leo", "Chase what ignites your soul, but also remember to pause and appreciate the beauty in small moments."],
    ["Virgo", "Embrace the unexpected, and you'll find there's a hidden pattern even in the chaos."],
    ["Libra", "Today, share your calm and harmonious energy with those around you."],
    ["Scorpio", "Dive into them, and you might discover treasures long forgotten."],
    ["Sagittarius", "Even if you can't journey afar, seek out stories or experiences that transport you."],
    ];

    for (var i = 0; i < fortunes.length; i++){
        if (sign == fortunes[i][0]) {
            return fortunes[i][1];
        } 
    }
    return;
}
