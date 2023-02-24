class OrdArray {
    a;
    nElems;

    constructor(size) {
        this.a = new Array(size);
        this.nElems = 0;
    }

    insert(value) {
        let j;
        for (j = 0; j < this.nElems; j++) {
            if (this.a[j] > value) break;
        }

        for (let k = this.nElems; k > j; k--) {
            this.a[k] = this.a[k - 1];
        }

        this.a[j] = value;
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

    size() {
        return this.nElems;
    }

    display() {
        const list = [];
        for (let i = 0; i < this.nElems; i++) {
            list.push(this.a[i] + "")
        }

        console.log(list.join(' '));
    }

}

function OrderedApp() {
    const maxSize = 100;
    const arr = new OrdArray(maxSize)

    arr.insert(99);
    arr.insert(88);
    arr.insert(77);
    arr.insert(66);
    arr.insert(55);
    arr.insert(44);
    arr.insert(33);
    arr.insert(22);
    arr.insert(11);
    arr.insert(0);
    arr.display();

    arr.find(26);
    arr.find(99);
    arr.find(66);

    arr.delete(55);
    arr.delete(0);
    arr.display();
}

OrderedApp();