# Bridge Method

Bridge is a structural design pattern that lets you split a giant class or a set of closely related classes into two separate hierarchies, abstraction and implementation, which can be developed independently of each other.

## Problem

Abstraction? Implementation? Sound scary? Let's consider a simple example for starters.

Say, you have a geometric Shape class with a pair of subclasses: Circle and Square. You want to extend this hierarchy to incorporate colors by creating Red and Blue shapes subclasses. But since you already have subclasses, you need to create 4 class combinations such as BlueCircle and RedSquare.

## How to implement in JS

```js

```

