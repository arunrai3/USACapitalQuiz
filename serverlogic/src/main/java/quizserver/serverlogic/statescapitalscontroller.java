package quizserver.serverlogic;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoCollection;
import org.bson.Document;


@RestController
public class statescapitalscontroller {

    @Autowired
    private MongoClient mongoClient;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/statesandcapitals")
    public String getStateCapitalData() {
        MongoDatabase database = mongoClient.getDatabase("QuizzesAnswers");
        MongoCollection<Document> collection = database.getCollection("StateCapitals");

        FindIterable<Document> iterable = collection.find().limit(60); 

        StringBuilder sb = new StringBuilder("[");
        
        boolean first = true;
        for (Document doc : iterable) {
            if (!first) {
                sb.append(","); 
            }
            sb.append(doc.toJson());
            first = false;
        }

        sb.append("]");

        return sb.toString();
    }
}
