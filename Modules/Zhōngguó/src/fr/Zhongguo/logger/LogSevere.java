package fr.Zhongguo.logger;

import java.util.logging.Level;
import java.util.logging.Logger;

public class LogSevere extends Logger {

	public final static LogSevere logSevere = new LogSevere("LogSevere",null);
	
	protected LogSevere(String name, String ressourceBundle) {
		
		super(name, ressourceBundle);
		
		// TODO Auto-generated constructor stub
	}

	public void Initialize() {

		logSevere.setLevel(Level.SEVERE);
		
		
		
	}

	public static LogSevere getInstance() {
		
		return logSevere;
		
	}
}
