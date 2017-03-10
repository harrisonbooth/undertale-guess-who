import Person from './Person.js'

const PeopleSeeds = function() {
  let people = [
    new Person({
      name: "Sans",
      species: "skeleton",
      hair: "none",
      tall: false,
      town: "snowdin"
    }),

    new Person({
      name: "Mettaton",
      species: "robot",
      hair: "none",
      tall: true,
      town: "hotlands"
    }),

    new Person({
      name: "Asgore",
      species: "goat",
      hair: "blonde",
      tall: false,
      town: "new home"
    }),
  ]
  return people;
}

export default PeopleSeeds
