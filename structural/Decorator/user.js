'use strict';

const log = require('../../util');

class User {
    constructor(name) {
        this.name = name;
    }

    say() {
        log.add("User: " + this.name);
    }

    getName() {
        return this.name;
    }
}

class DecoratedUser {
    constructor(user, street, city) {
        this.user = user;
        this.street = street;
        this.city = city;
    }

    say() {
        log.add("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    }

    get name() {
        return this.user.getName();
    }
}

const user = new User("Kelly");
user.say();

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.say();

log.show();
