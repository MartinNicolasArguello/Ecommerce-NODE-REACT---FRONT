import { extendTheme } from '@chakra-ui/react'

import '@fontsource/merriweather'
export const theme = extendTheme({
    colors: {
        brand: {
            black: '#080705',
            charcoal: '#40434E',
            wine: '#702632',
            cordovan: '#912F40',
            babypowder: '#FFFFFA',
            lightblue: '#B8DBD9',
            oldrose: '#C98986',
            coolgray: '#8E8DBE',
            butterscotch: '#DF9A57',
            gold: '#C89933'
        },
    },
    fonts: {
        heading: `'Merriweather', sans-serif`,
        body: `'Merriweather', sans-serif`,
    },

});



