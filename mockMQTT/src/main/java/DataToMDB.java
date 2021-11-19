import java.time.LocalDateTime;
import java.time.ZoneId;

public class DataToMDB {

    static void sendMeasurement(String topic, double unit_id, double temperature){
        MDB mdb = new MDB(Configurations.mongoDBdatabaseName, topic);
        //mdb.testHandshake("testdocument");
        String documentName = topic + "_" + unit_id + "_T"+ temperature;
        mdb.createAmeasurement(documentName, unit_id, temperature);
        System.out.println("Topic:" + topic + " unit_id:" + unit_id + " temperature:" + temperature);
    }
}
