import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import useCatImage from './hooks/useCatImage'
// const CAT_ENPOINT_IMAGE_URL = `https://cataas.com/cat/says/${fistWord}?size=50&color=red&json=true`

const App = () => {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  return (
   <main>
    <h1>App of cats</h1>
    <button onClick={handleClick}>Get new fact</button>
    <section>
    {fact && <p>{fact}</p>}
    {imageUrl && <img src={imageUrl} alt={fact} />}

    </section>
  </main>
  )
}

export default App
