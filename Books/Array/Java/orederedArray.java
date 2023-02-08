class OrderedApp {
    public static void main(String[] args) {

        int maxSize = 100;
        OrdArray arr;
    

        arr = new OrdArray(maxSize);

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

        arr.delete(55);
        arr.delete(00);

        arr.display();

    }
}

class OrdArray {
    private long[] a;
    private int nElems;

    public OrdArray(int max) { 
        a = new long[max];
        nElems = 0;
    }

    public void insert(long value) {
        int j;
        for (j=0; j<nElems; j++) {
            if (a[j] > value) {
                break;
            }
        }
        for (int k = nElems; k>j; k--) {
            a[k] = a[k-1];
        }
        a[j] = value;
        nElems++;
    }

    public int find(long searchKey) {
        int lowerBound = 0;
        int upperBound = nElems-1;
        int curInd;

        while(true) {
            curInd = (lowerBound + upperBound) / 2;

            if(a[curInd] == searchKey) {
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
            for (int k = j; k<nElems; k++) {
                a[k] = a[k+1];
            }
            nElems--;
            return true;
        }
    }

    public int size() {
        return nElems;
    }

    public void display() {
        for (int j=0; j<nElems; j++)
        System.out.print(a[j] + " ");
        System.out.println("");
    }
};
