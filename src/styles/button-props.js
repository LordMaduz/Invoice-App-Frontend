import { mode } from '@chakra-ui/theme-tools'

export const buttonProps = {
   baseStyle: {
      textStyle: 'h3Light',
      rounded: 'full',
      _disabled: {
         bg: 'grey',
         color: 'black',
         cursor: 'not-allowed',
      },
   },
   sizes: {
      default: {
         px: 10,
         py: 4,
      },
      large: {
         px: 28,
         py: 4,
      },
   },
   variants: {
      primary: {
         color: '#fff',
         bg: 'purpleDark',
         _hover: {
            bg: 'purpleLight',
         },
         _active: {
            bg: 'purpleDark',
         },
         _disabled: {
            bg: 'grey',
            cursor: 'not-allowed',
         },
      },
      button3: props => ({
         color: mode('greyBlue', 'greyLight')(props),
         bg: mode('bgLight', 'purpleBlackLight')(props),
         _hover: {
            bg: mode('greyLight', '#fff')(props),
         },
      }),
      button4: props => ({
         color: mode('greyDark', 'greyLight')(props),
         bg: 'purpleBlackLight',
         _hover: {
            bg: mode('greyBlack', 'purpleBlackDark')(props),
         },
      }),
      button5: {
         color: '#fff',
         bg: 'redDark',
         _hover: {
            bg: 'redLight',
         },
         _active: {
            bg: 'redDark',
         },
      },
      button6: {
         color: 'greyBlue',
         bg: 'bgLight',
         _hover: {
            bg: 'greyLight',
         },
      },
   },
   defaultProps: {
      size: 'default',
      variant: 'primary',
   },
}
