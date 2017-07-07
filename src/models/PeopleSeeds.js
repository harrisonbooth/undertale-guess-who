import Person from './Person.js'

const PeopleSeeds = function() {
  let people = [
    new Person({
      name: "Sans",
      species: "skeleton",
      hair: "none",
      tall: "no",
      town: "snowdin",
      url: "http://2static.fjcdn.com/pictures/Undertale_bd164e_5722021.jpg"
    }),

    new Person({
      name: "Mettaton",
      species: "robot",
      hair: "black",
      tall: "yes",
      town: "hotlands",
      url: "http://2static.fjcdn.com/pictures/Undertale_70dbd6_5722021.jpg"
    }),

    new Person({
      name: "Asgore",
      species: "goat",
      hair: "blonde",
      tall: "yes",
      town: "new home",
      url: "http://2static.fjcdn.com/pictures/Undertale_36019c_5722021.jpg"
    }),

    new Person({
      name: "Toriel",
      species: "goat",
      hair: "white",
      tall: "yes",
      town: "ruins",
      url: "http://2static.fjcdn.com/pictures/Undertale_faed25_5722021.jpg"
    }),

    new Person({
      name: "Papyrus",
      species: "skeleton",
      hair: "none",
      tall: "yes",
      town: "snowdin",
      url: "http://2static.fjcdn.com/pictures/Undertale_dfccc6_5722021.jpg"
    }),

    new Person({
      name: "Undyne",
      species: "fish",
      hair: "red",
      tall: "yes",
      town: "waterfall",
      url: "http://2static.fjcdn.com/pictures/Undertale_0ef151_5722021.jpg"
    }),

    new Person({
      name: "Chara",
      species: "human",
      hair: "brown",
      tall: "no",
      town: "overworld",
      url: "http://2static.fjcdn.com/pictures/Undertale_ea6022_5722021.jpg"
    }),

    new Person({
      name: "Frisk",
      species: "human",
      hair: "light-brown",
      tall: "no",
      town: "overworld",
      url: "https://s-media-cache-ak0.pinimg.com/736x/00/8f/18/008f18e1ee31630d7bfba9d6e592fa1d.jpg"
    }),

    new Person({
      name: "Asriel",
      species: "goat",
      hair: "white",
      tall: "yes",
      town: "new home",
      url: "http://2static.fjcdn.com/pictures/Undertale_ef9f57_5722021.jpg"
    }),

    new Person({
      name: "Doggo",
      species: "dog",
      hair: "white",
      tall: "no",
      town: "snowdin",
      url: "http://2static.fjcdn.com/pictures/Undertale_8548ea_5722021.jpg"
    }),

    new Person({
      name: "Greater Dog",
      species: "dog",
      hair: "white",
      tall: "yes",
      town: "snowdin",
      url: "http://2static.fjcdn.com/pictures/Undertale_597f01_5722021.jpg"
    }),
  ]
  return people;
}

export default PeopleSeeds
