import Animated from "react-native-reanimated";

export type DropdownProps = {
    header: DropdownItemType;
    options: DropdownItemType[];
};

export type DropdownItemType = {
    label: string;
    onPress?: () => void;
};

export type DropdownListItemProps = DropdownItemType & {
    index: number;
    dropdownItemsCount: number;
    isExpanded: Animated.SharedValue<boolean>;
};