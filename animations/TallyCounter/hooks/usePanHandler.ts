import { Extrapolate, interpolate, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export interface usePanHandlerProps {
    width: number;
    height: number;
    IncreaseCounter: () => void;
    DecreaseCounter: () => void;
}

export default function usePanHandler({ width, height, IncreaseCounter, DecreaseCounter }: usePanHandlerProps) {

    // Shared Value
    const scrollX = useSharedValue(0);

    // handler to handle scroll
    const AnimatedScrollHandler = useAnimatedGestureHandler({
        onActive: event => {
            scrollX.value = event.translationX;
        },
        onFinish: event => {
            if (event.translationX > 0) runOnJS(IncreaseCounter)();
            else if (event.translationX < 0) runOnJS(DecreaseCounter)();
            scrollX.value = withSpring(0);
        },
    });

    // animated styles for the spanning counter container
    const AnimatedStyles = useAnimatedStyle(() => {
        const translateX = interpolate(
            scrollX.value,
            [-((width - 25) / 2), 0, (width - 25) / 2],
            [-(height - 25), 0, height - 25],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ translateX: translateX }],
        };
    });

    // animated style for Plus Icon container
    const AnimatedPlusIconStyles = useAnimatedStyle(() => {
        const scale = interpolate(scrollX.value, [0, (width - 25) / 2], [1, 0], Extrapolate.CLAMP);

        return {
            transform: [
                {
                    scale: scale,
                },
            ],
        };
    });

    // animated styles for Minus Icon container
    const AnimatedMinusIconStyles = useAnimatedStyle(() => {
        const scale = interpolate(scrollX.value, [-((width - 25) / 2), 0], [0, 1], Extrapolate.CLAMP);

        return {
            transform: [
                {
                    scale: scale,
                },
            ],
        };
    });

    return {
        AnimatedScrollHandler,
        AnimatedStyles,
        AnimatedPlusIconStyles,
        AnimatedMinusIconStyles,
    }
}