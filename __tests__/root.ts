import { response } from 'express'
import request from 'supertest'

import { app } from '../src/app'

describe('Test the root path', () => {
  test('should response GET method', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.status).toBe(200)
        done()
      })
  })
})
