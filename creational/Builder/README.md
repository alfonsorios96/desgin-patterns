# Builder Pattern

This pattern is used to allow the creation of a variety of complex objects from a single source object (tipically named 'product').
The source object is composed with a variety of parts that are individually related to the creation of each complex object through a set of calls to common interfaces of the Abstract Builder Class. 

Often, the builder pattern builds the Composite pattern.

Although this is one of the most important design patterns found in programming; this is rarely found being used in JS. 

## What does it do?

It abstract the process of creation of a complex object, centralizing the process in a single point, in such a way that the same construction process can create different process representations.

## Advantages

- Allow us to vary a product's internal representation.
- Encapsulates code for construction and representation.
- Provides control over steps of construction process.
- Reduce coupling.


## Disadvantages

- Requires creating a separate ConcreteBuilder for each different type of product.
- Requires the builder classes to be mutable.
- Data members of class aren't guaranteed to be initialized.
- Dependency injection may be less supported.


## Strcuture

- Director
    - Constructs products by using the Builder's multistep interface.
- Builder <sub>_not used in JS_</sub>
    - Declarates a multistep interface for creating a complex product.
- ConcreteBuilder
    - Implements the multistep Builder interface.
    - Maintains the product through the assembly process.
    - Offers the ability to retrieve the newly created product.
- Products
    - Represent the complex objects being assembled.
    

## Example

```js
'use strict';

class Shop {
    set(builder){
        builder.step1();
        builder.step2();

        return builder.get();
    }
}

class CarBuilder {
    constructor() {
        this.car = null;
    }

    step1(){
        this.car = new Car();
    }

    step2(){
        this.car.addParts();
    }

    get(){
        return this.car;
    }
}

class TruckBuilder{
    constructor() {
        this.truck = null;
    }

    step1(){
        this.truck = new Truck();
    }

    step2(){
        this.truck.addParts();
    }

    get(){
        return this.truck;
    }
}

class Car{
    constructor() {
        this.doors = 0;
    }

    addParts(){
        this.doors = 4;
    }

    say(){
        console.log("I am a " + this.doors + "-door car");
    }
}

class Truck{
    constructor() {
        this.doors = 0;
    }

    addParts(){
        this.doors = 2;
    }

    say(){
        console.log("I am a " + this.doors + "-door truck");
    }
}

const shop = new Shop();
const carBuilder = new CarBuilder();
const truckBuilder = new TruckBuilder();
const car = shop.set(carBuilder);
const truck = shop.set(truckBuilder);

car.say();
truck.say();
```