import ColorPallete from "../utils/ColorPallete"

const dark = {
    colors: {
        primary: ColorPallete.dodgerBlue,
        background: ColorPallete.black,
        card: ColorPallete.black,
        text: ColorPallete.white,
        border: ColorPallete.white,
        notification: ColorPallete.black,
    },
    dark: true,
}

const light = {
    colors: {
        primary: ColorPallete.dodgerBlue,
        background: ColorPallete.white,
        card: ColorPallete.white,
        text: ColorPallete.black,
        border: ColorPallete.black,
        notification: ColorPallete.white,
    },
    dark: false,
}

export default { dark, light }