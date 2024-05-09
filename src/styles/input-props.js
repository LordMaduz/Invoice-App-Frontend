import { mode } from '@chakra-ui/theme-tools'

export const inputProps = {
   baseStyle: {
      field: {
         textStyle: 'h3Light',
         rounded: '8px',
         border: '1px solid',
      },
   },
   variants: {
      primary: props => ({
         field: {
            color: mode('greyBlack', '#fff')(props),
            borderColor: mode('greyLight', 'purpleBlackLight')(props),
            bg: mode('#fff', 'purpleBlackDark')(props),
            height: '50px',
         },
      }),
   },
}
