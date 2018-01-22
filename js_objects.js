function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = function() {
         return length^3;
    };
    this.density = function() {
        return mass/volume;
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
        if ()
    }
    this.age = age;
    this.getSign = getSign;
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
    this.eat = eat;
    this.nap = nap;
    this.wakeUp = wakeUp;
}
