class Person {
  constructor(options) {
    this.name = options.name
    this.species = options.species
    this.hair = options.hair
    this.tall = options.tall
    this.town = options.town
  }

  question(key, value) {
    if(this[key] === value) return true
    return false
  }
}

export default Person
