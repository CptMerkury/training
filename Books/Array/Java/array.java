class ArrayApp {
    public static void main(String[] args) {

        int maxSize = 100;
        MyArray arr;
    

        arr = new MyArray(maxSize);

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

        arr.removeMax();

        arr.display();

    }
}

class MyArray {
    private long[] a;
    private int nElems;

    public MyArray(int max) { 
        a = new long[max];
        nElems = 0;
    }

    public boolean find(long searchKey) {
        int j;
        for (j=0; j<nElems; j++)
            if(a[j] == searchKey)
            break;
        if(j == nElems) {
            System.out.println("Can't find " + searchKey);
            return false;
        } else {
            System.out.println("Found " + searchKey);
            return true;
        }  
    }

    public void insert(long value) {
        a[nElems] = value;
        nElems++;
    }

    public boolean delete(long value) {
        int j;

        for (j=0; j<nElems; j++)
            if( value == a[j] )
                break;
        if(j == nElems)
            return false;
        else 
            for(int k=j; k<nElems; k++)
                a[k] = a[k+1];
                nElems--;
                return true;
    }

    public long removeMax() {
        long max = 0;

        if ( nElems > 0 ) {
            for(int j=0; j<nElems; j++) {
                if( a[j] > max )
                max = a[j];
            }
            delete(max);
            System.out.println("Remove max value " + max);
            return max;
        } else {
            System.out.println("Array is empty");
            return -1; 
        }
    }

    public void display() {
        for (int j=0; j<nElems; j++)
        System.out.print(a[j] + " ");
        System.out.println("");
    }
};
