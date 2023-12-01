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
?>