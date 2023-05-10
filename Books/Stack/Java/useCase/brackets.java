package Books.Stack.Java.useCase;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class BracketsApp {
    public static void main(String[] args) throws IOException {

        String input;

        while (true) {
            System.out.println("Enter a string: ");
            System.out.flush();
            input = getString();

            if (input.equals("")) {
                System.out.println("Exit...");
                break;
            }

            BracketsChecker checker = new BracketsChecker(input);

            if (checker.check()) {
                System.out.println("Status: success");
            } else {
                System.out.println("Status: fail");
            }
        }
    }

    /* Function read char from keyboard */
    public static String getString() throws IOException {
        InputStreamReader isr = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(isr);
        String s = br.readLine();
        return s;
    }
}

class StackX {
    private int maxSize;
    private char[] stackArray;
    private int top;

    public StackX(int s) {
        maxSize = s;
        stackArray = new char[maxSize];
        top = -1;
    }

    public void push(char val) {
        stackArray[++top] = val;
    }

    public char pop() {
        return stackArray[top--];
    }

    public boolean isEmpty() {
        return (top == -1);
    }
}

class BracketsChecker {
    private String input;

    public BracketsChecker(String in) {
        input = in;
    };

    public boolean check() {
        int stackSize = input.length();

        StackX theStack = new StackX(stackSize);

        for (int i = 0; i < stackSize; i++) {
            char ch = input.charAt(i);

            switch (ch) {
                case '{':
                case '[':
                case '(':
                    theStack.push(ch);
                    break;

                case '}':
                case ']':
                case ')':
                    if (!theStack.isEmpty()) {
                        char chx = theStack.pop();

                        if (ch == '}' && chx != '{' ||
                                ch == ']' && chx != '[' ||
                                ch == ')' && chx != '(') {
                            System.out.println("Error: " + ch + " at " + i);
                            return false;
                        }
                    } else {
                        System.out.println("Error: " + ch + " at " + i);
                        return false;
                    }
                default:
                    break;
            }
        }

        return theStack.isEmpty();
    };
}