package fr.Zhongguo.logger;

import java.util.logging.Level;
import java.util.logging.Logger;

public class LogInfo extends Logger {

	public final static LogInfo logSevere = new LogInfo("LogSevere",null);
	
	protected LogInfo(String name, String ressourceBundle) {
		
		super(name, ressourceBundle);
		
		// TODO Auto-generated constructor stub
	}

	public void Initialize() {

		logSevere.setLevel(Level.SEVERE);
		
		
		
	}

	public static LogInfo getInstance() {
		
		return logSevere;
		
	}
}
