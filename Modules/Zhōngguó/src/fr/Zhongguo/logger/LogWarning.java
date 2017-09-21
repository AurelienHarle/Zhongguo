package fr.Zhongguo.logger;

import java.util.logging.Level;
import java.util.logging.Logger;

public class LogWarning extends Logger {

	public final static LogWarning LogWarning = new LogWarning("LogWarning",null);
	
	protected LogWarning(String name, String ressourceBundle) {
		
		super(name, ressourceBundle);

	}

	public void Initialize() {

		LogWarning.setLevel(Level.WARNING);
		
		
		
	}

	public static LogWarning getInstance() {
		
		return LogWarning;
		
	}
}
