class Person {
    lastName;
    firstName;
    age;

    constructor(last, first, a) {
        this.lastName = last;
        this.firstName = first;
        this.age = a;
    }

    _getLast() {
        return this.lastName;
    }

    _getFirst() {
        return this.firstName;
    }

    getAge() {
        return this.age;
    }

    displayPerson() {
        console.log(`FIRST NAME: ${this._getFirst()}, LAST NAME: ${this._getLast()}, AGE: ${this.getAge()}`)
    }

    getNameInfo(method) {
        switch (method) {
            case "Last Name":
                return this._getLast().toLowerCase();
            case "First Name":
                return this._getFirst().toLowerCase();
        }
    }

}

class DataSort {
    data;
    nElems;

    constructor(size) {
        this.data = new Person(size);
        this.nElems = 0;
    }

    _bubbleSort(field) {
        let outer;
        let inner;

        let fieldTer = field === "Age";

        for (outer = this.nElems - 1; outer > 0; outer--) {
            for (inner = 0; inner < outer; inner++) {
                if (fieldTer) {
                    if (this.data[inner].getAge() > this.data[inner + 1].getAge()) {
                        let temp = this.data[inner];
                        this.data[inner] = this.data[inner + 1]
                        this.data[inner + 1] = temp;
                    }
                } else {
                    if (this.data[inner].getNameInfo(field).localeCompare(this.data[inner + 1].getNameInfo(field)) > 0) {
                        let temp = this.data[inner];
                        this.data[inner] = this.data[inner + 1]
                        this.data[inner + 1] = temp;
                    }
                }
            }
        }
    }

    _selectSort(field) {
        let outer;
        let inner;
        let min;

        let fieldTer = field === "Age";

        for (outer = 0; outer < this.nElems - 1; outer++) {
            min = outer;
            for (inner = outer + 1; inner < this.nElems; inner++) {
                if (fieldTer) {
                    if (this.data[inner].getAge() < this.data[min].getAge()) {
                        min = inner;
                        let temp = this.data[outer];
                        this.data[outer] = this.data[min];
                        this.data[min] = temp;
                    }
                } else {
                    if (this.data[inner].getNameInfo(field).localeCompare(this.data[min].getNameInfo(field)) < 0) {
                        min = inner;
                        let temp = this.data[outer];
                        this.data[outer] = this.data[min];
                        this.data[min] = temp;
                    }
                }
            }
        }
    }

    _insertSort(field) {
        let outer;
        let inner;

        let fieldTer = field === "Age";

        for (outer = 1; outer < this.nElems; outer++) {
            let temp = this.data[outer]
            inner = outer;

            while (fieldTer
                ? inner > 0 && this.data[inner - 1].getAge() >= temp.getAge()
                : inner > 0 && this.data[inner - 1].getNameInfo(field).localeCompare(temp.getNameInfo(field)) > 0) {
                this.data[inner] = this.data[inner - 1]
                --inner;
            }

            this.data[inner] = temp
        }
    }

    insert(last, first, a) {
        this.data[this.nElems] = new Person(last, first, a);
        this.nElems++;
    }

    display() {
        const list = [];
        for (let i = 0; i < this.nElems; i++) {
            this.data[i].displayPerson();
        }
    }

    find(field, searchKey) {
        let i;

        let fieldTer = field === 'Age';

        for (i = 0; i < this.nElems; i++) {
            if (fieldTer) {
                if (this.data[i].getAge() == searchKey)
                    break;
            } else {
                if (this.data[i].getNameInfo(field) === searchKey.toLowerCase()) {
                    break;
                }
            }
        }

        if (i === this.nElems) {
            console.log("Can't find " + searchKey);
            return null;
        } else {
            console.log("Found " + searchKey);
            return this.data[i];
        }
    }

    delete(field, value) {
        let j;

        let fieldTer = field === 'Age';

        for (j = 0; j < this.nElems; j++) {
            if (fieldTer) {
                if (value == this.data[j].getAge())
                    break;
            } else {
                if (value === this.data[j].getNameInfo(field))
                    break;
            }
        }

        if (j === this.nElems) {
            return false;
        } else {
            for (let k = j; k < this.nElems; k++)
                this.data[k] = this.data[k + 1];
            this.nElems--;
            return true;
        }

    }

    sortedData(methodSort, sortedFor) {
        switch (methodSort) {
            case "Bubble":
                this._bubbleSort(sortedFor);
                break;
            case "Select":
                this._selectSort(sortedFor);
                break;
            default:
            case "Insert":
                this._insertSort(sortedFor);
                break;
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