/**
 * 
 */
package fr.Zhongguo.test;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

import fr.Zhongguo.config.NiveauLogger;
import fr.Zhongguo.exception.NiveauException;
import fr.Zhongguo.logger.LogManager;

/**
 * @author edge
 *
 */
public class MainTest {

	@Test	
	public void testInitLogManager() {
		
		//Initialisation conditionInitialisation
		boolean conditionInitialisation = true;
		
		//Initialisation du LogManager
		LogManager logManager = LogManager.getInstance();

		try {
			
			logManager.initLogger(NiveauLogger.ALL);
			
		} catch (NiveauException e) {
			conditionInitialisation = false;
			e.printStackTrace();
			
		}
		
		assertTrue("Initialisation du logManager Sucess = ",conditionInitialisation);
		
		
	}
}
