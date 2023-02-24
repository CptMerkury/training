class BubbleSort {
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

        for (out = this.nElems - 1; out > 0; out--) {
            for (inner = 0; inner < out; inner++) {
                if (this.a[inner] > this.a[inner + 1]) {
                    const temp = this.a[inner];
                    this.a[inner] = this.a[inner + 1]
                    this.a[inner + 1] = temp;
                }
            }
        }
    }
}

function BibbleSortApp() {
    const maxSize = 100;
    const arr = new BubbleSort(maxSize)

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

    arr.bubbleSort();
    arr.display();

}

BibbleSortApp();