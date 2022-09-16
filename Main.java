import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;

import java.net.InetSocketAddress;
import java.util.Map;

//For compiling on the shell on repl: Same on mac
//javac -cp sqlite-jdbc-3.23.1.jar: Main.java
//java -cp sqlite-jdbc-3.23.1.jar: Main

//Use for windows
//javac -cp sqlite-jdbc-3.23.1.jar; Main.java
public class Main {

    public static void main(String[] args) throws IOException {

      // create a port - our Gateway
      int port = 8500;
      
      //create the HTTPserver object
      HttpServer server = HttpServer.create(new InetSocketAddress(port),0);
      
      Database db = new Database("jdbc:sqlite:petstore.db");
      
      //create a route handler to repond the a request
      // this is our default route
      server.createContext("/", new RouteHandler("Welcome to our Pet Store!!! This is the main route") );

     
      
      String sql1 = "select * from pet; ";
      server.createContext("/pets", new RouteHandler(db,sql1) );
     
      
      String sql2 = "select * from petSupplies ";
      server.createContext("/petsupplies", new RouteHandler(db,sql2) );

      String sql3 = "select * from pet where petCategory in('Dog'); ";
      server.createContext("/pets/dog", new RouteHandler(db,sql3));

      String sql4 = "select * from pet where petCategory in('Cat'); ";
      server.createContext("/pets/cat", new RouteHandler(db,sql4));
      

      String sql5 = "select * from pet where breed in('Persian');  " ;
      server.createContext("/pets/persian", new RouteHandler(db,sql5));

      String sql6 = "select * from pet where breed in('Ragdoll'); " ;
      server.createContext("/ragdoll", new RouteHandler(db,sql6));


      String sql7 = "select * from pet where petCategory in('Rabbit','Hamster') " ;
      server.createContext("/pets/other", new RouteHandler(db,sql7));


      String sql8 = "select distinct petsupplies.itemcategory, pet.petname, pet.breed, pet.petprice from PetSupplies inner Join pet on petsupplies.petCategory = pet.petcategory order by pet.petname; "; 

      server.createContext("/pets/items", new RouteHandler(db,sql8));


     String sql9 = "select * from pet where breed in('Domestic');  " ;
      server.createContext("/pets/domestic", new RouteHandler(db,sql9));


      String sql10 = "select * from pet where breed in('Poodle');   " ;
      server.createContext("/pets/poodle", new RouteHandler(db,sql10));

      String sql11 = "select * from PetSupplies where petCategory = 'Dog' and itemCategory in('Food','Treats', 'Bowl'); ";
      server.createContext("/dogsupply", new RouteHandler(db,sql11));


      String sql12 = "select * from pet where breed = 'Golden Retriever'; ";
      server.createContext("/gold", new RouteHandler(db,sql12));

      String sql13 = "select * from PetSupplies where petCategory = 'Cat' and itemCategory in('Cage','Toys', 'WaterFountain'); " ;
      server.createContext("/catsupply", new RouteHandler(db,sql13));


      String sql14 = "select * from PetSupplies where petCategory = 'Rabbit' and itemCategory in('Cage','Food');";
      server.createContext("/rabbitsupply", new RouteHandler(db,sql14));
      
      
      
      

      

      
      

      

      
      
     
      

      

      
      
      
      
      //Start the server
      server.start();

      System.out.println("Server is listening on port "+port);
      

      

      
    }    
}


