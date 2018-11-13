# Memento Method

Memento is a behavioral design pattern that lets you capture the object's internal state without exposing its internal structure, so that the object can be returned to this state later.

## Problem

Imagine that you are writing a text editor. The core logic resides in the main Editor class. Other features, such as different text formattings, inline images, etc. live in separate command-centric classes.

At some point, you decide to make all user actions reversible. Or in other words, add the "undo" feature. To implement it, you will need to save the state of the Editor before executing any operation. Later, if the user decides to revert some of his actions, the program will take a snapshot from the history and restore the Editor's past state.

In order to copy the state of an object, you have to go over its fields and copy their values. But an object must have quite relaxed access to its contents, to let other objects peek inside and copy its contents, including sensible data.

While this approach would simply do the job and allow every class to produce the backup of editor's state at will, it is far from the ideal. At some point, you might decide to refactor the  Editor class and add or remove some of its fields. This would require changing all other classes that have been messing around with Editor's fields.

## How to implement in JS

```js
 class Person {
     constructor(name, street, city, state) {
         this.name = name;
         this.street = street;
         this.city = city;
         this.state = state;
     }
 
     hydrate() {
         return JSON.stringify(this);
     }
 
     dehydrate(memento) {
         const m = JSON.parse(memento);
         this.name = m.name;
         this.street = m.street;
         this.city = m.city;
         this.state = m.state;
     }
 }
 
 class CareTaker {
     constructor() {
         this.mementos = {};
     }
 
     add(key, memento) {
         this.mementos[key] = memento;
     }
 
     get(key) {
         return this.mementos[key];
     }
 }

```
