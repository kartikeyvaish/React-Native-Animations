import { SharedValue } from "react-native-reanimated";

// interface for ProgressDots component
export interface ProgressDotsProps {
    dotColor?: string;
    loading?: boolean;
    dotBounceHeight?: number;
}

// interface for Dots
export interface DotsProps extends ProgressDotsProps {
    dotProgress: SharedValue<number>;
}