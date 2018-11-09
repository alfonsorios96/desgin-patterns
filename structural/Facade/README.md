# Facade Method

Facade is a structural design pattern that lets you provide a simplified interface to a complex system of classes, library or framework.


## Problem

Imagine the code that has to work with a large set of objects of some complex library or framework. You have to manually initialize all these objects, keep track of the dependencies, correct order and so on.

In the end, the business logic of your classes becomes tightly coupled to the implementation details of third party library. Such code is pretty hard to comprehend and maintain.


## How to implement in JS

```js
class Mortage {
    constructor(name) {
        this.name = name;
    }

    applyFor(amount) {
        // access multiple subsystems...
        let result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
            " for a " + amount + " mortgage";
    }
}

class Bank {
    verify(name, amount) {
        // complex logic ...
        return true;
    }
}

class Credit {
    get(name) {
        // complex logic ...
        return true;
    }
}


class Background {
    check(name) {
        // complex logic ...
        return true;
    }
}
```
