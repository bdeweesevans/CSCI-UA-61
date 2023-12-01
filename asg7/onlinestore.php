<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $quantity1 = isset($_POST['quantity1']) ? intval($_POST['quantity1']) : 0;
    $quantity2 = isset($_POST['quantity2']) ? intval($_POST['quantity2']) : 0;
    $quantity3 = isset($_POST['quantity3']) ? intval($_POST['quantity3']) : 0;
    $deliverySelection = isset($_POST['deliverySelection']) ? floatval($_POST['deliverySelection']) : 0.0;

    $subtotal1 = $quantity1 * 200;
    $subtotal2 = $quantity2 * 14;
    $subtotal3 = $quantity3 * 125;
    $grandTotal = $subtotal1 + $subtotal2 + $subtotal3 + $deliverySelection;

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $addressStreet = $_POST['address-street'];
    $addressCity = $_POST['address-city'];
    $addressState = $_POST['address-state'];
    $addressAreaCode = $_POST['address-areacode'];
    $ccNumber = $_POST['cc-number'];
    $maskedNumber = str_repeat('X', strlen($ccNumber) - 4) . substr($ccNumber, -4);

    echo "<!DOCTYPE html><html><head><title>Receipt</title>";
    echo "<link rel='stylesheet' href='styles.css' type='text/css'></head><body>";
    echo "<h1 class='header'>Receipt</h1>";
    echo "<div class='left-column'>";

    $productsNames = ["Plane with Big Nose", "Pool Cleaning Service", "Breaking Bad's Los Pollos Hermanos"];
    $quantities = [$quantity1, $quantity2, $quantity3];
    $subtotals = [$subtotal1, $subtotal2, $subtotal3];

    for ($i = 0; $i < count($productsNames); $i++) {
        echo "<p>" . $productsNames[$i] . ": Quantity - " . $quantities[$i] . ", Subtotal - $" . $subtotals[$i] . "</p>";
    }

    $deliveryMethod = $deliverySelection == 5 ? "Shipping for $5.00" : "In-store Pickup for Free";
    echo "<p>Delivery Method: " . $deliveryMethod . "</p>";
    echo "<p>Grand Total: $" . $grandTotal . "</p>";

    echo "<p>Name: " . htmlspecialchars($name) . "</p>";
    echo "<p>Phone: " . htmlspecialchars($phone) . "</p>";
    echo "<p>Email: " . htmlspecialchars($email) . "</p>";
    echo "<p>Address: " . htmlspecialchars($addressStreet) . ", " . htmlspecialchars($addressCity) . ", " . htmlspecialchars($addressState) . " " . htmlspecialchars($addressAreaCode) . "</p>";
    echo "<p>Credit Card Number: " . htmlspecialchars($maskedNumber) . "</p>";

    echo "</div>";
    echo "<footer>© 2023 Benjamin DeWeese van Schooneveld</footer></body></html>";
}
?>
