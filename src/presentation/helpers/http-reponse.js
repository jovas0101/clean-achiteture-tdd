const MissingParamError = require('./missing-param-error')

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
}
