var $ = require("jquery");
// old version es
// var Person = require("./modules/Person");

// ES6 version
import Person from "./modules/Person";

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes");
  }
}

alert("This is a testing ABC");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

$("h1").remove();