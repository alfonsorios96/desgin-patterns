# State Method

State is a behavioral design pattern that allows an object to alter its behavior when its internal state changes. The object will appear to change its class.

## Problem

The State pattern is closely related to the concept of Finite State Machine.

Its main idea is that a program can be in one of the several states, which follow each other. The number of states and possible transitions between them is predefined and finite. Depending on the current state, the program behaves differently in response to the same events.

The similar approach can be applied to objects. For instance, the Document object can be in one of the three states: Draft, Moderations and Published. In each state, the publish method will work in a different way:

In the first case, it will move the document to moderation.
In the second case, it will make the document public, but only if the current user is the administrator.
In the third case, it will not do anything at all.
State machines are usually implemented with lots of conditional operators, such as if or  switch, that check current state and perform appropriate behavior. Even if you have just heard about state machines for the first time, you had probably implemented it at least once. Does the following code structure look familiar?

```js
class Document
    string state;
    // ...
    method publish() {
        switch (state) {
            "draft":
                state = "moderation";
                break;
            "moderation":
                if (currentUser.role == 'admin')
                    state = "published"
                break;
            "published":
                // Do nothing.
        }
    }
    // ...
```


## How to implement in JS

```js

```
