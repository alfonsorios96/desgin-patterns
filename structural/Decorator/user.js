'use strict';

const log = require('../../util');

class User {
    constructor(name) {
        this.name = name;
    }

    say() {
        log.add("User: " + this.name);
    }
}

class DecoratedUser {
    constructor(user, street, city) {
        this.user = user;
        this.name = user.name;  // ensures interface stays the same
        this.street = street;
        this.city = city;
    }

    say() {
        log.add("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    }
}

const user = new User("Kelly");
user.say();

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.say();

log.show();
