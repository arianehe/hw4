window.onload = function () {

    function Palindromes(str) {
        let reg = /[\W_]/g;
        let newStr = str.replace(reg, '').toLowerCase();
        let reverseStr = newStr.split('').reverse().join('')
        return reverseStr === newStr;
    }

    var word = prompt("Input a new word:")
    var word_low = word.toLowerCase()

    var count = 0

    for (var i = 0; i < word_low.length; i++) {
        if (word_low[i] == 'a' || word_low[i] == 'e' || word_low[i] == 'i' || word_low[i] == 'o' || word_low[i] == 'u') {
            count++
        }
    }
    if (Palindromes(word_low))
    {
        var result = word + " contains "+count.toString() + " vowels and is a palindrome"
    }else {
        var result = word + " contains "+count.toString() + " vowels and is NOT a palindrome"
    }

    document.getElementById("output").innerHTML = result

}

