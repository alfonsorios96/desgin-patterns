# Decorator Method

Decorator is a structural design pattern that lets you attach new behaviors to objects by placing them inside wrapper objects that contain these behaviors.

## Problem

You have to add and remove responsibilities from an object dynamically, but do it in a way so that it stay compatible with the rest of application's code.

Inheritance is the first solution that comes to mind when you need to extend class behaviors. However, the inheritance is static. You can not add new subclasses to a program when it is already compiled and executed.


## How to implement in JS

```js
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
```
