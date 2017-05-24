'use strict'

import test from 'ava'
import micro from 'micro'
import listen from 'test-listen'
import request from 'request-promise'
import fixtures from './fixtures'
import pictures from '../pictures'
import utils from '../lib/utils'
import config from '../config'

test.beforeEach(async t => {
  let servidor = micro(pictures)
  t.context.url = await listen(servidor)
})

test('GET /list', async t => {
  let images = fixtures.getImages()
  let url = t.context.url

  let options = {
    method: 'GET',
    uri: `${url}/list`,
    json: true
  }

  let body = await request(options)
  t.deepEqual(body, images)
})

test('GET /:id', async t => {
  let image = fixtures.getImage()
  let url = t.context.url

  let options = {
    uri: `${url}/${image.publicId}`,
    json: true
  }

  let body = await request(options)
  t.deepEqual(body, image)
})

test('no token POST /', async t => {
  let image = fixtures.getImage()
  let url = t.context.url

  let options = {
    method: 'POST',
    uri: url,
    json: true,
    body: {
      description: image.description,
      src: image.src,
      userId: image.userId
    },
    resolveWithFullResponse: true
  }

  await t.throws(request(options), /invalid token/)

  /* let response = await request(options)

  t.is(response.statusCode, 201)
  t.deepEqual(response.body, image) */
})

test('secure POST /', async t => {
  let image = fixtures.getImage()
  let url = t.context.url
  let token = await utils.signToken({ userId: image.userId }, config.secret)

  let options = {
    method: 'POST',
    uri: url,
    json: true,
    body: {
      description: image.description,
      src: image.src,
      userId: image.userId
    },
    headers: {
      'Authorization': `Bearer ${token}`
    },
    resolveWithFullResponse: true
  }

  let response = await request(options)

  t.is(response.statusCode, 201)
  t.deepEqual(response.body, image)
})

test('invalid token POST /', async t => {
  let image = fixtures.getImage()
  let url = t.context.url
  let token = await utils.signToken({ userId: 'hacky' }, config.secret)

  let options = {
    method: 'POST',
    uri: url,
    json: true,
    body: {
      description: image.description,
      src: image.src,
      userId: image.userId
    },
    headers: {
      'Authorization': `Bearer ${token}`
    },
    resolveWithFullResponse: true
  }

  await t.throws(request(options), /invalid token/)
})

test('POST /:id/like', async t => {
  let image = fixtures.getImage()
  let url = t.context.url

  let options = {
    method: 'POST',
    uri: `${url}/${image.id}/like`,
    json: true
  }

  let body = await request(options)
  let imageNew = JSON.parse(JSON.stringify(image)) // Clonar objetos en JS
  imageNew.liked = true
  imageNew.likes = 1

  t.deepEqual(body, imageNew)
})

test('GET /tag/:tag', async t => {
  let images = fixtures.getImagesByTag()
  let url = t.context.url

  let options = {
    method: 'GET',
    uri: `${url}/tag/awesome`,
    json: true
  }

  let body = await request(options)

  t.deepEqual(body, images)
})

/*
test('GET /:id', async t => {
  let id = uuid.v4()

  let servidor = micro(pictures)

  let url = await listen(servidor)
  let body = await request({ uri: `${url}/${id}`, json: true })
  t.deepEqual(body, { id })
})
*/
