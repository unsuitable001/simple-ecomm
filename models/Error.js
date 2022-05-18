class APIError extends Error {
    constructor(message, status = 500) {
        super(message);
        this.name = "APIError";
        this.status = status;
    }
}

class AuthenticationError extends APIError {
    constructor(message) {
        super(message, 401);
        this.name = "AuthenticationError";
    }
}

module.exports = {
    APIError: APIError,
    AuthenticationError: AuthenticationError
}
