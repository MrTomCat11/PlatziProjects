'use strict'

import test from 'ava'
import micro from 'micro'
import listen from 'test-listen'
import request from 'request-promise'
import fixtures from './fixtures'
import auth from '../auth'
import config from '../config'
import utils from '../lib/utils'

test.beforeEach(async t => {
  let servidor = micro(auth)
  t.context.url = await listen(servidor)
})

test('sucess POST /', async t => {
  let user = fixtures.getUser()
  let url = t.context.url

  let options = {
    method: 'POST',
    uri: url,
    json: true,
    body: {
      username: user.username,
      password: user.password
    }
  }

  let token = await request(options)
  let decoded = await utils.verifyToken(token, config.secret)

  t.is(decoded.username, user.username)
})
