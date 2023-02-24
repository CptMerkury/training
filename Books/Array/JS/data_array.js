class Person {
    lastName;
    firstName;
    age;

    constructor(last, first, a) {
        this.lastName = last;
        this.firstName = first;
        this.age = a;
    }

    getLast() {
        return this.lastName;
    }

    displayPerson() {
        console.log(`FIRST NAME: ${this.firstName}, LAST NAME: ${this.lastName}, AGE: ${this.age}`)
    }
}

class DataArray {
    data;
    nElems;

    constructor(size) {
        this.data = new Person(size);
        this.nElems = 0;
    }

    insert(last, first, age) {
        this.data[this.nElems] = new Person(last, first, age);
        this.nElems++;
    }

    find(searchKey) {
        let i;

        for (i = 0; i < this.nElems; i++) {
            if (this.data[i].getLast() === searchKey) break;
        }

        if (i === this.nElems) {
            console.log("Can't find " + searchKey);
            return null;
        } else {
            console.log("Found " + searchKey);
            return this.data[i];
        }
    }

    delete(value) {
        let j;

        for (j = 0; j < this.nElems; j++) {
            if (value == this.data[j].getLast()) break;
        }

        if (j === this.nElems) {
            return false;
        } else {
            for (let k = j; k < this.nElems; k++) {
                this.data[k] = this.data[k + 1];
            }

            this.nElems--;
            return true;
        }

    }

    display() {        
        for (let i = 0; i < this.nElems; i++) {
            this.data[i].displayPerson();
        }
    }

}

function DataArrayApp() {
    const maxSize = 100;
    const arr = new DataArray(maxSize);

    arr.insert("Evans", "Patty", 24);
    arr.insert("Smith", "Tom", 37);
    arr.insert("Yee", "Bob", 43);
    arr.insert("Adams", "Henry", 29);
    arr.insert("Stimson", "Brad", 54);
    arr.insert("Vang", "Jose", 72);
    arr.display();

    arr.find("Stimson");
    arr.find("Simpson");
    arr.find("Adams");

    arr.delete("Yee");
    arr.delete("Stimson");
    arr.display();
}

DataArrayApp();