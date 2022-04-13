import { CONFIG } from './config'

export const ORTHOGRAPHY = [
"ɘ",
"e",
"ɛ",
"ɐː",
"ɒ",
"ʊ",
"ɐ",
"iː",
"æe",
"oː",
"ɐʉ",
"ʉː",
"ɑe",
"oe",
"æʉ",
"ɵː",
"iɘ",
"eɘ",
"ʉɘ",
"p",
"t",
"k",
"b",
"d",
"g",
"m",
"n",
"ŋ",
"f",
"θ",
"s",
"ʃ",
"v",
"ð",
"z",
"ʒ",
"ʧ",
"ʤ",
"ɹ",
"j",
"w",
"l",
"h",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
