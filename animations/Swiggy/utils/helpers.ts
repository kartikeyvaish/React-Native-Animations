import { Restaurant } from "../types/Types";

export const getImages = (items: Array<Restaurant>) => {
    let images: Array<string> = [];

    // Loop over each restaurant's items array and add the item image to the images array
    items.forEach(item => {
        images.push(item.restaurantLogo);

        item.items.forEach(item => {
            images.push(item.image);
        });
    });

    return images;
};