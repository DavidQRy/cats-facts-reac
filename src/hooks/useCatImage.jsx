import { useEffect, useState } from 'react'

function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

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
  return { imageUrl }
}

export default useCatImage
