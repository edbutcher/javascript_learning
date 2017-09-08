var square = x =>  x * x;
console.log(square(9));

var person = {
  name: 'Andrew',
  sayHi: () => {
    console.log(arguments);           // not work right
    console.log(`Hi, ${this.name}`);  // not work right
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi, ${this.name}`);
  }
};

person.sayHi(1, 2, 3);               // not work right
person.sayHiAlt(1, 2, 3);
