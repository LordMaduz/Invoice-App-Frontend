import React, { forwardRef } from 'react'
import { Box, Select as CSelect, Text } from '@chakra-ui/react'

const Select = forwardRef((props, ref) => {
   const error = !!props.errors

   return (
      <Box w="100%">
         {props.label && (
            <Text mb={2} textStyle="body1">
               {props.label}
            </Text>
         )}
         <CSelect
            variant="primary"
            placeholder="Select..."
            border={error ? '1px solid' : ''}
            borderColor={error ? 'redDark' : ''}
            ref={ref}
            {...props}
         >
            {props.options.map((option, i) => (
               <option key={`${option}_${i}`} value={option.value}>
                  {option.label}
               </option>
            ))}
         </CSelect>
      </Box>
   )
})

export default Select
