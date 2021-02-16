function ex1Func() {
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value)
    var operation = document.getElementById("ope").value

    if (operation == "+") {
        document.getElementById("output").innerText = num1.toString() + " + " + num2.toString() + " = " + (num1 + num2).toString()
    } else if (operation == "-") {
        document.getElementById("output").innerText = num1.toString() + " - " + num2.toString() + " = " + (num1 - num2).toString()

    } else if (operation == "*") {
        document.getElementById("output").innerText = num1.toString() + " * " + num2.toString() + " = " + (num1 * num2).toString()

    } else if (operation == "/") {
        document.getElementById("output").innerText = num1.toString() + " / " + num2.toString() + " = " + (num1 / num2).toString()
    } else {
        alert("Not an available operation!")
    }
}