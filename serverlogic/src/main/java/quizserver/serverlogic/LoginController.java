package quizserver.serverlogic;

import org.springframework.web.bind.annotation.*;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;


import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.springframework.security.crypto.bcrypt.BCrypt;


@RestController
public class LoginController {

    @Autowired
    private MongoClient mongoClient;


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public String registerUser(@RequestBody User newuser) {

        String encryptedPassword = BCrypt.hashpw(newuser.getPassword(), BCrypt.gensalt());

        MongoDatabase database = mongoClient.getDatabase("Accounts");
        MongoCollection<Document> collection = database.getCollection("Users");

        Document newUser = new Document("email", newuser.getEmail())
                                .append("password", encryptedPassword);
        collection.insertOne(newUser);

        return "User registered successfully";
    }
}