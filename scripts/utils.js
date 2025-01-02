import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import process from 'node:process'
import { bgCyan, black } from 'kolorist'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const port = Number(process.env.PORT || '') || 3303
export const r = (...args) => resolve(__dirname, '..', ...args)
export const isDev = process.env.NODE_ENV !== 'production'
export const isFirefox = process.env.EXTENSION === 'firefox'

export function log(name, message) {
  console.log(black(bgCyan(` ${name} `)), message)
}
