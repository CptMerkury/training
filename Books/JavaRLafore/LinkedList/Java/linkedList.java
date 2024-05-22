package Books.LinkedList.Java;

class LinkedListApp {
    public static void main(String[] args) {

        LinkedList theList = new LinkedList();
        theList.insertFirst(22, 22.99);
        theList.insertFirst(44, 44.99);
        theList.insertFirst(66, 66.99);
        theList.insertFirst(11, 11.99);
        theList.insertFirst(99, 99.99);
        theList.insertFirst(300, 300.99);

        theList.displayList();

        Link f1 = theList.find(300);
        Link f2 = theList.find(11);
        Link f3 = theList.find(450);
        System.out.print(f1 != null ? "Element: " + f1.dData + "\n" : "Element not found\n");
        System.out.print(f2 != null ? "Element: " + f2.dData + "\n" : "Element not found\n");
        System.out.print(f3 != null ? "Element: " + f3.dData + "\n" : "Element not found\n");

        Link d1 = theList.delete(99);
        Link d2 = theList.delete(500);
        Link d3 = theList.delete(44);
        System.out.print(d1 != null ? "Deleted element: " + d1.dData + "\n" : "Deleted element not found\n");
        System.out.print(d2 != null ? "Deleted element: " + d2.dData + "\n" : "Deleted element not found\n");
        System.out.print(d3 != null ? "Deleted element: " + d3.dData + "\n" : "Deleted element not found\n");

        theList.displayList();

        while (!theList.isEmpty()) {
            Link dLink = theList.deleteFirst();
            System.out.print("Deleted ");
            dLink.displayLink();
            System.out.print("\n");
        }

        theList.displayList();
    }
}

class Link {
    public int iData;
    public double dData;
    public Link next;

    public Link(int id, double data) {
        iData = id;
        dData = data;
    }

    public void displayLink() {
        System.out.print("{id:" + iData + ", data: " + dData + "} ");
    }

}

class LinkedList {
    private Link first;

    public LinkedList() {
        first = null;
    }

    public void insertFirst(int id, double data) {
        Link newLink = new Link(id, data);
        newLink.next = first;
        first = newLink;
    }

    public Link deleteFirst() {
        Link temp = first;
        first = first.next;
        return temp;
    }

    public Link find(int key) {
        Link current = first;

        while (current.iData != key) {
            if (current.next == null) {
                return null;
            } else {
                current = current.next;
            }
        }
        return current;
    }

    public Link delete(int key) {
        Link current = first;
        Link prev = first;

        while (current.iData != key) {
            if (current.next == null) {
                return null;
            } else {
                prev = current;
                current = current.next;
            }
        }

        if(current == first) {
            first = first.next;
        } else {
            prev.next = current.next;
        }

        return current;
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

    public boolean isEmpty() {
        return first == null;
    }
}