const MissingParamError = require('./missing-param-error')
const UnauthorizedErorr = require('./unauthorized-error')

module.exports = class HttpResponse {
  static badRequest (paramNamae) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramNamae)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }

  static unauthorizedErorr () {
    return {
      statusCode: 401,
      body: new UnauthorizedErorr()
    }
  }
}
