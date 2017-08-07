import Person from './Person.js'

const PeopleSeeds = function() {
  let people = [
    new Person({
      name: "Sans",
      species: "skeleton",
      hair: "none",
      tall: "no",
      town: "snowdin",
      url: "./build/images/sans.jpg"
    }),

    new Person({
      name: "Mettaton",
      species: "robot",
      hair: "black",
      tall: "yes",
      town: "hotlands",
      url: "./build/images/mettaton.jpg"
    }),

    new Person({
      name: "Asgore",
      species: "goat",
      hair: "blonde",
      tall: "yes",
      town: "new home",
      url: "./build/images/asgore.jpg"
    }),

    new Person({
      name: "Toriel",
      species: "goat",
      hair: "white",
      tall: "yes",
      town: "ruins",
      url: "./build/images/toriel.jpg"
    }),

    new Person({
      name: "Papyrus",
      species: "skeleton",
      hair: "none",
      tall: "yes",
      town: "snowdin",
      url: "./build/images/papyrus.jpg"
    }),

    new Person({
      name: "Undyne",
      species: "fish",
      hair: "red",
      tall: "yes",
      town: "waterfall",
      url: "./build/images/undyne.jpg"
    }),

    new Person({
      name: "Chara",
      species: "human",
      hair: "brown",
      tall: "no",
      town: "overworld",
      url: "./build/images/chara.jpg"
    }),

    new Person({
      name: "Frisk",
      species: "human",
      hair: "light-brown",
      tall: "no",
      town: "overworld",
      url: "./build/images/frisk.jpg"
    }),

    new Person({
      name: "Asriel",
      species: "goat",
      hair: "white",
      tall: "yes",
      town: "new home",
      url: "./build/images/asriel.jpg"
    }),

    new Person({
      name: "Doggo",
      species: "dog",
      hair: "white",
      tall: "no",
      town: "snowdin",
      url: "./build/images/two-of-swords.jpg"
    }),

    new Person({
      name: "Greater Dog",
      species: "dog",
      hair: "white",
      tall: "yes",
      town: "snowdin",
      url: "./build/images/greater-dog.jpg"
    }),
  ]
  return people;
}

export default PeopleSeeds
