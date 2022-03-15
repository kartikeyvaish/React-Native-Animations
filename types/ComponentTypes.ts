// Packages Imports
import { ColorValue, ScrollViewProps, StyleProp, TextProps, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";

// AnimatedText Props interface
export interface AnimatedTextProps extends AppTextProps, Animated.AnimateProps<any> { }

// interface for AppContainer
export interface AppContainerProps extends ChildrenProps {
    style?: StyleProp<ViewStyle>;
    backgroundColor?: ColorValue;
}

// interface for AppScrollContainer
export interface AppScrollContainerProps extends ChildrenProps, AppContainerProps, ScrollViewProps {
    onRefresh?: () => void;
    refreshing?: boolean;
}

// interface for AppText
export interface AppTextProps extends TextProps, SeperateMarginProps {
    text?: string;
    color?: ColorValue;
    size?: number;
    family?: string;
}

// interface for BorderView
export interface BorderViewProps {
    borderWidth?: number;
    borderColor?: string;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}

// Children interface
export interface ChildrenProps { children?: React.ReactNode; }

// interface for MenuCard
export interface MenuCardProps {
    title: string;
    onPress?: ((pointerInside: boolean) => void) | undefined;
}

// seperate margin props
export interface SeperateMarginProps {
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    margin?: number;
}

// interface for Wrapper
export interface WrapperProps {
    children?: React.ReactNode;
}
