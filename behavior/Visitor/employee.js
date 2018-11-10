'use strict';

const log = require('../../util');

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

const employees = [
    new Employee("John", 10000, 10),
    new Employee("Mary", 20000, 21),
    new Employee("Boss", 250000, 51)
];

const visitorSalary = new ExtraSalary();
const visitorVacation = new ExtraVacation();

for (const employee of employees) {
    employee.accept(visitorSalary);
    employee.accept(visitorVacation);
    log.add(employee.getName() + ": $" + employee.getSalary() +
        " and " + employee.getVacation() + " vacation days");
}

log.show();
