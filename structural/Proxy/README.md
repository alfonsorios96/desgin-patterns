#Proxy method
Structural design pattern that acts as a substitute or placeholder for another object to control access to it.

This pattern suggests creating a subtitle class that has the same interface as an original service object. Once the request of a client is received, the proxy object creates an instance of a service object and delegates all the real work.

## Problem
It is used in situations where a target object is subject to restrictions and it is possible that it can not handle all its responsibility efficiently. A proxy, in this case, is generally the same interface as the client and adds a level of indirect addressing to allow controlled access to the object to avoid undue pressure on it.

The advantage of doing this is that you can add code within a proxy object that could be executed only before (or after) calling the same method on a real-service object. And thanks to the same interface that the proxy shares with the service object, a code that accepts service objects could be passed.
--
Why would you control the access to an object? Here is an example: you have a powerful object that loves to consume vast amounts of system resources. You need it from time to time, but not always.

Thus, the object could probably be created not at the program start, but rather when it is actually needed. Each client of this object would need to have some sort of deferred initialization code. Obviously, it leads to a lot of duplication.

In an ideal world, we would put this code directly into the object's class, but that is not always possible. For instance, the class may reside in a closed 3rd-party library.
--
## How to implement in JS

```js
class Car {
    drive() {
        return "driving";
    };
}

class CarProxy {
    constructor(driver) {
        this.driver = driver;
    }
    drive() {
        return  ( this.driver.age < 18) ? "too young to drive" : new Car().drive();
    };
}

class Driver {
    constructor(age) {
        this.age = age;
    }
}


const driver = new CarProxy(new Driver(10));
console.log(driver.drive());

```