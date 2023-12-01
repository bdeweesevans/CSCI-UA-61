<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $noun1 = htmlspecialchars($_POST['noun1']);
        $noun2 = htmlspecialchars($_POST['noun2']);
        $noun3 = htmlspecialchars($_POST['noun3']);
        $verb1 = htmlspecialchars($_POST['verb1']);
        $verb2 = htmlspecialchars($_POST['verb2']);
        $adjective1 = htmlspecialchars($_POST['adjective1']);
        $adjective2 = htmlspecialchars($_POST['adjective2']);
        $number = htmlspecialchars($_POST['number']);

        $madlibStory = "Once upon a time, in a faraway $adjective1 kingdom, there lived a $adjective2 $noun1. Every day, it would $verb1 in the $noun2 and $verb2 by the $noun3. One day, it met $number magical creatures, and they all became the best of friends.";

        echo $madlibStory;
    }
?>
