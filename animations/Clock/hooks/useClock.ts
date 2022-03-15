// packages Imports
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useSharedValue, withTiming } from "react-native-reanimated";

// Local Imports
import { TICK_INTERVAL } from "../constants/Constants";

// function to round a number to n decimal places
function Round(value: number, precision: number) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

// custom hook to manage clock values
export default function useClock() {
    const secondsValue = useSharedValue(dayjs().second());
    const minutesValue = useSharedValue(dayjs().minute());
    const hoursValue = useSharedValue(dayjs().hour() % 12);

    // Local State
    const [AnalogTime, SetAnalogTime] = useState(dayjs().format("hh:mm:ss A"));

    // Initial Timer
    useEffect(() => {
        let seconds = dayjs().second();
        let minutes = dayjs().minute();
        let HR_24 = dayjs().hour();
        let hours = HR_24 % 12;

        if (dayjs().minute() > 1 && dayjs().minute() < 59) {
            let tempHour = minutes / 60;
            hoursValue.value = hours + Round(tempHour, 1);
        }

        const ticker = setInterval(() => {
            if (seconds === 59) {
                secondsValue.value = 0;
                seconds = 0;

                if (minutes === 59) {
                    minutesValue.value = 0;
                    minutes = 0;

                    if (hours === 11) {
                        hoursValue.value = 0;
                        hours = 0;
                    } else {
                        hours += 1;
                        hoursValue.value = withTiming(hours);
                    }
                } else if (minutes > 1 && minutes < 59) {
                    let tempHour = minutes / 60;
                    hoursValue.value = hours + Round(tempHour, 1);

                    minutes += 1;
                    minutesValue.value = withTiming(minutes);
                } else {
                    minutes += 1;
                    minutesValue.value = withTiming(minutes);
                }
            } else {
                seconds += 1;
                secondsValue.value = withTiming(seconds);
            }

            SetAnalogTime(`${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds} ${HR_24 > 12 ? "PM" : "AM"}`);

        }, TICK_INTERVAL);

        return () => {
            clearInterval(ticker);
        };
    }, []);

    // return the shared values
    return { secondsValue, minutesValue, hoursValue, AnalogTime };
}