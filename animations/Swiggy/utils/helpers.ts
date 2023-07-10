import { Restaurant } from "../types/Types";

export const getImages = (items: Array<Restaurant>) => {
    let images: Array<string> = [];

    // Loop over each restaurant's items array and add the item image to the images array
    items.forEach(item => {
        images.push(item.restaurantLogo);

        console.log(`Restaurant: ${item.restaurantName} has ${item.items.length} items`);
        item.items.forEach(item => {
            images.push(item.image);
        });
    });

    return images;
};