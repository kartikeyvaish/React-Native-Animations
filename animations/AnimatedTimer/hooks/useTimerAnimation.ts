// Packages Imports
import { useState } from "react";
import {
    Easing,
    runOnJS,
    useAnimatedReaction,
    useAnimatedScrollHandler,
    useSharedValue,
    withDelay,
    withSequence,
    withTiming,
} from "react-native-reanimated";

// Local imports
import { ScreenHeight, ScreenWidth } from "../../../constants/Dimensions";
import { TIMINGS } from "../constants/Constants";

// Custom hook to manage timer animation
export default function useTimerAnimation() {
    // Local States
    const [buttonVisible, setButtonVisible] = useState<boolean>(true);
    const [timerCounter, SetTimerCounter] = useState(0);

    // Shared values
    const scrollX = useSharedValue(0);
    const transalteY = useSharedValue(0);

    // animted reaction for timer count update
    useAnimatedReaction(
        () => {
            // calculate the number at which flatlist has been scrolled till
            const index = Math.round(scrollX.value / ScreenWidth);
            const numerator = transalteY.value > 0 ? transalteY.value : 1;
            const denominator = ScreenHeight;
            const percentage = (numerator / denominator) * 100;
            runOnJS(SetTimerCounter)(Math.round((percentage / 100) * TIMINGS[index]));
        },
        (_, __) => { },
        [transalteY]
    );

    // function to start the animation
    const startAnimation = () => {
        setButtonVisible(false);

        // calculate the number at which flatlist has been scrolled till
        const index = Math.round(scrollX.value / ScreenWidth);
        const duration = TIMINGS[index] * 1000;

        transalteY.value = withSequence(
            withDelay(1000, withTiming(0, { duration: 0 })),
            withTiming(ScreenHeight, { duration: duration, easing: Easing.linear }, () => runOnJS(onEnd)())
        );
    };

    // function to execute on animation end
    const onEnd = () => setTimeout(() => setButtonVisible(true), 1000);

    // function to handle scroll
    const onScroll = useAnimatedScrollHandler(event => (scrollX.value = event.contentOffset.x));

    // return the states and functions
    return { buttonVisible, startAnimation, onScroll, transalteY, timerCounter, };
}