'use strict'

import jwt from 'jsonwebtoken'
import bearer from 'token-extractor'

export default {
  async signToken (payloadEncoded, secret, options) {
    return new Promise((resolve, reject) => {
      jwt.sign(payloadEncoded, secret, options, (err, token) => {
        if (err) return reject(err)

        resolve(token)
      })
    })
  },

  async verifyToken (token, secret, options) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, options, (err, payloadDecoded) => {
        if (err) return reject(err)

        resolve(payloadDecoded)
      })
    })
  },

  async extractToken (req) {
    // Authorization: Bearer <token>
    return new Promise((resolve, reject) => {
      bearer(req, (err, token) => {
        if (err) return reject(err)

        resolve(token)
      })
    })
  }
}
