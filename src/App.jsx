import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
const CAT_ENPOINT_RANDOM_CAT = 'https://catfact.ninja/fact'
// const CAT_ENPOINT_IMAGE_URL = `https://cataas.com/cat/says/${fistWord}?size=50&color=red&json=true`

const App = () => {
  const [fact, setFact] = useState()

  const [imageUrl, setImageUrl] = useState()

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return

    const firsWord = fact.split(' ').slice(0, 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firsWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])
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
