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

import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;

import static com.mongodb.client.model.Filters.*;
import static com.mongodb.client.model.Updates.*;

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

}
