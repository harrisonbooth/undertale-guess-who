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
  ]
  return people;
}

export default PeopleSeeds
