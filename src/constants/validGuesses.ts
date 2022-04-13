import { CONFIG } from './config'

export const VALIDGUESSES = [
  'ɛkʃɘn',
  'ɘdmɘt',
  'oːlwæez',
  'kɛmpt',
  'pɹeʃɘ',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
