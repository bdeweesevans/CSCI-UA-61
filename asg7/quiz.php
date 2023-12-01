<?php
    $correctAnswers = array(
        'q1' => 'Sacramento',
        'q2' => 'Black',
        'q3' => '1.6 million',
    );

    $score = 0;

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        foreach ($correctAnswers as $question => $correctAnswer) {
            if (isset($_POST[$question]) && $_POST[$question] === $correctAnswer) {
                $score++;
            }
        }
    }

    echo "Your score is: " . $score . "/3";
    $percentage = ($score / 3) * 100;
    echo "<br>That is: " . number_format($percentage, 2) . "%";

    echo "<br><br>Questions & Answers:";
    echo "<br>Question 1: Capital of CA";
    echo "<br>Your Answer: " . (isset($_POST['q1']) ? htmlspecialchars($_POST['q1']) : "Not answered");
    echo "<br>Correct Answer: Sacramento";
    echo "<br>Question 2: Cats";
    echo "<br>Your Answer: " . (isset($_POST['q2']) ? htmlspecialchars($_POST['q2']) : "Not answered");
    echo "<br>Correct Answer: Black";
    echo "<br>Question 3: Population";
    echo "<br>Your Answer: " . (isset($_POST['q3']) ? htmlspecialchars($_POST['q3']) : "Not answered");
    echo "<br>  Correct Answer: 1.6 million";
?>
