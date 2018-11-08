# Singleton Method

Singleton is a creational design pattern that lets you ensure that a class has only one instance and provide a global access point to this instance.

## Problem

Singleton solves two problems at the time (violating Single Responsibility Principle):

1. **Ensures that a class has only a single instance.** The most common reason for this is to control some shared resource, for example, database.

Imagine that you had created an object, and after a while, tried to create a new one. In this case, you would want to receive the old object, instead of creating a new instance.

It can not be done with a regular constructor since every constructor call always returns a new object by design.

2. **Provides global access point to that instance.** Sound like a global variable, right? But you can not make a read-only global variable. Anyone who can access it can also replace its value.

There is another side of this problem: you do not want the code which solves the previous problem to be scattered all over your program. It is much better to have it within one class, especially if rest of your code already depends on that class.

## How to implement in JS

```js
class UserStore {
    constructor() {
        if (!UserStore.instance) {
            this._data = [];
            UserStore.instance = this;
        }

        return UserStore.instance;
    }
}

const instance = new UserStore();
Object.freeze(instance);
```
In this example; `UserStore` is the singleton class.

The `constructor` validates if the `UserStore.instance` exists, and if not, then created else return itself.

Note, `Object.freeze()` is setting to only-read the instance, this will prevent the object could be modify in the future.
