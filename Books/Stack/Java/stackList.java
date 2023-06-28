package Books.Stack.Java;

class StackListApp {
    public static void main(String[] args) {

        StackList theStack = new StackList();

        theStack.push(10);
        theStack.push(30);
        theStack.push(50);

        theStack.displayStack();

        theStack.push(70);
        theStack.push(90);
        theStack.push(110);

        theStack.displayStack();

        theStack.pop();
        theStack.pop();
        theStack.pop();

        theStack.displayStack();
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

    public LinkedList() {
        first = null;
    }

    public boolean isEmpty() {
        return first == null;
    }

    public void insertFirst(long data) {
        Link newLink = new Link(data);
        newLink.next = first;
        first = newLink;
    }

    public long deleteFirst() {
        if (isEmpty()) {
            return -1;
        }

        Link temp = first;
        first = first.next;
        return temp.dData;
    }

    public void displayList(){
        Link current = first;

        while(current != null) {
            current.displayLink();
            current = current.next;
        }
        System.out.println("");
    }
}

class StackList {
    private LinkedList theList;

    public StackList() {
        theList = new LinkedList();
    }

    public void push(long data) {
        theList.insertFirst(data);
    }
    
    public long pop() {
        return theList.deleteFirst();
    }

    public boolean isEmpty() {
        return theList.isEmpty();
    }

    public void displayStack() {
        System.out.print("Stack (top -> bottom): ");
        theList.displayList();
    }
}
