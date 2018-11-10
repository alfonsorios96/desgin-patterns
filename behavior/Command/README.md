# Command Method

Command is a behavioral design pattern that lets you turn a request into stand-alone object, which can be used to parametrize objects with different requests, queue or log requests, and support undoable operations.

## Problem

Imagine that you are working on a new text editor app. You just finished creating a new  Button class, which can be used for toolbar buttons, as well as for generic buttons in dialogs.

While all these buttons may look similar, they do different things. This raises a dilemma of where to put the code for various click handlers of individual buttons. The simplest solution is to create tons of subclasses for each button and move there all of the operations that have to be executed after a button gets clicked.

But shortcomings of this idea become apparent very fast. Firstly, you end up with an enormous amount of subclasses. Secondly, the GUI code becomes awkwardly dependent on a volatile code of business logic.

And here is the ugliest part. Some operations, like copying text, could be invoked from several places. For example, you could press a button on the toolbar, or click the context menu item or just hit Ctrl+C. When the app had only buttons, the copy operations lived inside a  CopyButton subclass. But now you will have to duplicate the code of copying operation in two other places.

## How to implement in JS

```js
 
```
