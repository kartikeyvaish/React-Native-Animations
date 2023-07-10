// Packages Imports (from node_modules)
import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  Image,
  ImageSourcePropType,
  ActivityIndicator,
  Platform,
  Pressable,
} from "react-native";
import Animated, { FadeIn, Layout, SlideOutLeft } from "react-native-reanimated";
import * as ExpoImage from "expo-image";

// Local Imports (components/types/utils)
import AppContainer from "../../../components/AppContainer";
import FetchingRestaurantsLoader from "../components/FetchingRestaurantsLoader";
import useThemeManager from "../../../hooks/useThemeManager";

// Named imports
import { getImages } from "../utils/helpers";
import { NEW_RESTAURANTS } from "../mock/SwiggyMockData";
import { Restaurant } from "../types/Types";
import { ScreenHeight, ScreenWidth } from "../../../constants/Dimensions";
import { SwiggyScreenProps } from "../navigation/NavigationProps";

// interface for CategoriesScreen component
export interface CategoriesScreenProps {}

export interface FoodCategoryItemProps {
  left?: number;
  top?: number;
  bottom?: number;
  atRequiredPlace: boolean;
  layoutEnabled?: boolean;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
  loading?: boolean;
  restaurantName: string;
}

export interface CategoriesContainerProps {
  data: Array<Restaurant>;
  placed?: boolean;
  layoutEnabled?: boolean;
  onItemPress?: () => void;
}

function CategoriesContainer(props: CategoriesContainerProps) {
  // Destrcuturing props
  const { data, placed = true, layoutEnabled = false, onItemPress } = props;

  return (
    <Animated.View style={styles.frame}>
      {data.map((item, index: number) => (
        <FoodCategoryItem
          key={index}
          atRequiredPlace={placed ? true : false}
          left={
            index === data.length - 1
              ? (ScreenWidth - 100) / 2
              : index % 2 === 0
              ? 30
              : ScreenWidth - 100 - 30
          }
          top={
            index === data.length - 1
              ? undefined
              : index <= 1
              ? Platform.OS === "ios"
                ? 100
                : 50
              : (ScreenHeight - 150) / 2
          }
          bottom={index === data.length - 1 ? 50 : undefined}
          layoutEnabled={layoutEnabled}
          imageSource={{ uri: item.restaurantLogo }}
          onPress={onItemPress}
          restaurantName={item.restaurantName}
        />
      ))}
    </Animated.View>
  );
}

function FoodCategoryItem(props: FoodCategoryItemProps) {
  // Destrcuturing props
  const {
    left,
    top,
    bottom,
    atRequiredPlace,
    layoutEnabled,
    imageSource,
    onPress,
    loading,
    restaurantName,
  } = props;

  const { Theme } = useThemeManager();

  const containerStyle: StyleProp<ViewStyle> = [
    styles.foodItemContainer,
    {
      ...(atRequiredPlace
        ? {
            left: left,
            top: top,
            bottom: bottom,
            scale: 1,
          }
        : { left: (ScreenWidth - 100) / 2, bottom: 0 }),
    },
  ];

  return (
    <Animated.View
      layout={layoutEnabled ? Layout.duration(200).springify().damping(10) : undefined}
      style={containerStyle}
    >
      <Pressable onPress={onPress}>
        {imageSource ? (
          <View style={{ width: 100, height: 100, borderRadius: 100 }}>
            <Image
              source={imageSource}
              style={{ width: "100%", height: "100%", borderRadius: 100 }}
            />

            {loading ? <ActivityIndicator size={30} style={styles.loader} /> : null}
          </View>
        ) : null}

        {atRequiredPlace ? (
          <Animated.Text style={[styles.foodName, { color: Theme.colors.text }]}>
            {restaurantName}
          </Animated.Text>
        ) : null}
      </Pressable>
    </Animated.View>
  );
}

// functional component for CategoriesScreen
function CategoriesScreen(props: SwiggyScreenProps<"CategoriesScreen">) {
  // Destructuring props
  const { navigation } = props;

  const [loading, setLoading] = useState(false);
  const [completedLoading, setCompletedLoading] = useState(false);

  useEffect(() => {
    preloadImages();

    setTimeout(() => {
      setCompletedLoading(true);
    }, 1000);

    return () => {};
  }, []);

  const preloadImages = () => {
    let images = getImages(NEW_RESTAURANTS);

    ExpoImage.Image.prefetch(images);
  };

  const { Theme } = useThemeManager();

  const toggleLoading = () => {
    setLoading(true);

    setTimeout(() => {
      navigation.replace("MenuScreen");
    }, 3000);
  };

  // render
  return (
    <AppContainer style={styles.container}>
      {loading ? (
        <FetchingRestaurantsLoader dark={Theme.dark} />
      ) : (
        <Animated.ScrollView
          exiting={SlideOutLeft}
          entering={FadeIn}
          showsVerticalScrollIndicator={false}
        >
          <CategoriesContainer
            data={NEW_RESTAURANTS}
            placed={completedLoading}
            layoutEnabled={true}
            onItemPress={toggleLoading}
          />
          <CategoriesContainer data={NEW_RESTAURANTS} onItemPress={toggleLoading} />
        </Animated.ScrollView>
      )}
    </AppContainer>
  );
}

// exports
export default CategoriesScreen;

// styles for CategoriesScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 500,
  },
  foodItemContainer: {
    position: "absolute",
  },
  frame: {
    width: "100%",
    height: ScreenHeight - 50,
  },
  foodName: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 10,
    alignSelf: "center",
    maxWidth: 100,
  },
  loader: {
    marginTop: 10,
    color: "dodgerblue",
    position: "absolute",
    top: 28,
    left: 35,
  },
});
