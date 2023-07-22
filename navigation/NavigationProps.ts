// Packages Imports
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Utils/Types imports  

// App Navigator Screen Params
export type AppStackParamsList = {
    // App Stack Screens
    HomeScreen: undefined;
    AnimatedFlatlist: undefined;
    AnimatedOTPInput: undefined;
    AnimatingSlider: undefined;
    AnimatedTimer: undefined;
    BreathingLoader: undefined;
    CircularProgress: undefined;
    Clock: undefined;
    ClockLoader: undefined;
    ColorPicker: undefined;
    CreditCard: undefined;
    DelayedText: undefined;
    FlingCardStackScreen: undefined;
    FlipCard: undefined;
    GridMagnification: undefined;
    ListRemover: undefined;
    MenuToggler: undefined;
    MetaballAnimation: undefined;
    MoviesSlider: undefined;
    OnBoarding: undefined;
    ParallaxCaraousel: undefined;
    ParookavilleScreen: undefined;
    ProgressDots: undefined;
    Ringing: undefined;
    RippleEffect: undefined;
    ShakeItUp: undefined;
    SwiggyScreen: undefined;
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
