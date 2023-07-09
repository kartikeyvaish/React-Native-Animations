
import { ReactNode } from 'react';
import { ViewStyle, StyleProp } from 'react-native';

export interface FilterItemProps {
    id: string;
    name: string;
}

// interface for Chips component
export interface ChipsProps {
    name: string;
    isSelected?: boolean;
    onPress?: () => void;
    containerStyles?: StyleProp<ViewStyle>
    children?: ReactNode
}

// interface for MenuScreenHeader component
export interface MenuScreenHeaderProps {
    onBackPress?: () => void;
    headerTitle?: string;
}

// interface for RestaurantCard component
export interface RestaurantCardProps { }

export interface Restaurant {
    id: string;
    restaurantName: string;
    location: string;
    distance: string;
    discountText: string;
    rating: number;
    ratingCountText: string;
    deliveryDuration: string;
    items: MenuItem[];
}

export interface MenuItem {
    isVegetarian: boolean;
    name: string;
    price: number;
    currency: string;
    image: string;
    description: string;
    isCustomizable: boolean;
}