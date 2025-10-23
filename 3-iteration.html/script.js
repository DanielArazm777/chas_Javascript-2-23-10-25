const dogs = ["Labrador", "Beagle", "Poodle", "Chihuahua"] // skapar ena array //

/* Vi skapar en fast variabel som heter printDogName, dogName fungerar just nu som en tom låda med lappen dogName 
som snart kommer få ett namn. */
const printDogName = (dogName) => {
    console.log("The " + dogName + "barks.") // vi ber datorn skriva ut The ... barks//
}

dogs.forEach(printDogName); // vi skriver ut alla hundar i arrayen .dogs med foreach, och med vår inbyggda funktion "The (dogname) barks"


// TASK2  //

const printDogNameUppercase =  (dogName) => {
    console.log("THE " + dogName.toUpperCase() + "BARKS"); // .toUpperCase gör att att arrayerna med hundarna visas med UPPERCASE//
}

dogs.forEach(printDogNameUppercase);

// TASK 3 //
// istället för att skapa en funktion så kör vi foreach direkt utan att skapa funktionen. //
dogs.forEach(dogName => {
    console.log("The " + dogName + "needs to go for a walk");
});