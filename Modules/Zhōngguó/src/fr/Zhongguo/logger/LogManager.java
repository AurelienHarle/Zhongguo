package fr.Zhongguo.logger;

import java.util.logging.Level;
import java.util.logging.Logger;

import fr.Zhongguo.config.NiveauLogger;
import fr.Zhongguo.exception.NiveauException;

public class LogManager extends java.util.logging.LogManager {
	
	public final static LogManager logManager = new LogManager();
	
	private LogManager() {
		
	}
	
	/**
	 * Retourne L'instance du LogManager
	 * @return {@link LogManager} logManager
	 */
	public static LogManager getInstance() {
		
		return logManager;
	}

	/**
	 * Initialise les differents Loggers de chaque niveau
	 * @param string 
	 * @throws NiveauException 
	 */
	public void initLogger(NiveauLogger niveauLogger) throws NiveauException {
		
		switch(niveauLogger) {
		
		case ALL:
			
			initLoggerInfo();
			initLoggerConfig();
			initLoggerWarning();
			initLoggerSevere();
			
			break;
		case INFO:
				
			initLoggerInfo();
			initLoggerConfig();
			initLoggerWarning();
			initLoggerSevere();
			
			break;
		case CONFIG:
			
			initLoggerConfig();
			initLoggerWarning();
			initLoggerSevere();
			
			break;
		case WARNING:
	
			initLoggerWarning();
			initLoggerSevere();
			
			break;
		case SEVERE:

			initLoggerSevere();

			break;
		case OFF:
			
			break;
		default:
			throw new NiveauException();
		}
		
		
		
		
	}
	
	/**
	 * Initialise le {@link Logger} {@link Level} Severe
	 */
	private void initLoggerSevere() {
		
		LogSevere logSevere = LogSevere.getInstance();
		addLogger(logSevere);

	}
	
	/**
	 * Initialise le {@link Logger} {@link Level} Warning
	 */
	private void initLoggerWarning() {
		
		LogWarning logWarning = LogWarning.getInstance();
		addLogger(logWarning);
		
	}
	
	/**
	 * Initialise le {@link Logger} {@link Level} Config
	 */
	private void initLoggerConfig() {
		
		LogConfig logConfig = LogConfig.getInstance();
		addLogger(logConfig);
		
	}
	
	/**
	 * Initialise le {@link Logger} {@link Level} Info
	 */
	private void initLoggerInfo() {
		
		LogInfo logInfo = LogInfo.getInstance();
		addLogger(logInfo);
		
	}

}
