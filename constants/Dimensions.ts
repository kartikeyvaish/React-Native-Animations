// Packages Imports
import { Dimensions } from 'react-native';

// Const Exports
export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;
export const isSmallDevice = ScreenWidth < 375;

const LayoutConstants = {
    ScreenWidth, ScreenHeight, isSmallDevice,
};

export default LayoutConstants;