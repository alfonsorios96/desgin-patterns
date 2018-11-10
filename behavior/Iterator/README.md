# Iterator Method

Iterator is a behavioral design pattern that lets you access the elements of an aggregate object sequentially without exposing its underlying representation.


## Problem

Collections are one of the most used data structures in programming. It is any set of objects gathered into a single container.

Most collections look like a simple list of elements. However, some of them are built on top of trees, graphs and other complex data structures. And every collection must provide a way of accessing its elements in a sequential order so that users could perform mass operations over its elements.

But how would do you traverse a complex structure sequentially? There are must be several ways to do it. For example, it might be just fine to traverse a tree depth-first today. But tomorrow you will need a breadth-first iteration. And the next week, you will need something more extreme, like a random access to collection's elements.

Adding more and more traversal algorithms to the collection gradually blurs its main responsibility, which is efficient data storage. On the other hand, some algorithms might be just too specific to a particular application's logic to live withing a generic collection class.

## How to implement in JS

```js
 
```
