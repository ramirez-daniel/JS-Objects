function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = this.length * this.length * this.length;
    this.density = this.mass / this.volume;
    this.surfaceArea = this.length * this.length * 6;
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
        var date = new Date(mm/dd/yyyy);
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
        this.hunger = ++;
        this.sleepy = ++;
        if (this.species === "Dog") {
            return "Woof! That means I love you!";
        } else if (this.species === "Cat") {
            return "Ugh. Meow.";
        } else {
            return "";
        }
    };
    this.eat = function() {
        this.hunger = 0;
        this.sleepy = ++;
        if (this.species === "Dog") {
            return "Nom nom nom nom. Yum, thank you for this deliciou food! I love you!";
        } else (this.species === "Cat") {
            return "Ugh, I guess I'll eat this.";
        }
    };
    this.nap = function() {
        return "Zzzz...";
        this.sleepy = 0;
        this.awake = false;
    };
    this.wakeUp = function() {
        this.sleepy = 0;
        this.awake = true;
        this.hunger = 4;
        if (this.species === "Dog") {
            return "I'm awake! Let's eat and then play! I love you!";
        } else (this.species === "Cat") {
            return "Ugh, I'm awake now. Is there anything to eat around here?"
        }
    };
}
