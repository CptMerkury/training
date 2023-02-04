class MyArray {
    a;
    nElems;

    constructor(size) {
        this.a = new Array(size);
        this.nElems = 0;
    }

    insert(value){
        this.a[this.nElems] = value;
        this.nElems++;
    }

    find(searchKey) {
        let i;

        for(i = 0; i<this.nElems; i++){
            if(this.a[i] === searchKey){
                break;
            }
        }

        if(i === this.nElems){
            console.log("Can't find " + searchKey);
            return false;
        } else {
            console.log("Found " + searchKey);
            return true;
        }
    }

    delete(value) {
        let j;

        for (j=0; j<this.nElems; j++) {
            if( value == this.a[j] )
            break;
        }

        if(j === this.nElems) {
            return false;
        } else {
            for(let k=j; k<this.nElems; k++)
            this.a[k] = this.a[k+1];
            this.nElems--;
            return true;
        }
           
    }

    display(){
        const list = [];
        for(let i = 0; i<this.nElems; i++){
            list.push(this.a[i]+ "")
        }
        console.log(list.join(' '));
    }

}

function App () {
    const maxSize = 100;
    const arr = new MyArray(maxSize)

    arr.insert(99);
    arr.insert(88);
    arr.insert(77);
    arr.insert(66);
    arr.insert(55);
    arr.insert(44);
    arr.insert(33);
    arr.insert(22);
    arr.insert(11);
    arr.insert(00);

    arr.display();

    arr.find(26);
    arr.find(99);
    arr.find(66);

    arr.delete(99);
    arr.delete(66);
    arr.delete(00);

    arr.display();
}

App();