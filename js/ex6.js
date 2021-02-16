window.onload = function () {
    var target = parseInt(Math.random() * (100) + 1, 10);

    var count = 1

    var guess = prompt("Guess a number (1~100):")

    while (true) {
        if (guess == target) {
            document.getElementById("output").innerText = "Correct! It took you " + count.toString() + " attempts to guess the correct number."
            break
        } else {
            if (guess > target) {
                var guess = prompt("Too high, guess again:")
                count++
            } else {
                var guess = prompt("Too low, guess again:")
                count++
            }
        }
    }
}