package Books.Stack.Java.UseCase;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class ReverseApp {
    public static void main(String[] args) throws IOException {
        String input, output;

        while (true) {
            System.out.println("Enter a string: ");
            System.out.flush();
            input = getString();

            if (input.equals("")) {
                System.out.println("Exit...");
                break;

            }
            Reverser reverse = new Reverser(input);
            output = reverse.DoRev();

            System.out.println("Reversed is: " + output);
        }

    }

    /* Function read char from keyboard */
    public static String getString() throws IOException {
        InputStreamReader isr = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(isr);
        String s = br.readLine();
        return s;
    }
};

class StackCh {
    private int maxSize;
    private char[] stackArray;
    private int top;

    public StackCh(int s) {
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

class Reverser {
    private String input;
    private String output;

    public Reverser(String in) {
        input = in;
    }

    public String DoRev() {
        int stackSize = input.length();

        StackCh stack = new StackCh(stackSize);

        for (int j = 0; j < input.length(); j++) {
            char ch = input.charAt(j);
            stack.push(ch);
        }

        output = "";

        while (!stack.isEmpty()) {
            char ch = stack.pop();
            output = output + ch;
        }

        return output;
    }
}