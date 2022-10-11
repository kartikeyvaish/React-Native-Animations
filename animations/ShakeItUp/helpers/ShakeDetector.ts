// Packages imports
import { Accelerometer } from 'expo-sensors';

// Constants
// Threshold for the sensor to trigger a shake
const THRESHOLD = 150;

// ShakeDetector class
export class ShakeDetector {
    static addListener(handler: () => void) {
        let last_x: number, last_y: number, last_z: number;
        let lastUpdate = 0;

        Accelerometer.addListener(accelerometerData => {
            let { x, y, z } = accelerometerData;
            let currTime = Date.now();

            if ((currTime - lastUpdate) > 100) {
                let diffTime = (currTime - lastUpdate);
                lastUpdate = currTime;
                let speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

                if (speed > THRESHOLD) {
                    handler();
                }

                last_x = x;
                last_y = y;
                last_z = z;
            }
        });
    }

    static removeListener() {
        Accelerometer.removeAllListeners()
    }
};