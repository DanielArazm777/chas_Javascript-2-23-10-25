
  const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"];


    const doggieWalks = dogs.maps((dogName) => { //ändrade foreach till map//
    return "The " + dogName + " needs to go for a walk!"
  });

const shoutyDogNames = dogs.maps(dogName => dogName.toUpperCase) => { //ändrade så det blir uppercase  sen skriver vi ut det med console.log //
    console.log(shoutyDogNames);
}