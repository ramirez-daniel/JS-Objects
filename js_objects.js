function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = this.length * this.length * this.length;
    this.density = this.mass / this.volume;
    this.surfaceArea = this.length * this.length * 6;
}


function Person(firstname, lastname, birthdate) {
    var today = new Date();
    var birthday = new Date(birthdate);
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = new Date(birthdate);
    this.sayHi = function () {
    var today = new Date();
    var hour = today.getHours();
    var timegreeting;
    if (hour <= 5) {
        timegreeting = "What are you doing dude? Go to sleep.";
    } else if (hour > 5 && hour < 12) {
        timegreeting = "Good morning, good sir.";
    } else if (hour >= 12 && hour < 16) {
        timegreeting = "Good afternoon, good sir.";
    } else if (hour >= 16 && hour <= 22) {
        timegreeting = "Good evening, good sir.";
    } else {
        timegreeting = "Good night.";
    }
    return timegreeting;
}
    this.age = function() {
    var bday = new Date(birthdate);
    var today = new Date();
    var nextbday = new Date((birthdate.getMonth() + 1) / (birthdate.getDate()) / (today.getFullYear()) );
    var age = today.getFullYear() - bday.getFullYear();
    if (nextbday.Time() > today.getTime()){
        age = age--;
    }
    return age;
}
    this.getSign = function(date) {
var birthdate = new Date(date);
    var month = birthdate.getMonth() + 1;
    var day = birthdate.getDate();
    var sign;
    if (month == 1 || month == 2){
        if ((day >= 20 && month == 1) || (day <= 18 && month == 2)){
            sign = "Aquarius";
        }
    }
    else if (month == 2 || month == 3){
        if ((day >= 19 && month == 2) || (day <= 20 && month == 3)){
            sign = "Pisces";
        }
    }
    else if (month == 3 || month == 4){
        if ((day >= 21 && month == 3) || (day <= 19 && month == 4)){
            sign = "Aries";
        }
    }
   else if (month == 4 || month == 5){
        if ((day >= 20 && month == 4) || (day <= 20 && month == 5)){
            sign = "Taurus";
        }
    }
   else if (month == 5 || month == 6){
        if ((day >= 21 && month == 5) || (day <= 20 && month == 6)){
            sign = "Gemini";
        }
    }
     else if (month == 6 || month == 7){
        if ((day >= 21 && month == 6) || (day <= 22 && month == 7)){
            sign = "ur cancerous";
        }
    }
    else if (month == 7 || month == 8){
        if ((day >= 23 && month == 7) || (day <= 22 && month == 8)){
            sign = "Leo";
        }
    }
     else if (month == 8 || month == 9){
        if ((day >= 23 && month == 8) || (day <= 22 && month == 9)){
            sign = "Virgo";
        }
    }
     else if (month == 9 || month == 10){
        if ((day >= 23 && month == 9) || (day <= 22 && month == 10)){
            sign = "Libra";
        }
    }
     else if (month == 10 || month == 11){
        if ((day >= 23 && month == 10) || (day <= 21 && month == 11)){
            sign = "Scorpio";
        }
    }
     else if (month == 11 || month == 12){
        if ((day >= 22 && month == 11) || (day <= 21 && month == 12)){
            sign = "Sagittarius";
        }
    }
     else if (month == 12 || month == 1){
        if ((day >= 22 && month == 12) || (day <= 19 && month == 1)){
            sign = "Capricorn";
        }
    }
    return sign;
}

function Pet(name, species, sleepy, hunger, awake) {
    this.name = name;
    this.species = species;
    this.sleepy = sleepy;
    this.hunger = hunger;
    this.awake = awake;
    this.speak = function() {
        if (this.species === "Dog") {
        return "Woof! That means I love you!";
        return this.hunger = 0;
        return this.sleepy = this.sleepy + 1;
    } else if (this.species === "Cat") {
        return "Ugh. Meow.";
        this.hunger = 0;
        this.sleepy = this.sleepy + 1;
    } else {
        "";
    }
}
    this.eat = function() {
         if (this.species === "Dog") {
        "Nom nom nom nom. Yum, thank you for this delicious food! I love you!"
        this.hunger = 0;
        this.sleepiness = ++;
    } else if (this.species === "Cat") {
        "Ugh, I guess I'll eat this."
        this.hunger = 0;
        this.sleepiness = ++;
    }
}
    this.nap = function() {
        return "Zzzz...";
        this.sleepy = 0;
        this.awake = false;
    }
    this.wakeUp = function() {
       if (this.species === "Dog") {
        return "I'm awake! Let's eat and then play! I love you!"
        this.awake = true;
        this.hunger = 4;
    } else if (this.species === "Cat") {
        return "Ugh, I'm awake now. Is there anything to eat around here?"
        this.awake = true;
        this.hunger = 4;
    }
}

}
