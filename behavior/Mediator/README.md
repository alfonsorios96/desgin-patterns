# Mediator Method

Mediator is a behavioral design pattern that lets you define an object that encapsulates relations between a set of objects to make them independent of each other.

## Problem

Say you have a dialog for editing user profiles. It consists of various form fields such as  TextEdits, Checkboxes, Buttons, etc.

Some form elements have to interact with others. For instance, the "I have a dog" checkbox may show a hidden text field for entering the dog's name. Another example is the submit button that has to validate values of all fields before saving data.

By placing this logic directly into the form elements code, you make it much harder to reuse these classes in other forms of the app. For example, you can not use a checkbox inside another form, since it tightly coupled to the dog's text field. You can either use all classes or none at all.

## How to implement in JS

```js
 class Participant {
     constructor(name) {
         this.name = name;
         this.chatroom = null;
     }
 
     send(message, to) {
         this.chatroom.send(message, this, to);
     }
 
     receive(message, from) {
         log.add(from.name + " to " + this.name + ": " + message);
     }
 }
 
 class Chatroom {
     constructor() {
         this.participants = {};
     }
 
     register(participant) {
         this.participants[participant.name] = participant;
         participant.chatroom = this;
     }
 
     send(message, from, to) {
         if (to) {                      // single message
             to.receive(message, from);
         } else {                       // broadcast message
             for (const participant of this.participants) {
                 if (participant !== from) {
                     participant.receive(message, from);
                 }
             }
         }
     }
 }
```
