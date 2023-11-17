$(document).ready(function(){
            $("#styleButton").click(function(){
                $("#special").css("color", "green");
                $(".highlight").css("background-color", "yellow");

                $("p").each(function(){
                    $(this).css({
                        "color": "blue",
                        "background-color": "lightgrey",
                        "width": "80%",
                        "border": "1px solid black"
                    });

                    alert($(this).html());
                });
            });
        });

$(document).ready(function(){
    // Hide
    $("#hideButton").click(function(){
        $("#image1").hide();
    });

    // Show
    $("#showButton").click(function(){
        $("#image1").show();
    });

    // Fade out
    $("#fadeOutButton").click(function(){
        $("#image1").fadeOut("500");
    });
});

$(document).ready(function(){

    $("#animateButton").click(function(){
        $("#animatedDiv").animate({
            right: '-=300px', // move right by 300px (cant see animation if it goes left)
            opacity: 'toggle',
            height: 'toggle',
            width: 'toggle'
        }, 1000); 
    });
});

$("#username, #password").change(function(){
var username = $("#username").val();
var password = $("#password").val();

// Reset styles to default
$("#username, #password").css("background-color", "");

    if (!username || !password) {
        if (!username) {
            $("#username").focus().css("background-color", "yellow");
            alert("Please enter a username.");
        }
        if (!password) {
            $("#password").focus().css("background-color", "yellow");
            alert("Please enter a password.");
        }
    } else {
        $("#demo").text("Username: " + username + ", Password: " + password);
    }
});