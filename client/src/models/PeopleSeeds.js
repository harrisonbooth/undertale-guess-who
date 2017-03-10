import Person from './Person.js'

const PeopleSeeds = function() {
  let people = [
    new Person({
      name: "Sans",
      species: "skeleton",
      hair: "none",
      tall: "no",
      town: "snowdin"
    }),

    new Person({
      name: "Mettaton",
      species: "robot",
      hair: "none",
      tall: "no",
      town: "hotlands"
    }),

    new Person({
      name: "Asgore",
      species: "goat",
      hair: "blonde",
      tall: "yes",
      town: "new home"
    }),
  ]
  return people;
}

export default PeopleSeeds
