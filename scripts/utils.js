import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import process from 'node:process'
import { bgCyan, black } from 'kolorist'
import fs from 'fs-extra'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const port = Number(process.env.PORT || '') || 3303
export const r = (...args) => resolve(__dirname, '..', ...args)
export const isDev = process.env.NODE_ENV !== 'production'
export const isFirefox = process.env.EXTENSION === 'firefox'

export function log(name, message) {
  console.log(black(bgCyan(` ${name} `)), message)
}

export async function readJSON(path) {
  return fs.readJSON(path)
}

export async function writeJSON(path, data) {
  return fs.writeJSON(path, data)
}

export async function readFile(path) {
  return fs.readFile(path, 'utf-8')
}

export async function writeFile(path, data) { 
  return fs.writeFile(path, data, 'utf-8')
}
export async function ensureDir(path) {
  return fs.ensureDir(path)
}

