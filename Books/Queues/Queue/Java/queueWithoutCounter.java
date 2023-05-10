package Books.Queues.Queue.Java;

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

    public MyQueue(int s) {
        maxSize = s + 1;
        queArray = new long[maxSize];
        front = 0;
        rear = -1;
    }

    public void insert(long val) {
        if (isFull()) {
            System.out.println("Error: Queue is full");
            return;
        }

        if (rear == maxSize - 1)
            rear = -1;

        queArray[++rear] = val;
    }

    public long remove() {
        if (isEmpty()) {
            System.out.println("Error: Queue is empty");
            return 0;
        } else {
            long temp = queArray[front++];

            if (front == maxSize)
                front = 0;

            return temp;
        }
    }

    public long peekFront() {
        return queArray[front];
    }

    public boolean isEmpty() {
        return (rear + 1 == front || (front + maxSize - 1 == rear));
    }

    public boolean isFull() {
        return (rear + 2 == front || (front + maxSize - 2 == rear));
    }

    public int size() {
        if (rear >= front) {
            return rear - front + 1;
        } else {
            return (maxSize - front) + (rear + 1);
        }
    }
}
