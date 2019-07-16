class Person {
  constructor(options) {
    this.name = options.name
    this.species = options.species
    this.hair = options.hair
    this.tall = options.tall
    this.town = options.town
    this.url = options.url
  }

  question(key, value) {
    return (this[key] === value);
  }
}

export default Person
