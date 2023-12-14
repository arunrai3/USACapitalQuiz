package arun;


import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.bson.Document;
import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.MongoException;
import com.mongodb.ServerApi;
import com.mongodb.ServerApiVersion;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;


public class App 
{
    public static void main(String[] args) {

        String rootFolder = System.getProperty("user.dir");
        String keypath = rootFolder + "\\java_connect_db\\keys\\upass.txt";
        String connectionStringTemplate = "mongodb+srv://<username>:<password>@quizcluster.k7jsdq7.mongodb.net/?retryWrites=true&w=majority";

        String connectionString = getConnectionString(connectionStringTemplate, keypath);

        ServerApi serverApi = ServerApi.builder()
                .version(ServerApiVersion.V1)
                .build();
        MongoClientSettings settings = MongoClientSettings.builder()
                .applyConnectionString(new ConnectionString(connectionString))
                .serverApi(serverApi)
                .build();
        try (MongoClient mongoClient = MongoClients.create(settings)) {
            try {
        
                MongoDatabase database = mongoClient.getDatabase("QuizzesAnswers");
                MongoCollection<Document> collection_statesCapitals = database.getCollection("StateCapitals");
                MongoCollection<Document> collection_countriesCapitals = database.getCollection("CountriesCapitals");

                
                String statesCapitalspath = rootFolder + "\\java_connect_db\\data\\stateCapitals.txt";
                String countriesCapitalspath = rootFolder + "\\java_connect_db\\data\\countriesCapitals.txt";

                Map<String, String> statesCapitals = extractFromTextFile(statesCapitalspath);
                Map<String, String> countriesCapitals = extractFromTextFile(countriesCapitalspath);
    
                insertHashMapIntoMongoDB(statesCapitals, collection_statesCapitals, "state", "capital");
                insertHashMapIntoMongoDB(countriesCapitals, collection_countriesCapitals, "country", "capital");                

                System.out.println("All state capitals inserted successfully");

            } catch (MongoException e) {
                e.printStackTrace();
            }
        }
    }

    private static String getConnectionString(String connectionString, String keyPath) {
        try (BufferedReader br = new BufferedReader(new FileReader(keyPath))) {
            String line = br.readLine();
            if (line != null) {
                String[] credentials = line.split(",");
                if (credentials.length == 2) {
                    String username = credentials[0];
                    String password = credentials[1];
                    return connectionString.replace("<username>", username)
                                           .replace("<password>", password);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return connectionString; 
    }



    private static Map<String, String> extractFromTextFile(String filePath) {
        Map<String, String> dataMap = new HashMap<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 2) {
                    dataMap.put(parts[0], parts[1]);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return dataMap;
    }

    private static void insertHashMapIntoMongoDB(Map<String, String> dataMap, MongoCollection<Document> collection, String keyField, String valueField) {
        for (Map.Entry<String, String> entry : dataMap.entrySet()) {
            Document doc = new Document(keyField, entry.getKey())
                               .append(valueField, entry.getValue());
            collection.insertOne(doc);
        }
    }
}
