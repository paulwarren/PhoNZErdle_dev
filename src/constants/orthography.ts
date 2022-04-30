import { CONFIG } from './config'

export const ORTHOGRAPHY = [
 "ɘ",
 "e",
 "ɛ",
 "ɒ",
 "ɐ",
 "ʊ",
 "iː",
 "ɐː",
 "oː",
 "ʉː",
 "ɵː",
 "æe",
 "ɑe",
 "oe",
 "æʉ",
 "ɐʉ",
 "iɘ",
 "eɘ",
 "ʉɘ",
 "i",
 "p",
 "b",
 "t",
 "d",
 "k",
 "g",
 "f",
 "v",
 "s",
 "z",
 "θ",
 "ð",
 "ʃ",
 "ʒ",
 "m",
 "n",
 "ŋ",
 "l",
 "w",
 "ɹ",
 "j",
 "h",
 "ʧ",
 "ʤ",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
