package Books.BaseSort.Java;

class SelectSortApp {
    public static void main(String[] args) {
        int maxSize = 100;
        SelectSort arr;

        arr = new SelectSort(maxSize);

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

class SelectSort {
    private long[] a;
    private int nElems;

    public SelectSort(int max) {
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
        int out, in, min;
        for (out = 0; out < nElems - 1; out++) {
            min = out;
            for (in = out + 1; in < nElems; in++) {
                if(a[in] < a[min]) {
                    min = in;
                    long temp = a[out];
                    a[out] = a[min];
                    a[min] = temp;
                }
            }
        }
    }
};
