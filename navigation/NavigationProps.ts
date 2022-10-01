// Packages Imports
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Utils/Types imports  

// App Navigator Screen Params
export type AppStackParamsList = {
    // App Stack Screens
    HomeScreen: undefined;
    AnimatingSlider: undefined;
    BreathingLoader: undefined;
    Clock: undefined;
    ClockLoader: undefined;
    CreditCard: undefined;
    GridMagnification: undefined;
    ListRemover: undefined;
    MenuToggler: undefined;
    MoviesSlider: undefined;
    ParallaxCaraousel: undefined;
    ProgressDots: undefined;
    Ringing: undefined;
    TallyCounter: undefined;
    VolumeSlider: undefined;
    WhatsAppMic: undefined;
};

// Props for App Navigator's Screens
export type AppScreenProps<Screen extends keyof AppStackParamsList> = NativeStackScreenProps<
    AppStackParamsList,
    Screen
>;

// Screen Names types for AppNavigator
export type AppScreenNamesTypes = {
    [key in keyof AppStackParamsList]: any;
};
