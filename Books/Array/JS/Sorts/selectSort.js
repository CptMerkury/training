class SelectSortArray {
    a;
    nElems;

    constructor(size) {
        this.a = new Array(size);
        this.nElems = 0;
    }

    insert(value) {
        this.a[this.nElems] = value;
        this.nElems++;
    }

    find(searchKey) {
        let lowerBound = 0;
        let upperBound = this.nElems - 1;
        let curInd;

        while (true) {
            curInd = Math.floor((lowerBound + upperBound) / 2);

            if (lowerBound > upperBound) {
                console.log("Can't find " + searchKey);
                return this.nElems;
            }

            if (this.a[curInd] === searchKey) {
                console.log("Found " + searchKey);
                return curInd;
            } else {
                if (this.a[curInd] < searchKey) {
                    lowerBound = curInd + 1;
                } else {
                    upperBound = curInd - 1;
                }
            }
        }
    }

    delete(value) {
        let i = this.find(value);

        if (i === this.nElems) {
            return false
        } else {
            for (let j = i; j < this.nElems; j++) {
                this.a[j] = this.a[j + 1];
            }
            this.nElems--;
        }
    }

    selectSort() {
        let out;
        let inner;
        let min;

        for (out = 0; out < this.nElems - 1; out++) {
            min = out;

            for(inner = out + 1; inner < this.nElems; inner++) {
                if(this.a[inner] < this.a[min]) {
                    min = inner;
                    let temp = this.a[out];
                    this.a[out] = this.a[min];
                    this.a[min] = temp;
                }
            }
        }

    }

    display() {
        const list = [];
        for (let i = 0; i < this.nElems; i++) {
            list.push(this.a[i] + "")
        }
        console.log(list.join(' '));
    }

}

function SelectSortApp() {
    const maxSize = 100;
    const arr = new SelectSortArray(maxSize)

    arr.insert(44);
    arr.insert(88);
    arr.insert(33);
    arr.insert(66);
    arr.insert(99);
    arr.insert(55);
    arr.insert(22);
    arr.insert(77);
    arr.insert(11);

    arr.display();

    arr.selectSort();

    arr.display();

}

SelectSortApp();