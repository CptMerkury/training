class ArrayApp {
    public static void main(String[] args) {
        StackX stack = new StackX(10);

        stack.push(20);
        stack.push(40);
        stack.push(60);
        stack.push(80);
        stack.push(100);

        while (!stack.isEmpty()) {
            long value = stack.pop();
            long top = stack.peek();

            System.out.println(value + "\n");
            System.out.println("Stack top is " + top + "\n");
        }
        System.out.println("Stack is empty");
    }
};

class StackX {
    private int maxSize;
    private long[] stackArray;
    private int top;

    public StackX(int s) {
        maxSize = s;
        stackArray = new long[maxSize];
        top = -1;
    }

    public void push(long val) {
        if (!isFull()) {
            stackArray[++top] = val;
        } else {
            System.out.println("Can't insert, stack is full");
        }
    }

    public long pop() {
        return stackArray[top--];
    }

    public long peek() {
        if (!isEmpty()) {
            return stackArray[top];
        } else {
            return -1;
        }
    }

    public boolean isEmpty() {
        return (top == -1);
    }

    public boolean isFull() {
        return (top == maxSize - 1);
    }
};