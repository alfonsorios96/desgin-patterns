# Observer Method

Observer is a behavioral design pattern that lets you define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

## Problem

Imagine that you have two objects, a Customer and a Store. The store is about to receive a large shipment of a new product, which is very interesting to some customers.

While customers could visit the store every day to check the availability of product, most of these trips would be pointless while the product is still on the way.

On the other hands, the store could send tons of emails (spam) to all customers each time it receives a new shipment. But this would upset other customers, that do not care about the new product.

Thus, we have a conflict: either customer wastes resources on periodic checks or the store itself wastes resources notifying wrong customers.

## How to implement in JS

```js
class Click {
    constructor() {
        this.handlers = [];
    }

    subscribe(callback) {
        this.handlers.push(callback);
    }

    unsubscribe(callback) {
        this.handlers = this.handlers.filter(item => item !== callback);
    }
    
    fire(o, thisObject) {
        const scope = thisObject || window;
        for (const handler of this.handlers) {
            handler.call(scope, o);
        }
    }

}
```
