/* eslint-disable import/prefer-default-export */
import { clock, box } from '../../services'

export async function getClockInfo(payload) {
  console.log('====================================')
  console.log(payload)
  console.log('====================================')
  try {
    return await clock.create(payload)
  } catch (err) {
    return err
  }
}

export async function callClockIn(payload) {
  console.log('====================================')
  console.log(payload)
  console.log('====================================')
  try {
    return await clock.create(payload)
  } catch (err) {
    return err
  }
}

export async function callClockOut(payload) {
  console.log('====================================')
  console.log(payload)
  console.log('====================================')
  try {
    return await clock.create(payload)
  } catch (err) {
    return err
  }
}

export async function getBoxID(payload) {
  console.log('====================================')
  console.log(payload)
  console.log('====================================')
  try {
    return await box.create(payload)
  } catch (err) {
    return err
  }
}
