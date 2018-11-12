#Strategy method
Strategy method is a behavior design pattern that allows encapsulation of alternative algorithms for a particular task. It defines a family of algorithms and encapsulates them in such a way that they are interchangeable at runtime without the interference or knowledge of the client.
Using this pattern we can exchange the implementation to use.

## Problem
--
One day you decided to create a navigation app for travelers. The app was centered around the beautiful-looking map, allowing users to orient quickly in any city. One of the most requested features of the app was automatic route planner, so you decided to devote it a special attention. Users would be able to enter a desired destination, tracking the fastest route on the screen.

While the first version of the app could only build routes over roads, it suited car travelers perfectly. But apparently, not everybody likes to drive on their vacation. So with the next update, you added an option to plan walking routes. Right after that, you added one more option, which allowed users to build routes relying on public transportation.

But that was only beginning. In the nearest future you planned to add route builder for cyclists. And later on, another option for building routes along sight seeings.

While from the business perspective the app was a success, the technical part caused you a lot of headaches.

Each time you added a new routing algorithm, the main Map class had grown twice its size. At some point, the beast became too hard to maintain.

Any change to search algorithms, such as fixing a bug or slightly tuning the algorithm's behavior, affected the whole class, increasing the chance of making an error in already working code.

Finally, the teamwork became inefficient. Your team mates, which you hired right after the successful release, complain that they spend too much time resolving merge conflicts in the code of new features since they all related to just one large class.
--
## How to implement in JS

```js
///encapsulation
class Commute {
  travel(transport) {
    return transport.travelTime();
  }
}

class Vehicle {
  travelTime() {
    return this._timeTaken;
  }
}

// strategy 1
class Bus extends Vehicle {
  constructor() {
    super();
    this._timeTaken = 10;
  }
}

// strategy 2
class Taxi extends Vehicle {
  constructor() {
    super();
    this._timeTaken = 5;
  }
}

// strategy 3
class PersonalCar extends Vehicle {
  constructor() {
    super();
    this._timeTaken = 3;
  }
}

// usage
const commute = new Commute();

console.log(commute.travel(new Taxi())); // 5
console.log(commute.travel(new Bus())); // 10

```