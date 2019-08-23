/* eslint-disable import/prefer-default-export */
import { login, prodtask, states } from '../../services'

export async function callLogin(payload) {
  try {
    return await login.create(payload)
  } catch (err) {
    return err
  }
}

export async function callProdTask(payload) {
  try {
    return await prodtask.create(payload)
  } catch (err) {
    return err
  }
}

export async function callStates(payload) {
  try {
    return await states.create(payload)
  } catch (err) {
    return err
  }
}
