class InsertSort {
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

    display() {
        const list = [];
        for (let i = 0; i < this.nElems; i++) {
            list.push(this.a[i] + "")
        }
        console.log(list.join(' '));
    }

    sort() {
        let inner;
        let outer;

        for (outer = 1; outer < this.nElems; outer++) {
            const temp = this.a[outer];
            inner = outer;

            while (inner > 0 && this.a[inner - 1] >= temp) {
                this.a[inner] = this.a[inner - 1]
                --inner;
            }
            
            this.a[inner] = temp;
        }
    }
}

function InsertSortApp() {
    const maxSize = 100;
    const arr = new InsertSort(maxSize)

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