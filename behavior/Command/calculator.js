'use strict';

const log = require('../../util');

const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x - y;
};
const mul = (x, y) => {
    return x * y;
};
const div = (x, y) => {
    return x / y;
};

class Command {
    constructor(execute, undo, value) {
        this.execute = execute;
        this.undo = undo;
        this.value = value;
    }
}

const AddCommand = value => new Command(add, sub, value);

const SubCommand = value => new Command(sub, add, value);

const MulCommand = value => new Command(mul, div, value);

const DivCommand = value => new Command(div, mul, value);

class Calculator {
    constructor() {
        this.current = 0;
        this.commands = [];
    }

    execute(command) {
        this.current = command.execute(this.current, command.value);
        this.commands.push(command);
    }

    undo() {
        let command = this.commands.pop();
        this.current = command.undo(this.current, command.value);
    }

    getCurrentValue() {
        return this.current;
    }
}

const calculator = new Calculator();

// issue commands

calculator.execute(AddCommand(100));
calculator.execute(SubCommand(24));
calculator.execute(MulCommand(6));
calculator.execute(DivCommand(2));

// reverse last two commands

calculator.undo();
calculator.undo();

log.add("\nValue: " + calculator.getCurrentValue());
log.show();
