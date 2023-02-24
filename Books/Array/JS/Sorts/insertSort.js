class InsertSortArray {
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

    insertSort() {
        let inner;
        let outer;

        for (outer = 1; outer < this.nElems; outer++) {
            let temp = this.a[outer];
            inner = outer;

            while(inner > 0 && this.a[inner - 1] >= temp) {
                this.a[inner] = this.a[inner-1]
                --inner;
            }

            this.a[inner] = temp;
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

function InsertSortApp() {
    const maxSize = 100;
    const arr = new InsertSortArray(maxSize)

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

    arr.insertSort();

    arr.display();

}

InsertSortApp();