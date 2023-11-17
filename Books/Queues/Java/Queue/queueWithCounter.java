package Books.Queues.Java.Queue;

class QueueApp {
    public static void main(String[] args) {

        MyQueue theQueue = new MyQueue(5);

        theQueue.insert(10);
        theQueue.insert(20);
        theQueue.insert(30);
        theQueue.insert(40);

        theQueue.remove();
        theQueue.remove();
        theQueue.remove();

        theQueue.insert(50);
        theQueue.insert(60);
        theQueue.insert(70);
        theQueue.insert(80);

        while (!theQueue.isEmpty()) {
            long temp = theQueue.remove();

            System.out.print(temp + " ");
        }

        System.out.println(" ");
    }
}

class MyQueue {
    private int maxSize;
    private long[] queArray;
    private int front;
    private int rear;
    private int nItems;

    public MyQueue(int s) {
        maxSize = s;
        queArray = new long[maxSize];
        front = 0;
        rear = -1;
        nItems = 0;
    }

    public void insert(long val) {
        if (isFull()) {
            System.out.println("Error: Queue is full");
            return;
        }

        if (rear == maxSize - 1)
            rear = -1;

        queArray[++rear] = val;
        nItems++;
    }

    public long remove() {
        if (isEmpty()) {
            System.out.println("Error: Queue is empty");
            return 0;
        } else {
            long temp = queArray[front++];

            if (front == maxSize)
                front = 0;
    
            nItems--;
            return temp;
        }
    }

    public long peekFront() {
        return queArray[front];
    }

    public boolean isEmpty() {
        return nItems == 0;
    }

    public boolean isFull() {
        return nItems == maxSize;
    }

    public int size() {
        return nItems;
    }
}
