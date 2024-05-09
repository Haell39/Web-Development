public class Main{
    public static void main (String[] args ) {
        System.out.println("hello motherfucker");
        System.out.println("Digite o ano que nasceu");
        System.out.println(37*896);
        
        String name = "Rael";
        
        System.out.println(name);
        
        int num = 15;
        num = 20;

        final int num2 = 4; //variavel constante, cannot be changed

        num2 = 5; // ERROR

        System.out.println(num2); //This will result in error
        System.out.println(num); // This will print 20

        float floatnum = 15.5457f;

        char letter = 'A';

        boolean mybool = 'true';

        System.out.println(letter);
        System.out.println(mybool);
        System.out.println(floatnum);
        
        int x = 5, y = 10, z = 15;
        
        System.out.println(x + y + z);

        String name2 = "Rael";
        System.out.println("Hello, " + name2 + "!");

        String firstname = "Rael";
        String lastname ="Andras";
        String fullname = firstname + " " + lastname
        System.out.println(fullname);

        int x,y,z;
        x = y = z = 10;
        System.out.println(x + y + z);

        // Good
int minutesPerHour = 60;

// OK, but not so easy to understand what m actually is
int m = 60;


    }
}