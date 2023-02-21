module.exports = class UnauthorizedErorr extends Error {
  constructor (paramName) {
    super('unauthorized')
    this.name = 'MissingparamError'
  }
}
