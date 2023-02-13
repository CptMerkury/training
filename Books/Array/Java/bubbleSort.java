class BubbleSort {
    public static void main(String[] args) {

        int maxSize = 100;
        BubbleArray arr;

        arr = new BubbleArray(maxSize);

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
}

class BubbleArray {
    private long[] a;
    private int nElems;

    public BubbleArray(int max) {
        a = new long[max];
        nElems = 0;
    }

    public void insert(long value) {
        a[nElems] = value;
        nElems++;
    }

    public int find(long searchKey) {
        int lowerBound = 0;
        int upperBound = nElems - 1;
        int curInd;

        while (true) {
            curInd = (lowerBound + upperBound) / 2;

            if (a[curInd] == searchKey) {
                System.out.println("Found " + searchKey);
                return curInd;
            } else if (lowerBound > upperBound) {
                System.out.println("Can't find " + searchKey);
                return nElems;
            } else {
                if (a[curInd] < searchKey) {
                    lowerBound = curInd + 1;
                } else {
                    upperBound = curInd - 1;
                }
            }
        }
    }

    public boolean delete(long value) {
        int j = find(value);
        if (j == nElems) {
            return false;
        } else {
            for (int k = j; k < nElems; k++) {
                a[k] = a[k + 1];
            }
            nElems--;
            return true;
        }
    }

    public void bubbleSort() {
        int out, in;
        for (out = nElems - 1; out > 0; out--) {
            for (in = 0; in < out; in++) {
                if (a[in] > a[in + 1]) {
                    long temp = a[in];
                    a[in] = a[in + 1];
                    a[in + 1] = temp;
                }
            }
        }
    }

    public void display() {
        for (int j = 0; j < nElems; j++)
            System.out.print(a[j] + " ");
        System.out.println("");
    }
};
