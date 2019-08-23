import { BASE_URL } from '../config/constants'

const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client')
const io = require('socket.io-client')

const socket = io(BASE_URL)
const app = feathers()

// Set up Socket.io client with the socket
// And a timeout of 2 seconds
app.configure(
  socketio(socket, {
    timeout: 20000,
  }),
)

export default app
