package Books.LinkedList.Java;

class DoubleLinkedListApp {
    
    public static void main(String[] args) {

        DoubleLinkedList theList = new DoubleLinkedList();

        theList.insertFirst(30);
        theList.insertFirst(20);
        theList.insertFirst(10);

        theList.displayForward();
        theList.displayBackward();

        theList.insertLast(70);
        theList.insertLast(80);
        theList.insertLast(90);

        theList.displayForward();
        theList.displayBackward();

        theList.insertAfter(10, 25);
        theList.insertAfter(90, 75);
        theList.insertAfter(30, 5);

        theList.displayForward();
        theList.displayBackward();

        theList.deleteFirst();

        theList.displayForward();
        theList.displayBackward();

        theList.deleteLast();

        theList.displayForward();
        theList.displayBackward();

        theList.deleteKey(70);
        theList.deleteKey(75);

        theList.displayForward();
        theList.displayBackward();
    }
}

class Link {
    public long dData;
    public Link next;
    public Link prev;

    public Link(long data) {
        dData = data;
        next = null;
        prev = null;
    }

    public void displayNode() {
        System.out.print("{data: " + dData + "} ");
    }
}

class DoubleLinkedList {
    private Link first;
    private Link last;

    public DoubleLinkedList() {
        first = null;
        last = null;
    }

    public boolean isEmpty() {
        return first == null;
    }

    public void displayForward() {
        System.out.print("List Forward (first --> last): ");

        Link current = first;

        while(current != null) {
            current.displayNode();
            current = current.next;
        }

        System.out.println("");
    }

    public void displayBackward() {
        System.out.print("List Backward (last --> first): ");

        Link current = last;

        while(current != null) {
            current.displayNode();
            current = current.prev;
        }

        System.out.println("");
    }

    public void insertFirst(long data) {
        Link newLink = new Link(data);

        if(isEmpty()) {
            last = newLink;
        } else {
            first.prev = newLink;
        }
        newLink.next = first;
        first = newLink;
    }

    public void insertLast(long data) {
        Link newLink = new Link(data);

        if(isEmpty()) {
            first = newLink;
        } else {
            last.next = newLink;
        }
        newLink.prev = last;
        last = newLink;
    }

    public Link deleteFirst() {
        Link temp = first;

        if(first.next == null) {
            last = null;
        } else {
            first.next.prev = null;
        }

        first = first.next;
        return temp;
    }

    public Link deleteLast() {
        Link temp = first;

        if(first.next == null) {
            first = null;
        } else {
            last.prev.next = null;
        }

        last = last.prev;
        return temp;
    }

    public boolean insertAfter(long key, long data) {
        if(isEmpty()) {
            insertFirst(data);
        }

        Link current = first;

        while(current.dData != key) {
            current = current.next;

            if(current == null) {
                System.out.print("Element " + key + " not found");
                System.out.println("");
                return false;
            }  
        }

        Link newLink = new Link(data);

        if (current == last) {
            newLink.next = null;
            last = newLink;
        } else {
            newLink.next = current.next;
            current.next.prev = newLink;
        }

        newLink.prev = current;
        current.next = newLink;
        
        System.out.print("Element " + data + " insert");
        System.out.println("");
        return true;
    }

    public void deleteKey(long key) {
        if(isEmpty()) {
            System.out.print("List is empty ");
            System.out.println("");
            return;
        }

        Link current = first;

        while(current.dData != key) {
            current = current.next;
            
            if(current == null) {
                System.out.print("Element " + key + " not found");
                System.out.println("");
                return;
            }  
        }

        if(current == last) {
            last = current.prev;
        } else {
            current.prev.next = current.next;
        }

        if(current == first) {
            first = current.next;
        } else {
            current.next.prev = current.prev;
        }


        System.out.print("Element " + key + " removed");
        System.out.println("");
    }
}