'use strict';


class File {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }
}

class Directory {
    constructor(name) {
        this.name = name;
        this.files = [];
    }

    add(file) {
        this.files.push(file);
    }

    remove(file) {
        for (const index in this.files) {
            if (this.files[index] === file) {
                this.files.splice(index, 1);
                return true;
            }
        }
        return false;
    }

    getFileName(index) {
        return this.files[index].name;
    }

    display() {
        console.log(this.name);
        for (let i = 0, length = this.files.length; i < length; i++) {
            console.log("   ", this.getFileName(i));
        }
    }
}

const directoryOne = new Directory('Directory One');
const directoryTwo = new Directory('Directory Two');
const directoryThree = new Directory('Directory Three');

const fileOne = new File('File One');
const fileTwo = new File('File Two');
const fileThree = new File('File Three');

directoryOne.add(fileOne);
directoryOne.add(fileTwo);

directoryTwo.add(fileOne);

directoryThree.add(fileOne);
directoryThree.add(fileTwo);
directoryThree.add(fileThree);

directoryOne.display();
directoryTwo.display();
directoryThree.display();
