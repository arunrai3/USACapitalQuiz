package quizserver.serverlogic;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerlogicApplication {

	public static void main(String[] args) {
		initdatabase initDb = new initdatabase();
        initDb.initializeDatabase();
		SpringApplication.run(ServerlogicApplication.class, args);
	}
}
