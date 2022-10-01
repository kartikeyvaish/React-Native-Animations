// generate a random unique _id
export const GenerateUniqueID = () => {
    return Math.floor(Math.random() * Date.now()).toString();
}