const expect = require('chai').expect
const assert = require('chai').assert
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const GetUsers = require('./readUsers')
const ValidationError = require('./exceptions/validation')
const NotFoundError = require('./exceptions/notFound')

const getUsers = new GetUsers();

describe('readUsers: ', () => {
  describe('getResource', () => {
    it('should throw a ValidationError when the resource is empty', () => {
        return assert.isRejected(getUsers.getResource(), ValidationError);
    })

    it('should throw a NotFoundError when the resource is not found', () => {
        return assert.isRejected(getUsers.getResource('user', 'abc'), NotFoundError);
    })

    it('should fetch requested resource', async () => {
      let users = await getUsers.getResource('user')
      expect(users).to.be.ok
    })

    it('should throw a NotFoundError with the given identifier when resource is not found', async () => {
      try {
        await getUsers.getResource('users', 45595)
      } catch (err) {
        expect(err).to.be.ok
        assert.instanceOf(err, NotFoundError)
        expect(err.message.indexOf('identifier') >= 0).to.be.true
      }
    })

    it('should fetch a user with the given id', async() => {
      let user = await getUsers.getResource('user', 'G19Ya7yxByl6bUXITXzT')
      expect(user).to.be.ok
    })
  })
 
})