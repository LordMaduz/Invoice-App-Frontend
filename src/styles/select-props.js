import { mode } from '@chakra-ui/theme-tools'

export const selectProps = {
   baseStyle: {
      field: {
         textStyle: 'h3Light',
         rounded: '8px',
         border: '1px solid',
         cursor: 'pointer',
      },
   },
   variants: {
      primary: props => ({
         field: {
            color: mode('greyBlack', '#fff')(props),
            bg: mode('#fff', 'purpleBlackDark')(props),
            borderColor: mode('greyLight', 'purpleBlackLight')(props),
            height: '50px',
            '> option, > optgroup': {
               textStyle: 'h3',
               padding: '10px',
               bg: mode('#fff', 'purpleBlackDark')(props),
               color: mode('greyBlack', '#fff')(props),
            },
         },
         icon: {
            color: 'purpleDark',
         },
      }),
   },
}
