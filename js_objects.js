function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = function() {
         return length^3;
    };
    this.density = function() {
        return mass / volume;
    };
    this.surfaceArea = function() {
        return 6 * length^2;
    };
}

function Person(firstName, lastName, birthdate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.sayHi = function() {
        var day = d.getDay();
        if(day == 0) {
            return "Hello, today's Sunday. Aww. :c";
        } else if (day == 1) {
            return "Oh...today's Monday...hi...";
        } else if (day == 2) {
            return "Hi, it's Tuesday now!";
        } else if (day == 3) {
            return "Halfway through Wednesday.";
        } else if (day == 4) {
            return "Thursday is the fake Friday!";
        } else if (day == 5) {
            return "FINALLY, IT'S FRIDAY!!";
        } else (day == 6) {
            return "Aaaaah, Saturday...relaxation ahead. c:";
        };
    }
    this.age = function() {
        var now = new Date();
        var age = now.getFullYear() - date.getFullYear();
        return age;
    }
    this.getSign = function() {

    }
}

function Pet(name, species, sleepy, hunger, awake) {
    this.name = name;
    this.species = species;
    this.sleepy = sleepy;
    this.hunger = hunger;
    this.awake = awake;
    this.speak = function() {
        if (this.type === "Dog") {
            return "Woof! That means I love you!";
        } else if (this.type === "Cat") {
            return "Ugh. Meow.";
        } else {
            return "";
        }
    }
    this.eat = function() {

    }
    this.nap = function() {

    }
    this.wakeUp = function() {

    }
}
