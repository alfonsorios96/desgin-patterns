'use strict';

const person = {
    name: 'Giovanni',
    age: '25',
    printAge: () => {
        console.log('Mi age es: ' + this.age);
    }
};

const Heredapersona = Object.create(person);

Heredapersona.age = 50;

console.log('person', person);
console.log('Heredapersona', Heredapersona);
