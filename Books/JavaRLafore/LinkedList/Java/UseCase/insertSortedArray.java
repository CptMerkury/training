package Books.LinkedList.Java.useCase;

class InsertSortedArrayApp {
    public static void main(String[] args) {
        int size = 20;

        Node[] linkArr = new Node[size];

        for (int j = 0; j < size; j++) {
            int n = (int)(java.lang.Math.random() * 99);
            Node newLink = new Node(n);
            linkArr[j] = newLink;
        }

        System.out.print("Unsorted array: ");
        for (int j = 0; j < size; j++) {
            System.out.print(linkArr[j].dData + " ");
        }
        System.out.println("");

        SortedList theSortedList = new SortedList(linkArr);
        for (int j = 0; j < size; j++) {
            linkArr[j] = theSortedList.removeMin();
        }

        System.out.print("Sorted array: ");
        for (int j = 0; j < size; j++) {
            System.out.print(linkArr[j].dData + " ");
        }
        System.out.println("");
    }
}

class Node {
    public long dData;
    public Node next;

    public Node(long data) {
        dData = data;
        next = null;
    }
}

class SortedList {
    private Node first;

    public SortedList() {
        first = null;
    }

    public SortedList(Node[] linkArr) {
        first = null;
        for (int j = 0; j < linkArr.length; j++) {
            insert(linkArr[j]);
        }
    }

    public void insert(Node data) {
        Node current = first;
        Node prev = null;

        while (current != null && data.dData > current.dData) {
            prev = current;
            current = current.next;
        }

        if (prev == null) {
            first = data;
        } else {
            prev.next = data;
        }

        data.next = current;
    }

    public Node removeMin() {
        Node temp = first;
        first = temp.next;
        return temp;
    }
}
