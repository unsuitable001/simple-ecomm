class APIError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = 'APIError';
    this.status = status;
  }
}

class AuthenticationError extends APIError {
  constructor(message) {
    super(message, 401);
    this.name = 'AuthenticationError';
  }
}

class UnimplementedError extends APIError {
  constructor(message = 'This api endpoint is under construction') {
    super(message, 501);
    this.name = 'UnimplementedError';
  }
}

module.exports = {
  APIError: APIError,
  AuthenticationError: AuthenticationError,
  UnimplementedError: UnimplementedError,
};
