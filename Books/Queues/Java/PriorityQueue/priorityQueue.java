package Books.Queues.Java.PriorityQueue;

import java.io.IOException;

class PriorityQApp {
    public static void main(String[] args) throws IOException {

        PriorityQ thePQ = new PriorityQ(5);

        thePQ.insert(30);
        thePQ.insert(10);
        thePQ.insert(20);
        thePQ.insert(50);
        thePQ.insert(40);

        while (!thePQ.isEmpty()) {
            long temp = thePQ.remove();

            System.out.print(temp + " ");
        }

        System.out.println(" ");
    }
}

class PriorityQ {
    private int maxSize;
    private long[] priorityQArray;
    private int nItems;

    public PriorityQ(int s) {
        maxSize = s;
        priorityQArray = new long[maxSize];
        nItems = 0;
    }

    public void insert(long item) {
        int j;

        if (nItems == 0) {
            priorityQArray[nItems++] = item;
        } else {
            for (j = nItems - 1; j >= 0; j--) {
                if (item > priorityQArray[j]) {
                    priorityQArray[j + 1] = priorityQArray[j];
                } else {
                    break;
                }
            }

            priorityQArray[j + 1] = item;
            nItems++;
        }
    }

    public long remove() {
        return priorityQArray[--nItems];
    }

    public long peekMin() {
        return priorityQArray[nItems - 1];
    }

    public boolean isEmpty() {
        return nItems == 0;
    }

    public boolean isFull() {
        return nItems == maxSize;
    }
}