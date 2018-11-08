# Abstract Factory Method

Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

## Problem
Imagine that you are creating a simulator of a furniture shop. Your code consists of:

Family of related products, say: Chair + Sofa + CoffeeTable.

1. Several variants of this family. For example, products Chair + Sofa + CoffeeTable available in these variants: IKEA, VictorianStyle, ArtDeco.

2. You need a way to create individual furniture objects so that they match other objects of the same family. Customers get quite frustrated when they receive non-matching furniture.

## How to implement in JS

```js
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
        return car;
    }
}
```
In this example; `CarFactory` is the abstract factory class that explain a return instance of other class, consider the class is returned is a element of family Car, i.e. `Boxter` class is a car.

The method `createCar` choose in function of `model` the class to be instanced.
