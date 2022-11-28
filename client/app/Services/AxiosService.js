import { baseURL } from '../env.js'

/* eslint-disable no-undef */
// @ts-ignore
export const api = axios.create({
  baseURL,
  timeout: 8000
})
