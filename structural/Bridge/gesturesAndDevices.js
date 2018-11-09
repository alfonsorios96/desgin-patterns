'use strict';

const log = require('../../util');

// input devices

class Gestures {
    constructor(output) {
        this.output = output;
    }

    tap() {
        this.output.click();
    }

    swipe() {
        this.output.move();
    }

    pan() {
        this.output.drag();
    }

    pinch() {
        this.output.zoom();
    }
}

class Mouse {
    constructor(output) {
        this.output = output;
    }

    click() {
        this.output.click();
    }

    move() {
        this.output.move();
    }

    down() {
        this.output.drag();
    }

    wheel() {
        this.output.zoom();
    }
}

// output devices

class Screen {
    click() {
        log.add("Screen select");
    }

    move() {
        log.add("Screen move");
    }

    drag() {
        log.add("Screen drag");
    }

    zoom() {
        log.add("Screen zoom in");
    }
}

class Audio {
    click() {
        log.add("Sound oink");
    }

    move() {
        log.add("Sound waves");
    }

    drag() {
        log.add("Sound screetch");
    }

    zoom() {
        log.add("Sound volume up");
    }
}


(() => {
    const screen = new Screen();
    const audio = new Audio();

    const hand = new Gestures(screen);
    const mouse = new Mouse(audio);

    hand.tap();
    hand.swipe();
    hand.pinch();

    mouse.click();
    mouse.move();
    mouse.wheel();

    log.show();
})();
