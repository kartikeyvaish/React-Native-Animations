export interface FilterItemProps {
    id: string;
    name: string;
}

// interface for Chips component
export interface ChipsProps {
    name: string;
    isSelected?: boolean;
    onPress?: () => void;
}

// interface for MenuScreenHeader component
export interface MenuScreenHeaderProps {
    onBackPress?: () => void;
    headerTitle?: string;
}

// interface for RestaurantCard component
export interface RestaurantCardProps { }