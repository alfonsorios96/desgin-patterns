# Composite Method

Composite is a structural design pattern that lets you compose objects into tree structures and allow clients to work with these structures as if they were individual objects.

## Problem

The composite pattern makes sense only when your business model can be represented as a tree.

For instance, you have two objects: Product and Box. The Box can contain several  Products and a number of smaller Boxes inside. These little Boxes can also hold inside some Products or even smaller Boxes and so on.

Now, imagine that your Products and Boxes can be a part of order. How hard can it be to calculate the order total? You just take a large Box, unwrap it and see what is inside:  ProductA, ProductB, oh, another Box, let's see what inside... Before too long, you will end up in a pile of duct tape and cardboard still trying to sum-up the price.

Isn't there a better way?

## How to implement in JS

```js
 
```

See, the `screen` instance of `Screen` is using in `new Gestures(screen)` to translate the responsability (abstraction and implementation)
