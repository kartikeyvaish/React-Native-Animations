const components: any = [
    {
        id: "1",
        name: "Clock",
        screen: "Clock",
        description: "A simple clock with animated hands which shows the current time.",
        colors: ['#05C1E2', "#A86EF7"]
    },
    {
        id: "2",
        name: "Clock Loader",
        screen: "ClockLoader",
        description: "A loading animation resembling a clock which throws chunks outwards and then inwards.",
        colors: ['#DA1B60', '#E33649', "#F87512"]
    },
    {
        id: "3",
        name: "Movies Slider",
        screen: "MoviesSlider",
        description: "An interactive slider that showcases popular movies with stunning animations.",
        colors: ['#DA1B60', '#E33649', "#F87512"]
    },
    {
        id: "4",
        name: "Parallax Carousel",
        screen: "ParallaxCarousel",
        description: "A mesmerizing carousel with parallax effects for an immersive user experience.",
        colors: ['#05C1E2', "#A86EF7"]
    },
    {
        id: "5",
        name: "Ringing",
        screen: "Ringing",
        description: "An elegant ringing animation like a phone call, perfect for incoming calls.",
        colors: ['#05C1E2', "#A86EF7"]
    },
    {
        id: "6",
        name: "Breathing Loader",
        screen: "BreathingLoader",
        description: "A breathing loader that pulsates smoothly, perfect for indicating ongoing processes.",
        colors: ['#DA1B60', '#E33649', "#F87512"]
    },
    {
        id: "7",
        name: "Tally Counter",
        screen: "TallyCounter",
        description: "A digital tally counter that increments and decrements with a pan gesture.",
        colors: ['#DA1B60', '#E33649', "#F87512"]
    },
    {
        id: "8",
        name: "Volume Slider",
        screen: "VolumeSlider",
        description: "A volume slider for adjusting audio levels with smooth animation.",
        colors: ['#05C1E2', "#A86EF7"]
    },
    {
        id: "9",
        name: "Progress Dots",
        screen: "ProgressDots",
        description: "A progress indicator with animated dots that bounces one after the other. Good for showing typing progress.",
        colors: ['#05C1E2', "#A86EF7"]
    },
    {
        id: "10",
        name: "Menu Toggler",
        screen: "MenuToggler",
        description: "A tab toggler, good for showing animated bottom tab bars",
        colors: ['#DA1B60', '#E33649', "#F87512"]
    },
    {
        id: "12",
        name: "Animating Slider",
        screen: "AnimatingSlider",
        colors: ['#DA1B60', '#E33649', "#F87512"],
        description: "A slider with animated transitions between slides."
    },
    {
        id: "13",
        name: "Credit Card",
        screen: "CreditCard",
        colors: ['#05C1E2', "#A86EF7"],
        description: "A credit card with smooth and subtle animations."
    },
    {
        id: "14",
        name: "List Remover",
        screen: "ListRemover",
        colors: ['#05C1E2', "#A86EF7"],
        description: "A list remover that animates the removal of list items."
    },
    {
        id: "15",
        name: "WhatsApp Mic",
        screen: "WhatsAppMic",
        colors: ['#DA1B60', '#E33649', "#F87512"],
        description: "Replica of Whatsapp audio recording mic with animated transitions."
    },
    {
        id: "16",
        name: "Grid Magnification",
        screen: "GridMagnification",
        colors: ['#DA1B60', '#E33649', "#F87512"],
        description: "Uses power of RN Skia and Reanimated to create a grid magnification effect."
    },
    {
        id: "17",
        name: "Color Picker",
        screen: "ColorPicker",
        colors: ['#05C1E2', "#A86EF7"],
        description: "A color picker that animates between colors."
    },
    {
        id: "18",
        name: "Ripple Effect",
        screen: "RippleEffect",
        colors: ['#05C1E2', "#A86EF7"],
        description: "A ripple effect that animates outwardly from a touch."
    },
    {
        id: "19",
        name: "OnBoarding Screen",
        screen: "OnBoarding",
        colors: ['#DA1B60', '#E33649', "#F87512"],
        description: "An onboarding screen with animated transitions."
    },
    {
        id: "20",
        name: "Circular Progress",
        screen: "CircularProgress",
        colors: ['#DA1B60', '#E33649', "#F87512"],
        description: "A circular progress indicator with animated progress."
    },
    {
        id: "21",
        name: "Theme Changer",
        screen: "ThemeChanger",
        colors: ['#05C1E2', "#A86EF7"],
        description: "A theme changer that animates between themes."
    },
    {
        id: "22",
        name: "Shake It Up",
        screen: "ShakeItUp",
        colors: ['#05C1E2', "#A86EF7"],
        description: "Shake your phone to animate the list."
    },
    {
        id: "23",
        name: "Flip Card",
        screen: "FlipCard",
        colors: ['#DA1B60', '#E33649', "#F87512"],
        description: "A flip card with animated transitions."
    },
    {
        id: "24",
        name: "Animated Flatlist",
        screen: "AnimatedFlatlist",
        colors: ['#DA1B60', '#E33649', "#F87512"],
        description: "A flatlist with animated transitions."
    },
    {
        id: "25",
        name: "Animated Timer",
        screen: "AnimatedTimer",
        colors: ['#05C1E2', "#A86EF7"],
        description: "A timer with animated transitions."
    },
    {
        id: "26",
        name: "Animated OTP Input",
        screen: "AnimatedOTPInput",
        colors: ['#05C1E2', "#A86EF7"],
        description: "OTP Input with haptics and animated input."
    },
    {
        id: "27",
        name: "Metaball Animation",
        screen: "MetaballAnimation",
        colors: ['#DA1B60', '#E33649', "#F87512"],
        description: "A sticky ball which comes to rest with spring animation when pulled and released."
    },
    {
        id: "28",
        name: 'Fling Card Stack',
        screen: 'FlingCardStackScreen',
        colors: ['#DA1B60', '#E33649', "#F87512"],
        description: "A fling card stack with animated transitions."
    },
    {
        id: "29",
        name: 'Swiggy Try Something New',
        screen: 'SwiggyScreen',
        colors: ['#05C1E2', "#A86EF7"],
        description: "Swiggy New UI Replica with loaders and animated list"
    },
    {
        id: '30',
        name: 'Delayed Text',
        screen: 'DelayedText',
        colors: ['#05C1E2', "#A86EF7"],
        description: "See the text growing with delay."
    },
    {
        id: '31',
        name: 'Parookaville Fling List',
        screen: 'ParookavilleScreen',
        colors: ['#DA1B60', '#E33649', "#F87512"],
        description: "Replica of Parookaville 2023 lineup with animations and effects."
    },
    {
        id: '32',
        name: 'Ola Loader',
        screen: 'OlaLoaderScreen',
        colors: ['#DA1B60', '#E33649', "#F87512"],
        description: "Replica of Ola Loading Screen. Open the animation to search for a ride."
    },
    {
        id: '33',
        name: 'Draggable Popover',
        screen: 'DraggablePopOverScreen',
        colors: ['#05C1E2', "#A86EF7"],
        description: 'A draggable popover which can be dragged to any corner of the screen. Longpress on the popover to activate menu.'
    },
    {
        id: '34',
        name: 'Animated Dropdown',
        screen: 'AnimatedDropdown',
        colors: ['#05C1E2', "#A86EF7"],
        description: 'A dropdown with animated transitions.'
    },
    {
        id: '35',
        name: 'Slide To Pay',
        screen: 'SlideToPay',
        colors: ['#DA1B60', '#E33649', "#F87512"],
        description: 'A slide to pay screen with animated transitions.'
    },
    {
        id: '36',
        name: 'Airbnb Timer',
        screen: 'AirbnbTimerScreen',
        colors: ['#05C1E2', "#A86EF7"],
        description: 'Airbnb like timer in a card. Explore Section'
    }
]

export default components;