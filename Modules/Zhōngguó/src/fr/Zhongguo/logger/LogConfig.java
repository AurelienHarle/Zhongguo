package fr.Zhongguo.logger;

import java.util.logging.Level;
import java.util.logging.Logger;

public class LogConfig extends Logger {

	public final static LogConfig logSevere = new LogConfig("LogSevere",null);
	
	protected LogConfig(String name, String ressourceBundle) {
		
		super(name, ressourceBundle);
		
		// TODO Auto-generated constructor stub
	}

	public void Initialize() {

		logSevere.setLevel(Level.SEVERE);
		
		
		
	}

	public static LogConfig getInstance() {
		
		return logSevere;
		
	}
}
