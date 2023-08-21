package Books.LinkedList.Java;

class SortedListApp {
    public static void main(String[] args) {

        SortedList theSortedList = new SortedList();

        theSortedList.insert(20);
        theSortedList.insert(40);
        theSortedList.insert(60);

        theSortedList.displayList();

        theSortedList.insert(30);
        theSortedList.insert(50);
        theSortedList.insert(10);

        theSortedList.displayList();

        theSortedList.removeFirst();
        theSortedList.removeFirst();

        theSortedList.displayList();
    }
}

class Node {
    public long dData;
    public Node next;

    public Node(long data) {
        dData = data;
        next = null;
    }

    public void displayNode() {
        System.out.print("{data: " + dData + "} ");
    }

}

class SortedList {
    private Node first;

    public SortedList() {
        first = null;
    }

    public boolean isEmpty() {
        return first == null;
    }

    public void insert(long data) {
        Node newNode = new Node(data);
        Node current = first;
        Node prev = null;

        while (current != null && data > current.dData) {
            prev = current;
            current = current.next;
        }

        if (prev == null) {
            first = newNode;
        } else {
            prev.next = newNode;
        }

        newNode.next = current;
    }

    public Node removeFirst() {
        Node temp = first;
        first = temp.next;
        return temp;
    }

    public void displayList() {
        System.out.print("List (first --> last): ");
        Node current = first;

        while (current != null) {
            current.displayNode();
            current = current.next;
        }
        System.out.println("");
    }
}