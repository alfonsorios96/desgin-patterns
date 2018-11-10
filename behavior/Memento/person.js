'use strict';

class Person {
    constructor(name, street, city, state) {
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
    }

    hydrate() {
        return JSON.stringify(this);
    }

    dehydrate(memento) {
        const m = JSON.parse(memento);
        this.name = m.name;
        this.street = m.street;
        this.city = m.city;
        this.state = m.state;
    }
}

class CareTaker {
    constructor() {
        this.mementos = {};
    }

    add(key, memento) {
        this.mementos[key] = memento;
    }

    get(key) {
        return this.mementos[key];
    }
}
