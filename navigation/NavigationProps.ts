// Packages Imports
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Utils/Types imports  

// App Navigator Screen Params
export type AppStackParamsList = {
    // App Stack Screens
    HomeScreen: undefined;
    AnimatingSlider: undefined;
    BreathingLoader: undefined;
    CircularProgress: undefined;
    Clock: undefined;
    ClockLoader: undefined;
    ColorPicker: undefined;
    CreditCard: undefined;
    GridMagnification: undefined;
    ListRemover: undefined;
    MenuToggler: undefined;
    MoviesSlider: undefined;
    OnBoarding: undefined;
    ParallaxCaraousel: undefined;
    ProgressDots: undefined;
    Ringing: undefined;
    RippleEffect: undefined;
    ShakeItUp: undefined;
    TallyCounter: undefined;
    ThemeChanger: undefined;
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
