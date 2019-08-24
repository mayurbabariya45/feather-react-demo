import { BASE_URL } from '../config/constants'

const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client')
const io = require('socket.io-client')

const socket = io(BASE_URL)
const app = feathers()

// Set up Socket.io client with the socket
// And a timeout of 2 seconds
export default (function configureClient() {
  app.configure(
    socketio(socket, {
      transports: ['websocket'],
      forceNew: true,
      timeout: 20000,
    }),
  )
  return app
})()
