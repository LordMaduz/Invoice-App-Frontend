class AppError {
   constructor({ title, message, code, error }) {
      this.title = title
      this.message = message
      this.code = code
      this.error = error
   }
}

export default AppError
