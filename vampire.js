class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let awayFromOriginal = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      awayFromOriginal ++;
    }
    return awayFromOriginal;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal; 
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    // make an array of each vampire's ancestors
    // go through the two arrays and return the first occurance of a common value

    const thisAncestor = [];
    let currentVampire = this;

    thisAncestor.push(currentVampire);
    while (currentVampire.creator) {
      thisAncestor.push(currentVampire.creator);
      currentVampire = currentVampire.creator;
    }

    const vampireAncestor = []
    let currentVampire1 = vampire;
    vampireAncestor.push(currentVampire1);
    while (currentVampire1.creator) {
      vampireAncestor.push(currentVampire1.creator);
      currentVampire1 = currentVampire1.creator;
    }

    for (const ancestor of thisAncestor) {
      for (const pointerAncestor of vampireAncestor) {
        if (ancestor === pointerAncestor){
          return ancestor;
        }
      }
    }
  }






}

module.exports = Vampire;

