package Books.Recursion.Java;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class RecursionApp {
    static int theNumber;

    public static void main(String[] args) throws IOException {
        System.out.print("Enter a number: ");
        theNumber = getInt();
        int Triangle = triangle(theNumber);
        int Factorial = factorial(theNumber);

        System.out.println("Triangle = " + Triangle);
        System.out.println("Factorial = " + Factorial);
    }

    public static String getString() throws IOException {
        InputStreamReader isr = new InputStreamReader(System.in);
        BufferedReader bf = new BufferedReader(isr);

        String s = bf.readLine();
        return s;
    }

    public static int getInt() throws IOException {
        String s = getString();
        return Integer.parseInt(s);
    }

    public static int triangle(int n) {
        if (n == 1) {
            return 1;
        } else {
            return (n + triangle(n - 1));
        }
    }
    
    public static int factorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return (n * triangle(n - 1));
        }
    }
}