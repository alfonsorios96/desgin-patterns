#Factory method
Factory method is a creational design pattern that provides an interface to create objects in the superclass, but allows the subclasses to alter the type of objects that will be created.

## Problem
"Solve the problem of creating objects without specifying their specific class.
Factory method defines a method, which should be used to create objects instead of the call to a constructor. Subclasses can overwrite this method to change the class of objects that will be created."

* It differs from other patterns in that it does not explicitly require the use of a constructor.
Instead, a Factory provides a generic interface to create objects, where we can specify the type of factory object that we want to create.
Instead of creating a component directly using the 'new' operator or via a creational constructor, a 'Factory' object is requested for a new component. The 'Factory' is informed what type of object is required and it is instantiated and returned for its use.

It is particularly useful if the process of creation of the object is complex, eg. if it depends strongly on dynamic factors or the configuration of the application.

This pattern is frequently used when we need to manage or manipulate collections of objects that are different yet have many similar characteristics.

--
Imagine that you are creating a logistics management application. The first version of your app can handle only transportation by trucks, so the bulk of your code lives in a  Truck class.

After a while, your app becomes so popular that you get tons of requests to include sea transportation as well.

Imagine that you are creating a logistics management application. The first version of your app can handle only transportation by trucks, so the bulk of your code lives in a  Truck class.

After a while, your app becomes so popular that you get tons of requests to include sea transportation as well.
--

## How to implement in JS

```js
class BallFactory {

    createBall(type) {
        let ball;
        if (type === 'football' || type === 'soccer') {
            ball = new Football();
        }
        else if (type === 'basketball') {
            ball = new Basketball();
        }
        ball.roll = () => `The ${ball._type} is rolling.`;
        return ball;
    }
}

class Football {
    constructor() {
        this._type = 'football';
    }

    kick() {
        return 'You kicked the football.';
    }
}

class Basketball {
    constructor() {
        this._type = 'basketball';
    }

    bounce() {
        return 'You bounced the basketball.';
    }
}

// creating objects
const factory = new BallFactory();
const myFootball = factory.createBall('football');
const myBasketball = factory.createBall('basketball');
console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.
console.log(myFootball.kick()); // You kicked the football.
console.log(myBasketball.bounce()); // You bounced the basketball.

```