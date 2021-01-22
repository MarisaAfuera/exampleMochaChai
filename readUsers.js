const axios = require('axios')
const NotFoundError = require('./exceptions/notFound')
const ValidationError = require('./exceptions/validation')
module.exports = class GetUsers {
  constructor () {
    this.baseUrl = 'https://dummyapi.io/data/api'     
  }

  async getResource (resourceName, identifier) {
    axios.defaults.headers.common = {"app-id": "6007f7dd6dcbed5661d98722"};
    if (!resourceName) {
      throw new ValidationError(`Invalid resource ${resourceName}`)
    }
    let response
    if (identifier) {
      response = await axios.default.get(`${this.baseUrl}/${resourceName}/${identifier}`, { validateStatus: false })
    }
    else{
      response = await axios.default.get(`${this.baseUrl}/${resourceName}`, { validateStatus: false })
    }
    if (response.status === 403 || response.status === 404 || !response.data) {
      if (identifier) {
        throw new NotFoundError(`${resourceName} with identifier ${identifier} not found`)
      } else {
        throw new NotFoundError(`${resourceName} not found`)
      }
    }
    return response.data
  }

}