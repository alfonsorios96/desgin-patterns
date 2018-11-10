'use strict';

const log = require('../../util');

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

const clickHandler = (item) => {
    log.add("fired: " + item);
};

const click = new Click();

click.subscribe(clickHandler);
click.fire('event #1');
click.unsubscribe(clickHandler);
click.fire('event #2');
click.subscribe(clickHandler);
click.fire('event #3');

log.show();
