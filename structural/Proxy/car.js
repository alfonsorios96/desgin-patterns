'use strict';

class Car {
    drive() {
        return "driving";
    };
}

class ProxyCar {
    constructor(driver) {
        this.driver = driver;
    }

    drive() {
        if (this.driver.age >= 18) {
            const car = new Car();
            return car.drive();
        } else {
            return 'You can not drive because too young yet';
        }
    }
}

class Driver {
    constructor(age) {
        this.age = age;
    }
}


const driver = new ProxyCar();
console.log(driver.drive());
