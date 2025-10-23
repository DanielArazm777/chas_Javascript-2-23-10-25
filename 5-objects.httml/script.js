const person = {
    studentAt: "Chas",
    name: "Daniel",
    age: "54",
    favoriteFoods: "Pasta"
}

console.log(person.name);
console.log(person.age);

person.eyeColor = "Brown"; // lägger till key: Eyecolor och value: Brown i objektet Person //

const dogs = {
    labrador: {
        adult: {
            name: "Marley"
        },
        puppy: {
            name: "Buster"
        
        
        }
    }
}

console.log(dogs.labrador.puppy.name); // vi hämtar ut värdet Buster ifrån det nästlade objektet //