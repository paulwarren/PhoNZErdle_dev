import { WORDS } from '../constants/wordlist'
import { SPELLS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import { CONFIG } from '../constants/config'
import React  from "react"

interface IProps {
  practice: boolean
}

export const ModeTime: React.FC<IProps> = ({practice}) => {

  const msInDay =   practice ? 5000 : 86400000

  const epochMs = new Date(CONFIG.startDate).valueOf()
  const now = Date.now()
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs
  
  console.log( msInDay, index, nextday)
  
  return (
  <div>

  </div>
  )
}

const msInDay = 5000

export const isWordInWordList = (word: string) => {
  return WORDS.includes(word) || VALIDGUESSES.includes(word)
}
export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // August 1, 2022 Game Epoch
 
  const epochMs = new Date(CONFIG.startDate).valueOf()
  const now = Date.now()
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  return {
    solution: WORDS[index % WORDS.length],
    spelling: SPELLS[index % SPELLS.length],
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, spelling, solutionIndex, tomorrow } = getWordOfDay()
