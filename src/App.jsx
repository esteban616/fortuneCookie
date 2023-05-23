
import { useState } from 'react'
import './App.css'
import phrases from "./utils/phrases.json"
import getRandomElementFromArray from './utils/randomElementFromArray'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import Author from './components/Author'

const bgImgs=[1,2,3,4]

function App() {
  const [phraseRandom, setphraseRandom] = useState(getRandomElementFromArray(phrases))
  const [pathRandom, setpathRandom] = useState(getRandomElementFromArray(bgImgs))

  const objStyle={
    backgroundImage:`url(/imgs/fondo${pathRandom}.jpg)`
  }
  return (
    <div style={objStyle} className='app'>
      
      <h1 className='appTittle'>Galletas de la fortuna</h1>
      <PhrasesCard phraseRandom={phraseRandom}/>
      <ButtonPhrase 
      setphraseRandom={setphraseRandom} 
      setpathRandom={setpathRandom}
      bgImgs={bgImgs}
      />
      <Author phraseRandom={phraseRandom}/>
      
    </div>
  )
}

export default App
