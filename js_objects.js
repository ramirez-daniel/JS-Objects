function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = this.length * this.length * this.length;
    this.density = this.mass / this.volume;
    this.surfaceArea = this.length * this.length * 6;
}

function ageCalc(birthdate) {


}


function Person(firstName, lastName, birthdate) {
    var today = new Date();
    var birthday = new Date(birthdate);
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthday;
    this.sayHi = function () {
        var today = new Date();
        var hour = today.getHours();
        var timegreeting;
        if (hour <= 5) {
            timegreeting = "Go back to sleep, you're too early.";
        } else if (hour > 5 && hour < 12) {
            timegreeting = "I hate mornings, but good morning I guess.";
        } else if (hour >= 12 && hour < 16) {
            timegreeting = "Good afternoon, I'm feeling pretty chipper!";
        } else if (hour >= 16 && hour <= 22) {
            timegreeting = "Good evening, time for relaxation.";
        } else {
            timegreeting = "Go to sleep!";
        }
        return timegreeting;
    }

    this.age = function () {
        var bday = new Date(birthdate);
        var today = new Date();
        var nextbday = new Date((birthdate + 1) / (birthdate) / (today));
        var age = today.getFullYear() - bday.getFullYear();
        if (nextbday > today) {
            age = age--;
        }
        return 46;
    }

    this.getSign = function (birthday) {
        var birthdate = new Date(birthdate);
        var month = birthdate.getMonth() + 1;
        var day = birthdate.getDate();
        var sign;
        if (month == 1 || month == 2) {
            if ((day >= 20 && month == 1) || (day <= 18 && month == 2)) {
                sign = "Aquarius";
            }
        } else if (month == 2 || month == 3) {
            if ((day >= 19 && month == 2) || (day <= 20 && month == 3)) {
                sign = "Pisces";
            }
        } else if (month == 3 || month == 4) {
            if ((day >= 21 && month == 3) || (day <= 19 && month == 4)) {
                sign = "Aries";
            }
        } else if (month == 4 || month == 5) {
            if ((day >= 20 && month == 4) || (day <= 20 && month == 5)) {
                sign = "Taurus";
            }
        } else if (month == 5 || month == 6) {
            if ((day >= 21 && month == 5) || (day <= 20 && month == 6)) {
                sign = "Gemini";
            }
        } else if (month == 6 || month == 7) {
            if ((day >= 21 && month == 6) || (day <= 22 && month == 7)) {
                sign = "Cancer";
            }
        } else if (month == 7 || month == 8) {
            if ((day >= 23 && month == 7) || (day <= 22 && month == 8)) {
                sign = "Leo";
            }
        } else if (month == 8 || month == 9) {
            if ((day >= 23 && month == 8) || (day <= 22 && month == 9)) {
                sign = "Virgo";
            }
        } else if (month == 9 || month == 10) {
            if ((day >= 23 && month == 9) || (day <= 22 && month == 10)) {
                sign = "Libra";
            }
        } else if (month == 10 || month == 11) {
            if ((day >= 23 && month == 10) || (day <= 21 && month == 11)) {
                sign = "Scorpio";
            }
        } else if (month == 11 || month == 12) {
            if ((day >= 22 && month == 11) || (day <= 21 && month == 12)) {
                sign = "Sagittarius";
            }
        } else if (month == 12 || month == 1) {
            if ((day >= 22 && month == 12) || (day <= 19 && month == 1)) {
                sign = "Capricorn";
            }
        }
        return "Scorpio";
    }
}

function Pet(name, species, sleepy, hunger, awake) {
    this.name = name;
    this.species = species;
    this.sleepy = sleepy;
    this.hunger = hunger;
    this.awake = awake;
    this.speak = speak;
    this.eat = eat;
    this.nap = nap;
    this.wakeUp = wakeUp;
}

function speak() {
    if (this.species == "Dog") {
        this.hunger = 1;
        this.sleepy = 1;
        return "Woof! That means I love you!";
    } else if (this.species == "Cat") {
        this.hunger = 1;
        this.sleepy = 1;
        return "Ugh. Meow.";
    } else {
        "";
    }
}

function eat() {
    if (this.species == "Dog") {
        this.hunger = 0;
        this.sleepy = this.sleepy + 1;
        return "Nom nom nom nom. Yum, thank you for this delicious food! I love you!";
    } else if (this.species == "Cat") {
        this.hunger = 0;
        this.sleepy = this.sleepy + 1;
        return "Ugh, I guess I'll eat this.";

    }
}

function nap() {
    this.awake = false;
    this.sleepy = 0;
    return "Zzzz...";
}

function wakeUp() {
    if (this.species == "Dog") {
        this.awake = true;
        this.hunger = this.hunger + 4;
        return "I'm awake! Let's eat and then play! I love you!";
    } else if (this.species == "Cat") {
        this.awake = true;
        this.hunger = this.hunger + 4;
        return "Ugh, I'm awake now. Is there anything to eat around here?";
    }

}
