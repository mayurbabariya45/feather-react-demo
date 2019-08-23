import app from '../store/configureClient'

export const login = app.service('login')
export const prodtask = app.service('prodtask')
export const states = app.service('states')
export const clock = app.service('clock')
export const box = app.service('box')

export default {
  login,
  prodtask,
  states,
  clock,
  box,
}
