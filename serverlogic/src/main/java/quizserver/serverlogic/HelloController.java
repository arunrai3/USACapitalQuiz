package quizserver.serverlogic;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoCollection;
import org.bson.Document;


@RestController
public class HelloController {

    @Autowired
    private MongoClient mongoClient;

    @RequestMapping("/hello")
    public String hello() {
        MongoDatabase database = mongoClient.getDatabase("QuizzesAnswers");
        MongoCollection<Document> collection = database.getCollection("StateCapitals");

        FindIterable<Document> iterable = collection.find().limit(60); 

        StringBuilder sb = new StringBuilder();
        for (Document doc : iterable) {
            sb.append(doc.toJson()).append("\n");
        }

        return sb.toString();
    }
}
