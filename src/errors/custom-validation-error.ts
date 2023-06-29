class ValidationError extends Error {
    public statusCode: number;
    public validationErrors: string[];
  
    constructor(message: string, validationErrors: string[]) {
      super(message);
      this.statusCode = 400; 
      this.validationErrors = validationErrors;
    }
  }
  
  export { ValidationError };
  