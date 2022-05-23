'use strict';


const myArray = ["a", "b", "c", "d"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2], myArray[3]);


const [ele1, ele2, ele3, ele4] = myArray;
console.log(ele1);
console.log(ele2);
console.log(ele3, ele4);

const myNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, c, ...remaining] = myNumArray;
console.log(a);
console.log(b);
console.log(c);
console.log(remaining);

const myOtherNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [x,,,y,,z, ...theRest] = myOtherNumArray;
console.log(x);
console.log(y);
console.log(z);
console.log(theRest);


console.log(myOtherNumArray);

const person = {
    firstName : "Daniel",
    lastName : "Conroy",
    age : 19, 
    jobTitle : "Trainee" 
}

let {firstName, lastName, age, jobTitle, shoeSize = 11} = person;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(jobTitle);
console.log(shoeSize);



const personAdvanced = {
    firstName : "Daniel",
    lastName : "Conroy",
    age : 19, 
    jobTitle : "Trainee",
    hobbies : {
        sport: "Golf",
        music: "most genres",
        games: "video games"
    }
}


console.log(personAdvanced.hobbies.sport);
