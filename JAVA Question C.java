Check if the input is pangram or not.
   
   
import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();

        boolean isPangram = isPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        boolean[] letterPresent = new boolean[26];
        input = input.toLowerCase();
        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                int index = ch - 'a';
                letterPresent[index] = true;
            }
        }
        for (boolean present : letterPresent) {
            if (!present) {
                return false; // Not a pangram
            }
        }

        return true; // It's a pangram
    }
}
