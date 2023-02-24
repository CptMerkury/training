class SelectSort {
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
        let out;
        let inner;
        let min;

        for (out = 0; out < this.nElems - 1; out++) {
            min = out;
            for (inner = out + 1; inner < this.nElems; inner++) {
                if (this.a[inner] < this.a[min]) {
                    min = inner;

                    const temp = this.a[out];
                    this.a[out] = this.a[min];
                    this.a[min] = temp;
                }
            }
        }

    }
}

function SelectSortApp() {
    const maxSize = 100;
    const arr = new SelectSort(maxSize)

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

    arr.sort();
    arr.display();

}

SelectSortApp();