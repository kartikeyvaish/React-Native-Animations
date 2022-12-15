// Packages imports
import { ViewToken } from "react-native";
import { SharedValue } from "react-native-reanimated";

// Interface for the item
export interface ItemProps {
    id: number;
}

// Interface for the ListItem component
export interface ListItemProps {
    visibleItems: SharedValue<ViewToken[]>;
    id: number;
}