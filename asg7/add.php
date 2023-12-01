<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $number1 = (float)$_POST['number1'];
        $number2 = (float)$_POST['number2'];

        $operator = $_POST['operator'];

        $result = 0;

        switch ($operator) {
            case '+':
                $result = $number1 + $number2;
                break;
            case '-':
                $result = $number1 - $number2;
                break;
            case '*':
                $result = $number1 * $number2;
                break;
            case '/':
                if ($number2 == 0) {
                    echo "Error: Division by zero!";
                    return;
                }
                $result = $number1 / $number2;
                break;
        }

        echo $number1 . " " . $operator . " " . $number2 . " = " . $result;
    }
?>
