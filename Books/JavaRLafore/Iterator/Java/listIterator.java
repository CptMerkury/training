package Books.Iterator.Java;

import java.io.*;

class ListIteratorApp {
    
    public static void main(String[] args) throws IOException {

        LinkedList theList = new LinkedList();
        ListIterator theIter = new ListIterator(theList);
        long currentValue;

        theIter.insertAfter(20);
        theIter.insertAfter(40);
        theIter.insertAfter(80);
        theIter.insertBefore(60);

        while(true) {
            System.out.print("Enter the first letter of: ");
            System.out.println("");
            System.out.print("show, current, reset, next, before, after, delete");
            System.out.println("");
            System.out.flush();
            int choice = getChar();

            switch(choice) {
                case 's': 
                    if(!theList.isEmpty()) {
                        theList.displayList();
                    } else {
                        System.out.println("List is empty");
                    }
                    break;
                case 'r':
                    theIter.reset();
                    break;
                case 'n':
                    if(!theList.isEmpty() && !theIter.atEnd()) {
                        theIter.nextLink();
                    } else {
                        System.out.println("Can't go to next link");
                    }
                    break;
                case 'c':
                    if(!theList.isEmpty()) {
                        currentValue = theIter.getCurrent().dData;
                        System.out.println("Current node is " + currentValue);
                    } else {
                        System.out.println("List is empty");
                    }
                    break;
                case 'b':
                    System.out.print("Enter the value to insert before current: ");
                    System.out.flush();
                    currentValue = getInt();
                    theIter.insertBefore(currentValue);
                    break;
                case 'a':
                    System.out.print("Enter the value to insert after current: ");
                    System.out.flush();
                    currentValue = getInt();
                    theIter.insertAfter(currentValue);
                    break;
                case 'd':
                    if(!theList.isEmpty()) {
                        currentValue = theIter.deleteCurrent();
                        System.out.println("Deleted: " + currentValue);
                    } else {
                        System.out.print("Can't deleted");
                        System.out.println("List is empty");
                    }
                    break;
                default:
                    System.out.println("Invalid command");
            }
        }
    }

    public static String getString() throws IOException {
        InputStreamReader isr = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(isr);

        String s = br.readLine();
        return s;
    }

    public static char getChar() throws IOException {
        String s = getString();
        return s.charAt(0);
    }

    public static int getInt() throws IOException {
        String s = getString();
        return Integer.parseInt(s);
    }
}


class Link {
    public long dData;
    public Link next;

    public Link(long data) {
        dData = data;
        next = null;
    }

    public void displayLink() {
        System.out.print("{data: " + dData + "} ");
    }
}

class LinkedList {
    private Link first;

    public LinkedList() {
        first = null;
    }

    public Link getFirst() {
        return first;
    }

    public void setFirst(Link link) {
        first = link;
    }

    public boolean isEmpty() {
        return first == null;
    }

    public ListIterator getIterator() {
        return new ListIterator(this);
    }

    public void displayList() {
        System.out.print("List (first --> last): ");
        Link current = first;

        while(current != null ) {
            current.displayLink();
            current = current.next;
        }

        System.out.println("");
    }

}

class ListIterator {
    private Link current;
    private Link prev;
    private LinkedList ourList;

    public ListIterator(LinkedList list) {
        ourList = list;
        reset();
    }

    public void reset() {
        current = ourList.getFirst();
        prev = null;
    }

    public boolean atEnd() {
        return current.next == null;
    }

    public void nextLink() {
        prev = current;
        current = current.next;
    }

    public void prevLink() {
        prev = current;
        current = current.next;
    }

    public Link getCurrent() {
        return current;
    }

    public void insertAfter(long data) {
        Link newLink = new Link(data);

        if(ourList.isEmpty()) {
            ourList.setFirst(newLink);
            current = newLink;
        } else {
            newLink.next = current.next;
            current.next = newLink;
            nextLink();
        }
    }

    public void insertBefore(long data) {
        Link newLink = new Link(data);

        if(prev == null) {
            newLink.next = ourList.getFirst();
            ourList.setFirst(newLink);
            reset();
        } else {
            newLink.next = prev.next;
            prev.next = newLink;
            current = newLink;
        }
    }

    public long deleteCurrent() {
        long value = current.dData;

        if(prev == null) {
            ourList.setFirst(current.next);
            reset();
        } else {
            prev.next = current.next;
            if(atEnd()) {
                reset();
            } else {
                current = current.next;
            }
        }

        return value;
    }
}