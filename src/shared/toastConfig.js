const toastCommonProps = {
   duration: 5000,
   position: 'top-right',
   variant: 'solid',
   isClosable: true,
}

export const successToastProps = {
   ...toastCommonProps,
   status: 'success',
   containerStyle: {
      color: '#fff',
      bg: '#9277ff',
      border: '1px solid #9277ff',
      borderRadius: 3,
   },
}

export const errorToastProps = {
   ...toastCommonProps,
   status: 'error',
}
