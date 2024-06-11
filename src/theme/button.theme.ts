import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const navigation = defineStyle({
    border: 'none', // change the appearance of the border
    borderRadius: '8px', // remove the border radius
    fontWeight: 'semibold', // change the font weight
    background: 'secondary.500', // change the background color
    color: 'white', // change the text color
    _hover: {
        background: 'secondary.500', // change the background color on hover
    },
    _active: {
        background: 'secondary.500', // change the background color when active
    },
    _focus: {
        boxShadow: 'none', // remove the focus shadow
    },
    _disabled: {
        background: 'secondary.600', // change the background color when disabled
    },
})

const navigation_ghost = defineStyle({
    border: 'none', // change the appearance of the border
    borderRadius: '8px', // remove the border radius
    fontWeight: 'semibold', // change the font weight
    background: 'none', // change the background color
    color: 'white', // change the text color
    _hover: {
        background: 'secondary.500', // change the background color on hover
    },
    _active: {
        background: 'secondary.500', // change the background color when active
    },
    _focus: {
        boxShadow: 'none', // remove the focus shadow
    },
    _disabled: {
        background: 'secondary.600', // change the background color when disabled
    },
})

export const buttonTheme = defineStyleConfig({
    variants: { navigation, navigation_ghost },
})