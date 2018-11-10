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

const Calculator = () => {
    let current = 0;
    const commands = [];

    const action = command => {
        let name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    return {
        execute: command => {
            current = command.execute(current, command.value);
            commands.push(command);
            log.add(action(command) + ": " + command.value);
        },

        undo: () => {
            let command = commands.pop();
            current = command.undo(current, command.value);
            log.add("Undo " + action(command) + ": " + command.value);
        },

        getCurrentValue: () => current
    };
};

const calculator = new Calculator();

// issue commands

calculator.execute(new AddCommand(100));
calculator.execute(new SubCommand(24));
calculator.execute(new MulCommand(6));
calculator.execute(new DivCommand(2));

// reverse last two commands

calculator.undo();
calculator.undo();

log.add("\nValue: " + calculator.getCurrentValue());
log.show();
