const r = Number(prompt("Enter the circle radius:"));

var circle = {
    radius: r,
    circumference() {
        return 3.14 * 2 * this.radius
    },
    area() {
        return 3.14 * this.radius * this.radius
    }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);


