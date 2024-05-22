package Books.Queues.Java.QueueList;

class QueueListApp {
    public static void main(String[] args) {

        QueueList theQueueList = new QueueList();

        theQueueList.push(10);
        theQueueList.push(20);
        theQueueList.push(30);

        theQueueList.displayQueue();

        theQueueList.push(40);
        theQueueList.push(50);
        theQueueList.push(60);

        theQueueList.displayQueue();

        theQueueList.pop();
        theQueueList.pop();
        theQueueList.pop();
        theQueueList.pop();

        theQueueList.displayQueue();
    }
}

class Link {
    public long dData;
    public Link next;

    public Link(long data) {
        dData = data;
    }

    public void displayLink() {
        System.out.print("{data: " + dData + "} ");
    }
}

class LinkedList {
    private Link first;
    private Link last;

    public LinkedList() {
        first = null;
        last = null;
    }

    public boolean isEmpty() {
        return first == null;
    }
    
    public void insertLast(long data) {
        Link newLink = new Link(data);

        if(isEmpty()) {
            first = newLink;
        } else {
            last.next = newLink;
        }
        last = newLink;
    }

    public long deleteFirst() {
        long temp = first.dData;
        if (isEmpty()) {
            last = null;
        }
        first = first.next;
        return temp;
    }

    public void displayList() {
        System.out.print("List (first --> last): ");
        Link current = first;

        while (current != null) {
            current.displayLink();
            current = current.next;
        }

        System.out.println("");
    }
}

class QueueList {
    private LinkedList theQueue;

    public QueueList() {
        theQueue = new LinkedList();
    }

    public void push(long data) {
        theQueue.insertLast(data);
    }

    public long pop() {
        return theQueue.deleteFirst();
    }

    public boolean isEmpty() {
        return theQueue.isEmpty();
    }

    public void displayQueue() {
        System.out.print("Queue (start -> end): ");
        theQueue.displayList();
    }
}
