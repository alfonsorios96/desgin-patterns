'use strict';

class Iterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    next() {
        let element;
        if (!this.hasNext()) {
            return null;
        }
        element = this.data[this.index];
        this.index += 3;
        return element;
    }

    hasNext() {
        return this.index < this.data.length;
    }

    rewind() {
        this.index = 0;
        return this.data[this.index];
    }

    current() {
        return this.data[this.index];
    }
}


const iterator = new Iterator([1, 2, 3, 4, 5, 6]);

for (const item of iterator) {
    console.log(item.next());
}

iterator.rewind();
console.log(iterator.current());
