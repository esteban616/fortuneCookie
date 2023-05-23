/* eslint-disable react/prop-types */
import getRandomElementFromArray from "../utils/randomElementFromArray"
import phrase from "../utils/phrases.json"

const ButtonPhrase = ({setphraseRandom, setpathRandom,bgImgs}) => {
    const handleRandomPhrase = ()=>{
        setphraseRandom(getRandomElementFromArray(phrase))
        setpathRandom(getRandomElementFromArray(bgImgs))
    }
  return (
   <button className="btnPhrase" onClick={handleRandomPhrase}> Ver otro</button>
  )
}

export default ButtonPhrase