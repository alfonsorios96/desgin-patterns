# Visitor Method

Visitor is a behavioral design pattern that lets you define a new operation without changing the classes of the objects on which it operates.

## Problem

Your team develops an app that works with geographic information structured as a graph. Nodes of the graph represent not only cities and towns but also many other types of locations, such as industries, sightseeings, etc. Nodes connected with each other if there is a road between them. Under the hood, each node is an object, and each node type represented by its own class.

You have got a task to make it possible to export the graph into XML. The job looked easy at first. You would need to add an export method for each node type and then go over the graph, executing this method for each node. The solution was not only simple but also elegant, since you leveraged the polymorphism to avoid coupling to concrete node classes.

But unfortunately, the system architect refused to allow you to alter existing node classes. The code was already in production and nobody wanted to risk breaking it.

In addition, he questioned whether the XML export makes sense in node classes in first place. The primary job of these classes is to work with geodata. The export behavior would look alien there.

There was another reason for the refusal. In close future, someone from the marketing department may ask you to change the export to a different format or add some other weird feature. That would force you to change that precious code again.


## How to implement in JS

```js
class Employee {
    constructor(name, salary, vacation) {
        this.name = name;
        this.salary = salary;
        this.vacation = vacation;
    }

    accept(visitor) {
        visitor.visit(this);
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getVacation() {
        return this.vacation;
    }

    setVacation(vacation) {
        this.vacation = vacation;
    }
}

class ExtraSalary {
    visit(employee) {
        employee.setSalary(employee.getSalary() * 1.1);
    }
}

class ExtraVacation {
    visit(empolyee) {
        empolyee.setVacation(empolyee.getVacation() + 2);
    }
}

```
