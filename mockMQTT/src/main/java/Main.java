import java.security.SecureRandom;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello world!");
        //MDB mdb = new MDB("yolo", "testTopic");
        //mdb.testHandshake("testdocument");
        //DataToMDB.sendMeasurement("hello", 4.2, 1.3);
        //recordGenerator("hello");
        streamGenerator(3);
    }

    public static void streamGenerator(int topics){
        while(true){
            for(int x=0; x<topics; x++){
                String topic = "measurements";
                recordGenerator(topic, x);

                //Just to delay it a bit
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public static void recordGenerator(String topic, double unitid){
        SecureRandom rand = new SecureRandom();
        //double unitid = rand.nextDouble() * 10000;
        double temperature = rand.nextInt(25);
        DataToMDB.sendMeasurement(topic, unitid, temperature);
    }
}
