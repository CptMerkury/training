class Person {
    #lastName;
    #firstName;
    #age;

    constructor(last, first, a) {
        this.#lastName = last;
        this.#firstName = first;
        this.#age = a;
    }

    #getLast() {
        return this.#lastName;
    }

    #getFirst() {
        return this.#firstName;
    }

    getAge() {
        return this.#age;
    }

    displayPerson() {
        console.log(`FIRST NAME: ${this.#getFirst()}, LAST NAME: ${this.#getLast()}, #age: ${this.getAge()}`)
    }

    getNameInfo(field) {
        switch (field) {
            case "Last Name":
                return this.#getLast().toLowerCase();
            case "First Name":
                return this.#getFirst().toLowerCase();
        }
    }

}

class DataSort {
    #data;
    #nElems;

    constructor(size) {
        this.#data = new Person(size);
        this.#nElems = 0;
    }

    #bubbleSort(sortField) {
        let outer;
        let inner;
        const tField = sortField === "#age";

        for (outer = this.#nElems - 1; outer > 0; outer--) {
            for (inner = 0; inner < outer; inner++) {
                if (tField
                    ? this.#data[inner].getAge() > this.#data[inner + 1].getAge()
                    : this.#data[inner].getNameInfo(sortField).localeCompare(this.#data[inner + 1].getNameInfo(sortField)) > 0) {

                    let temp = this.#data[inner];
                    this.#data[inner] = this.#data[inner + 1]
                    this.#data[inner + 1] = temp;
                }
            }
        }
    }

    #selectSort(sortField) {
        let outer;
        let inner;
        let min;
        const tField = sortField === "#age";

        for (outer = 0; outer < this.#nElems - 1; outer++) {
            min = outer;
            for (inner = outer + 1; inner < this.#nElems; inner++) {
                if (tField
                    ? this.#data[inner].getAge() < this.#data[min].getAge()
                    : this.#data[inner].getNameInfo(sortField).localeCompare(this.#data[min].getNameInfo(sortField)) < 0) {

                    min = inner;
                    let temp = this.#data[outer];
                    this.#data[outer] = this.#data[min];
                    this.#data[min] = temp;
                }
            }
        }
    }

    #insertSort(sortField) {
        let outer;
        let inner;
        const tField = sortField === "#age";

        for (outer = 1; outer < this.#nElems; outer++) {
            let temp = this.#data[outer]
            inner = outer;

            while (tField
                ? inner > 0 && this.#data[inner - 1].getAge() >= temp.getAge()
                : inner > 0 && this.#data[inner - 1].getNameInfo(sortField).localeCompare(temp.getNameInfo(sortField)) > 0) {

                this.#data[inner] = this.#data[inner - 1]
                --inner;
            }

            this.#data[inner] = temp
        }
    }

    sortedData(sortedMethod, sortedField) {
        switch (sortedMethod) {
            case "Bubble":
                this.#bubbleSort(sortedField);
                break;
            case "Select":
                this.#selectSort(sortedField);
                break;
            default:
            case "Insert":
                this.#insertSort(sortedField);
                break;
        }
    }

    insert(last, first, age) {
        this.#data[this.#nElems] = new Person(last, first, age);
        this.#nElems++;
    }

    display() {
        for (let i = 0; i < this.#nElems; i++) {
            this.#data[i].displayPerson();
        }
    }

    find(onField, value) {
        let i;
        const tField = onField === '#age';

        for (i = 0; i < this.#nElems; i++) {
            if (tField ? value == this.#data[i].getAge() : value.toLowerCase() === this.#data[i].getNameInfo(onField)) break;
        }

        if (i === this.#nElems) {
            console.log("Can't find " + value);
            return null;
        } else {
            console.log("Found " + value);
            return this.#data[i];
        }
    }

    delete(onField, value) {
        let j;
        const tField = onField === '#age';

        for (j = 0; j < this.#nElems; j++) {
            if (tField ? value == this.#data[j].getAge() : value === this.#data[j].getNameInfo(onField)) break;
        }

        if (j === this.#nElems) {
            return false;
        } else {
            for (let k = j; k < this.#nElems; k++) {
                this.#data[k] = this.#data[k + 1];
            }

            this.#nElems--;
            return true;
        }
    }
}

function DataSortApp() {
    const maxSize = 100;
    const arr = new DataSort(maxSize);

    arr.insert("Evans", "Patty", 24);
    arr.insert("Smith", "Tom", 37);
    arr.insert("Yee", "Bob", 43);
    arr.insert("Adams", "Henry", 29);
    arr.insert("Stimson", "Brad", 54);
    arr.insert("Vang", "Jose", 72);

    console.log("Not Sorted")
    arr.display();

    arr.sortedData("Select", "First Name")

    console.log("Sorted")
    arr.display();
}

DataSortApp();