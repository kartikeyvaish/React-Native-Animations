// Packages Imports
import { render, fireEvent } from "@testing-library/react-native";

// Local imports
import CardItemCounter from "../animations/Swiggy/components/CardItemCounter";
import Chips from "../animations/Swiggy/components/Chip";
import FetchingRestaurantsLoader from "../animations/Swiggy/components/FetchingRestaurantsLoader";
import FoodSymbol from "../animations/Swiggy/components/FoodSymbol";
import MenuScreenHeader from "../animations/Swiggy/components/MenuScreenHeader";
import RestaurantInfoCard from "../animations/Swiggy/components/RestaurantInfoCard";

// Named Imports
import { getImages } from "../animations/Swiggy/utils/helpers";

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  Reanimated.default.call = () => {};

  const DefaultLayoutAnimation: unknown = {
    delay: (_: number) => DefaultLayoutAnimation,
    duration: (_: number) => DefaultLayoutAnimation,
    withCallback: () => DefaultLayoutAnimation,
    withInitialValues: (_: unknown) => DefaultLayoutAnimation,
    randomDelay: (_: number) => DefaultLayoutAnimation,
  };

  return {
    ...Reanimated,
    FadeIn: DefaultLayoutAnimation,
    FadeOut: DefaultLayoutAnimation,
    BounceIn: DefaultLayoutAnimation,
  };
});

describe("<CardItemCounter />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<CardItemCounter />);
    const cardItem = getByTestId("card-item-test-id");
    expect(cardItem).toBeTruthy();
  });

  it("renders add text when currentValue is less than 1", () => {
    const { queryByTestId } = render(<CardItemCounter />);
    const addText = queryByTestId("add-text-test-id");
    expect(addText).toBeTruthy();
    if (addText) expect(addText.props.children).toBe("ADD");
  });

  it("renders current value when currentValue is greater than or equal to 1", () => {
    const { getByTestId } = render(<CardItemCounter currentValue={2} />);
    const valueText = getByTestId("value-test-id");
    expect(valueText.props.children).toBe(2);
  });

  it("calls onIncrement when currentValue is less than 1 and pressable is pressed", () => {
    const onIncrementMock = jest.fn();
    const { getByTestId } = render(<CardItemCounter onIncrement={onIncrementMock} />);
    const pressable = getByTestId("card-item-test-id");
    fireEvent.press(pressable);
    expect(onIncrementMock).toHaveBeenCalledTimes(1);
  });

  it("calls onDecrement when currentValue is greater than or equal to 1 and minus button is pressed", () => {
    const onDecrementMock = jest.fn();
    const { getByTestId } = render(
      <CardItemCounter currentValue={2} onDecrement={onDecrementMock} />
    );
    const minusButton = getByTestId("minus-button-test-id");
    fireEvent.press(minusButton);
    expect(onDecrementMock).toHaveBeenCalledTimes(1);
  });

  it("calls onIncrement when currentValue is greater than or equal to 1 and plus button is pressed", () => {
    const onIncrementMock = jest.fn();
    const { getByTestId } = render(
      <CardItemCounter currentValue={2} onIncrement={onIncrementMock} />
    );
    const plusButton = getByTestId("plus-button-test-id");
    fireEvent.press(plusButton);
    expect(onIncrementMock).toHaveBeenCalledTimes(1);
  });
});

describe("<Chips />", () => {
  const onPressMock = jest.fn();

  it("renders correctly", () => {
    const { getByTestId } = render(<Chips name='Test Chip' onPress={onPressMock} />);
    const chip = getByTestId("chips-test-id");
    expect(chip).toBeTruthy();
  });

  it("renders name prop correctly", () => {
    const { getByTestId } = render(<Chips name='Test Chip' onPress={onPressMock} />);
    const chipName = getByTestId("chips-name-test-id");
    expect(chipName.props.children).toBe("Test Chip");
  });

  it("calls onPress callback when chip is pressed", () => {
    const { getByTestId } = render(<Chips name='Test Chip' onPress={onPressMock} />);
    const chip = getByTestId("chips-test-id");
    fireEvent.press(chip);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("renders remove icon when isSelected prop is true", () => {
    const { queryByTestId } = render(<Chips name='Test Chip' isSelected onPress={onPressMock} />);
    const removeIcon = queryByTestId("remove-icon-test-id");
    expect(removeIcon).toBeTruthy();
  });

  it("does not render remove icon when isSelected prop is false", () => {
    const { queryByTestId } = render(<Chips name='Test Chip' onPress={onPressMock} />);
    const removeIcon = queryByTestId("remove-icon-test-id");
    expect(removeIcon).toBeNull();
  });

  it("calls onPress callback when remove icon is pressed", () => {
    const { getByTestId } = render(<Chips name='Test Chip' isSelected onPress={onPressMock} />);
    const removeIcon = getByTestId("remove-icon-test-id").children[0];

    if (typeof removeIcon !== "string") {
      fireEvent.press(removeIcon);
    }

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});

describe("<FetchingRestaurantsLoader />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<FetchingRestaurantsLoader />);
    const loaderContainer = getByTestId("fetching-restaurant-loader-container-id");
    expect(loaderContainer).toBeTruthy();
  });

  it("renders text correctly", () => {
    const { getByTestId } = render(<FetchingRestaurantsLoader />);
    const loaderText = getByTestId("fetching-restaurant-loader-text-id");
    expect(loaderText.props.children).toBe("Shortlisting options for you");
  });
});

describe("<FoodSymbol />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<FoodSymbol />);
    const symbolContainer = getByTestId("food-symbol-container-test-id");
    expect(symbolContainer).toBeTruthy();

    const innerContainer = getByTestId("food-symbol-inner-container-test-id");
    expect(innerContainer).toBeTruthy();
  });

  it("renders with default color 'darkgreen'", () => {
    const { getByTestId } = render(<FoodSymbol />);
    const innerContainer = getByTestId("food-symbol-inner-container-test-id");
    const innerContainerStyle = Array.isArray(innerContainer.props.style)
      ? innerContainer.props.style.find(style => style.backgroundColor)
      : innerContainer.props.style;
    expect(innerContainerStyle.backgroundColor).toBe("darkgreen");

    const symbolContainer = getByTestId("food-symbol-container-test-id");
    const symbolContainerStyle = Array.isArray(symbolContainer.props.style)
      ? symbolContainer.props.style.find(style => style.borderColor)
      : symbolContainer.props.style;
    expect(symbolContainerStyle.borderColor).toBe("darkgreen");
  });

  it("renders with specified color'", () => {
    const { getByTestId } = render(<FoodSymbol color='dodgerblue' />);
    const innerContainer = getByTestId("food-symbol-inner-container-test-id");
    const innerContainerStyle = Array.isArray(innerContainer.props.style)
      ? innerContainer.props.style.find(style => style.backgroundColor)
      : innerContainer.props.style;
    expect(innerContainerStyle.backgroundColor).toBe("dodgerblue");

    const symbolContainer = getByTestId("food-symbol-container-test-id");
    const symbolContainerStyle = Array.isArray(symbolContainer.props.style)
      ? symbolContainer.props.style.find(style => style.borderColor)
      : symbolContainer.props.style;
    expect(symbolContainerStyle.borderColor).toBe("dodgerblue");
  });
});

describe("<MenuScreenHeader />", () => {
  const onBackPressMock = jest.fn();

  it("renders correctly", () => {
    const { getByTestId } = render(
      <MenuScreenHeader onBackPress={onBackPressMock} headerTitle='Menu' />
    );
    const headerContainer = getByTestId("menu-screen-header-container-test-id");
    expect(headerContainer).toBeTruthy();
  });

  it("renders the back button", () => {
    const { getByTestId } = render(
      <MenuScreenHeader onBackPress={onBackPressMock} headerTitle='Menu' />
    );
    const backButton = getByTestId("menu-screen-header-button-test-id");
    expect(backButton).toBeTruthy();
  });

  it("calls onBackPress callback when the back button is pressed", () => {
    const { getByTestId } = render(
      <MenuScreenHeader onBackPress={onBackPressMock} headerTitle='Menu' />
    );
    const backButton = getByTestId("menu-screen-header-button-test-id");
    fireEvent.press(backButton);
    expect(onBackPressMock).toHaveBeenCalledTimes(1);
  });

  it("renders the header title correctly", () => {
    const { getByTestId } = render(
      <MenuScreenHeader onBackPress={onBackPressMock} headerTitle='Menu' />
    );
    const headerText = getByTestId("menu-screen-header-text-test-id");
    expect(headerText.props.children).toBe("Menu");
  });
});

describe("<RestaurantInfoCard />", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <RestaurantInfoCard
        restaurantName='Restaurant ABC'
        rating={4.5}
        ratingCountText='500+ ratings'
        location='New York'
        deliveryDuration='30 minutes'
        discountText='20% off'
        distance='2 miles'
        id='1'
        currency='£'
        items={[]}
        restaurantLogo='someLogo'
        isTrending={false}
      />
    );

    const cardContainer = getByTestId("restaurant-info-card-container-test-id");
    expect(cardContainer).toBeTruthy();
  });

  it("renders the restaurant name correctly", () => {
    const { getByTestId } = render(
      <RestaurantInfoCard
        restaurantName='Restaurant ABC'
        rating={4.5}
        ratingCountText='500+ ratings'
        location='New York'
        deliveryDuration='30 minutes'
        discountText='20% off'
        distance='2 miles'
        id='1'
        currency='£'
        items={[]}
        restaurantLogo='someLogo'
        isTrending={false}
      />
    );

    const restaurantName = getByTestId("rest-info-card-name-test-id");
    expect(restaurantName.props.children).toBe("Restaurant ABC");
  });

  it("renders the rating correctly", () => {
    const { getByTestId } = render(
      <RestaurantInfoCard
        restaurantName='Restaurant ABC'
        rating={4.5}
        ratingCountText='500+ ratings'
        location='New York'
        deliveryDuration='30 minutes'
        discountText='20% off'
        distance='2 miles'
        id='1'
        currency='£'
        items={[]}
        restaurantLogo='someLogo'
        isTrending={false}
      />
    );

    const rating = getByTestId("rest-info-card-rating-test-id");
    expect(rating.props.children).toBe("4.5 (500+ ratings)");
  });

  it("renders the location and distance correctly", () => {
    const { getByTestId } = render(
      <RestaurantInfoCard
        restaurantName='Restaurant ABC'
        rating={4.5}
        ratingCountText='500+ ratings'
        location='New York'
        deliveryDuration='30 minutes'
        discountText='20% off'
        distance='2 miles'
        id='1'
        currency='£'
        items={[]}
        restaurantLogo='someLogo'
        isTrending={false}
      />
    );

    const locationDistance = getByTestId("rest-info-card-location-distance-test-id");
    expect(locationDistance.props.children.join("")).toBe("New York, 2 miles");
  });

  it("renders the delivery duration correctly", () => {
    const { getByTestId } = render(
      <RestaurantInfoCard
        restaurantName='Restaurant ABC'
        rating={4.5}
        ratingCountText='500+ ratings'
        location='New York'
        deliveryDuration='30 minutes'
        discountText='20% off'
        distance='2 miles'
        id='1'
        currency='£'
        items={[]}
        restaurantLogo='someLogo'
        isTrending={false}
      />
    );

    const deliveryDuration = getByTestId("rest-info-card-duration-test-id");
    expect(deliveryDuration.props.children).toBe("30 minutes");
  });

  it("renders the discount text correctly", () => {
    const { getByTestId } = render(
      <RestaurantInfoCard
        restaurantName='Restaurant ABC'
        rating={4.5}
        ratingCountText='500+ ratings'
        location='New York'
        deliveryDuration='30 minutes'
        discountText='20% off'
        distance='2 miles'
        id='1'
        currency='£'
        items={[]}
        restaurantLogo='someLogo'
        isTrending={false}
      />
    );

    const discountText = getByTestId("rest-info-card-discount-test-id");
    expect(discountText.props.children).toBe("20% off");
  });
});

describe("getImages util function", () => {
  it("returns an array of images", () => {
    const items: Array<any> = [
      {
        restaurantLogo: "logo1.png",
        items: [{ image: "item1.png" }, { image: "item2.png" }],
      },
      {
        restaurantLogo: "logo2.png",
        items: [{ image: "item3.png" }, { image: "item4.png" }],
      },
    ];

    const result = getImages(items);
    const expected = ["logo1.png", "item1.png", "item2.png", "logo2.png", "item3.png", "item4.png"];

    expect(result).toEqual(expected);
  });

  it("returns an empty array when items array is empty", () => {
    const items: Array<any> = [];

    const result = getImages(items);
    const expected: Array<string> = [];

    expect(result).toEqual(expected);
  });
});
