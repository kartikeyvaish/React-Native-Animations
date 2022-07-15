// Packages Imports
import { useCallback, useState } from "react";
import {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withSequence,
    withTiming,
} from "react-native-reanimated";

// Easing function for the animation
function easeOutCubic(x: number): number {
    "worklet";
    return 1 - Math.pow(1 - x, 3);
}

// Custom hook to use the animation
export default function useWhatsAppMic() {

    // Shared value for the animation
    const progress = useSharedValue(0);

    // Local States
    const [IsRecording, SetIsRecording] = useState<boolean>(true);

    // function to start the animation
    const StartRecording = useCallback(() => {
        SetIsRecording(true);
    }, []);

    // function to stop the animation
    const StopRecording = useCallback(() => {
        try {
            progress.value = 0;
            SetIsRecording(false);
            progress.value = withSequence(
                withTiming(1, { duration: 800, easing: easeOutCubic }),
                withDelay(100, withTiming(2, { duration: 500 }))
            );
        } catch (error) { }
    }, []);

    // animated Styles for the trash icon container
    const trashAnimatedStyles = useAnimatedStyle(() => {
        const translateY = IsRecording
            ? 100
            : interpolate(progress.value, [0.5, 1], [100, 0], Extrapolate.CLAMP);

        return {
            zIndex: 100,
            transform: [
                {
                    translateY,
                },
            ],
        };
    });

    // animated Styles for the microphone icon container
    const microphoneAnimatedStyles = useAnimatedStyle(() => {
        const translateY = interpolate(progress.value, [0, 1, 2], [0, -100, 0], Extrapolate.CLAMP);
        const scale = IsRecording
            ? 1
            : interpolate(progress.value, [0, 1, 2], [1, 1.4, 0.5], Extrapolate.CLAMP);
        const rotate = IsRecording
            ? 0
            : interpolate(progress.value, [0, 1, 2], [-90, 0, 0], Extrapolate.CLAMP);

        return {
            zIndex: 1,
            transform: [
                {
                    translateY,
                },
                {
                    scale,
                },
                {
                    rotate: `${rotate}deg`,
                },
            ],
        };
    });

    return {
        StartRecording,
        StopRecording,
        trashAnimatedStyles,
        microphoneAnimatedStyles,
        IsRecording
    }

}