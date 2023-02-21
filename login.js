module.exports = () => {
  const router = new SingUpRouter()
  router.post('/singup', ExpressRouteAdapter.adapt(router))
}

class ExpressRouteAdapter {
  static adapt (router) {
    return async (req, res) => {
      const httpResquest = {
        body: req.body
      }
      const httpResponse = await router.route(httpResquest)
      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}

// singup-router
class SingUpRouter {
  async route (httpResquest) {
    const { email, password, repeatPassword } = httpResquest.body
    const user = new SingUpUseCase().singUp(email, password, repeatPassword)
    return {
      statusCode: 200,
      body: user
    }
  }
}

// singup-usecase
class SingUpUseCase {
  async singUp (email, password, repeatPassword) {
    if (password === repeatPassword) {
      new AddAccountRepository().add(email, password)
    }
  }
}

// add-account-repo
const mongoose = require('mongoose')
const AccountModel = mongoose.model('Account')

class AddAccountRepository {
  async add (email, password) {
    const user = await AccountModel.create({ email, password })
    return user
  }
}
