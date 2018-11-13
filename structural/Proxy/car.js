'use strict';

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
