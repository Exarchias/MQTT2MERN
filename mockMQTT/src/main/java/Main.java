public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        //MDB mdb = new MDB("yolo", "testTopic");
        //mdb.testHandshake("testdocument");
        DataToMDB.sendMeasurement("hello", 4.2, 1.3);
    }
}
