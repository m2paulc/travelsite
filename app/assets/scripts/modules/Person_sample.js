class Person {
  constructor(fullName, favColor) {
  this.name = fullName;
  this.color = favColor;
}
  greet() {
    console.log("Hi there " + this.name + ", You're favorite color is: " + this.color);
  }
}

// old js ecma5
// module.exports = Person;

// ES6 version
export default Person;