import java.util.Scanner;

public class CuboDeiPrimiN {

    public static void main(String[] args) {
        // Creazione di un oggetto Scanner per leggere l'input dall'utente
        Scanner scanner = new Scanner(System.in);

        // Richiesta all'utente di inserire un numero N
        System.out.print("Inserisci un numero N: ");
        
        // Legge il numero N fornito dall'utente
        int N = scanner.nextInt();

        // Inizializza una variabile di controllo per il ciclo
        int i = 1;

        // Stampa il messaggio iniziale
        System.out.println("I cubi dei primi " + N + " numeri sono:");

        // Ciclo while per calcolare e stampare i cubi dei primi N numeri
        while (i <= N) {
            // Calcola il cubo di i
            int cubo = i * i * i;

            // Stampa il risultato
            System.out.println("Il cubo di " + i + " è: " + cubo);

            // Incrementa i per passare al prossimo numero
            i++;
        }

        // Chiude lo Scanner per evitare memory leak
        scanner.close();
    }
}


//Scanner useDelimiter(String): modifica il delimitatore dei token, dove la stringa passata come parametro può essere una espressione regolare (vedi esempio più avanti).//
//Il caso più tipico di utilizzo di un oggetto di classe Scanner è quello che utilizza il metodo nextLine() per leggere una riga intera.

//INPUT DI UNA RIGA DI TESTO DA TASTIERAJava
//import java.util.Scanner;
//public class ProvaScanner {
    //public static void main(String[] args) {
        //Scanner in = new Scanner(System.in); //istanzia un oggetto lettore di tipo Scanner
        //String s = in.nextLine(); //legge una riga di testo e la memorizza nella variabile s
        //System.out.println("Ho letto la riga: " + s);}