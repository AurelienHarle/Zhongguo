/**
 * 
 */
package fr.Zhongguo.main;

import java.io.IOException;

import fr.Zhongguo.config.NiveauLogger;
import fr.Zhongguo.exception.NiveauException;
import fr.Zhongguo.logger.LogManager;

/**
 * @author edge
 *
 */
public class Main {

	/**
	 * @param args
	 * @throws IOException 
	 * @throws SecurityException 
	 */
	public static void main(String[] args) throws SecurityException, IOException {
		//Initialisation du LogManager
				LogManager logManager = LogManager.getInstance();
				
				try {
					
					logManager.initLogger(NiveauLogger.ALL);
					
				} catch (NiveauException e) {
					
					e.printStackTrace();
					
				}
				

				logManager.readConfiguration();

	}

}
