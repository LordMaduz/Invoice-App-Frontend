import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import { textStyles } from './styles/text-styles'
import { buttonProps as Button } from './styles/button-props'
import { inputProps as Input } from './styles/input-props'
import { selectProps as Select } from './styles/select-props'

const config = {
   initialColorMode: 'dark',
}

const sizes = {
   sizes: {
      container: {
         sm: '100%',
         md: '768px',
         lg: '1024px',
         xl: '1280px',
      },
   },
}

export const myTheme = extendTheme({
   config,
   fonts: {
      heading: `'Spartan', sans-serif`,
      body: `'Spartan', sans-serif`,
   },
   styles: {
      global: props => ({
         'html, body': {
            height: '100%',
            scrollBehavior: 'smooth',
            bg: mode('bgLight', 'greyBlack')(props),
         },
      }),
   },
   colors: {
      purpleDark: '#7c5dfa',
      purpleLight: '#9277ff',
      purpleBlackDark: '#1e2139',
      purpleBlackLight: '#252945',
      greyLight: '#dfe3fa',
      greyDark: '#888eb0',
      greyBlue: '#7e88c3',
      greyBlack: '#0c0e16',
      redDark: '#ec5757',
      redLight: '#ff9796',
      bgLight: '#f8f8fb',
      bgDark: '#141625',
      orange: '#ff8e01',
      orangeOpacity: 'rgba(255, 142, 1, 0.1)',
      green: '#33d69f',
      greenOpacity: 'rgba(51, 214, 159, 0.1)',
   },
   fontSizes: {
      small: '11px',
      medium: '14px',
      large: '16px',
      xlarge: '20px',
      '2xlarge': '26px',
      '3xlarge': '32px',
   },
   fontWeights: {
      light: 200,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
   },
   textStyles,
   sizes,
   components: {
      Button,
      Input,
      Select,
   },
})
