# Chain of Responsibility
The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request. This pattern is essentially a linear search for an object that can handle a particular request.

An example of a chain-of-responsibility is event-bubbling in which an event propagates through a series of nested controls one of which may choose to handle the event.

The Chain of Responsiblity patterns is related to the Chaining Pattern which is frequently used in JavaScript (jQuery makes extensive use of this pattern).

# Participants
The objects participating in this pattern are:
- Client -- In sample code: Request initiates the request to a chain of handler objects
- Handler -- In sample code: Request.get() method defines an interface for handling the requests implements the successor link (returning 'this')


