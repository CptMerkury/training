package Books.Sorts.Java;

class InsertSortApp {
    public static void main(String[] args) {
        int maxSize = 100;
        InsertSort arr;

        arr = new InsertSort(maxSize);

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
}

class InsertSort {
    private long[] a;
    private int nElems;

    public InsertSort(int max) {
        a = new long[max];
        nElems = 0;
    }

    public void insert(long value) {
        a[nElems] = value;
        nElems++;
    }

    public void display() {
        for (int j = 0; j < nElems; j++)
            System.out.print(a[j] + " ");
        System.out.println("");
    }

    public void sort() {
        int in, out;

        for (out = 1; out < nElems; out++) {
            long temp = a[out];
            in = out;

            while(in > 0 && a[in-1] >= temp) {
                a[in] = a[in-1];
                --in;
            }
            a[in] = temp;
        }
        
    }
};
