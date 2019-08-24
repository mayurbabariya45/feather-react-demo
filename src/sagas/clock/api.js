/* eslint-disable import/prefer-default-export */
import { clock, box } from '../../services'

export async function getClockInfo(payload) {
  try {
    return await clock.create(payload)
  } catch (err) {
    return err
  }
}

export async function callClockIn(payload) {
  try {
    return await clock.create(payload)
  } catch (err) {
    return err
  }
}

export async function callClockOut(payload) {
  try {
    return await clock.create(payload)
  } catch (err) {
    return err
  }
}

export async function getBoxID(payload) {
  try {
    return await box.create(payload)
  } catch (err) {
    return err
  }
}
