'use strict';

class CarFactory {
    createCar(model) {
        let car;

        switch (model) {
            case 'Cayman':
                car = new Cayman();
                break;
            case 'Boxster':
                car = new Boxster();
                break;
            case 'Panamera':
                car = new Panamera();
                break;
            default:
                car = new Cayman();
                break;
        }

        if (typeof car.printModel === 'undefined') {
            car.printModel = () => {
                console.log('This car model is:', car.model);
            }
        }

        return car;
    }
}

class Cayman {
    constructor() {
        this.model = 'Cayman';
    }

    createDoor(side) {
        return new CaymanDoor(side);
    }

    createHood() {
        return new CaymanHood();
    }
}

class Boxster {
    constructor() {
        this.model = 'Boxster';
    }

    createDoor(side) {
        return new BoxsterDoor(side);
    }

    createHood() {
        return new BoxsterHood();
    }
}

class Panamera {
    constructor() {
        this.model = 'Panamera';
    }

    createDoor(side) {
        return new PanameraDoor(side);
    }

    createHood() {
        return new PanameraHood();
    }
}

class CaymanDoor {
    constructor(side) {
        this.side = side;
    }

    build() {
        console.log(`Build a ${this.side} door for Cayman`);
    }
}

class BoxsterDoor {
    constructor(side) {
        this.side = side;
    }

    build() {
        console.log(`Build a ${this.side} door for Boxster`);
    }
}

class PanameraDoor {
    constructor(side) {
        this.side = side;
    }

    build() {
        console.log(`Build a ${this.side} door for Panamera`);
    }
}

class CaymanHood {
    constructor(side) {
        this.side = side;
    }

    build() {
        console.log(`Build a hood for Cayman`);
    }
}

class BoxsterHood {
    constructor(side) {
        this.side = side;
    }

    build() {
        console.log(`Build a hood for Boxster`);
    }
}

class PanameraHood {
    build() {
        console.log(`Build a hood for Panamera`);
    }
}

const abstractFactory = new CarFactory();

const boxsterCar = abstractFactory.createCar('Panamera');

boxsterCar.printModel();

boxsterCar.createDoor('right').build();
boxsterCar.createDoor('left').build();

boxsterCar.createHood().build();
