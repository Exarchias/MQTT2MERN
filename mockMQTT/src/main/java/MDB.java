import com.mongodb.*;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;

import com.mongodb.client.model.UpdateOptions;
import com.mongodb.client.result.*;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;

import static com.mongodb.client.model.Filters.*;
import static com.mongodb.client.model.Updates.*;
import java.time.LocalTime; // import the LocalTime class

public class MDB {
    MongoClient client;
    MongoDatabase database;
    MongoCollection<Document> collection;

    MDB(String databasename, String collectionname){
        this.client = MongoClients.create(Configurations.MongoDBUri + Configurations.MongoDBPort);

        //Just a first thought. I will probably add some of the parameters on the constructor
        this.database = client.getDatabase(databasename);
        this.collection = database.getCollection(collectionname);
    }

    void testHandshake(String documentname){
        //creating
        Document toy = new Document("name", documentname).append("ages", new Document("min", 5));
        ObjectId id = collection.insertOne(toy).getInsertedId().asObjectId().getValue();

        //confirming
        //finds the document by its name namely inside the collection
        Document theDocument = collection.find(new Document("name", documentname)).first();
        //it prints the document as a JSON
        System.out.println(theDocument.toJson());
    }

    void createAmeasurement(String documentname, double unit_id, double temperature){
        LocalDateTime localDateTime = LocalDateTime.now();
        Document toy = new Document("name", documentname).append("unit_id", unit_id);
        //temperature:15.5
        toy.append("temperature", temperature);
        long timestamp = localDateTime
                .atZone(ZoneId.systemDefault())
                .toInstant().toEpochMilli();
        //unix_timestamp:1630570855001
        toy.append("unix_timestamp", timestamp);
        //created_at:"2021-09-30T08:20:55.009Z"
        toy.append("created_at", localDateTime);
        //created_at:"2021-09-30T08:20:55.009Z"
        toy.append("updated_at", localDateTime);
        ObjectId id = collection.insertOne(toy).getInsertedId().asObjectId().getValue();

    }

}
