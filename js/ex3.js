window.onload = function (){
    const values = [3, 11, 7, 2, 9, 10];

    var count = values[0]
    var minV = values[0]
    var maxV = values[0]

    for (var i = 1; i < values.length; i++) {
        count += values[i]
        if (values[i] > maxV) {
            maxV = values[i]
        }
        if (values[i] < minV) {
            minV = values[i]
        }
    }

    var result = "The sum of all array values is: " + count.toString()
    result += "<br>The minimum values is: " + minV.toString()
    result += "<br>The maximum values is: " + maxV.toString()

    console.log(result)

    document.getElementById("output").innerHTML = result
}


