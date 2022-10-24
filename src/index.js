var target = document.getElementById("text");
var textTarget = document.getElementById("firstName");

var submitBtn = function () {
    if (target != null && textTarget != null && textTarget.textContent != null)
        target.innerHTML = textTarget.value;

    const person = new Person(15, "Mouad");

    person.speak();
};


function Person(age, name) {
    this.age = age;
    this.name = name;

    this.speak = function() {
        console.log(`My name is ${name} and i'm ${age} years old`);
    }
}
