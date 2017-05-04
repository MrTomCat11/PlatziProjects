'use strict'

const test = require('ava')
const utils = require('../lib/utils')

test('extracting hashtags from text', t => {
  let tags = utils.extractTags('a #picture with tags #AwEsOmE #Platzi #AVA and #100 ##yes')

  t.deepEqual(tags, [
    'picture',
    'awesome',
    'platzi',
    'ava',
    '100',
    'yes'
  ])

  tags = utils.extractTags('a picture with no tags')
  t.deepEqual(tags, [])

  tags = utils.extractTags()
  t.deepEqual(tags, [])

  tags = utils.extractTags(null)
  t.deepEqual(tags, [])
})

/*
'use strict'

const test = require('ava')

test('this should pass', t => {
  t.pass()
})

test('this should fail', t => {
  t.fail()
})

test('it should support async/await', async t => {
  let p = Promise.resolve(42)
  let secret = await p
  t.is(secret, 42)
})
*/
