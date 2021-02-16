window.onload = function () {
    var words = new Array()

    while (true) {
        var getWord = prompt("A new word (input 'STOP' to stop):")
        if (getWord.toLowerCase() == "stop") {
            break
        } else {
            words.push(getWord)
        }
    }

    if (words.length == 0) {
        result = "No words to display, Stop was the first word entered."
    } else {
        result = "You entered the following words: <br>"

        for (var i = 0; i < words.length; i++) {
            result += words[i] + "<br>"
        }
    }

    document.getElementById("output").innerHTML = result

}

