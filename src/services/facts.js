const CAT_ENPOINT_RANDOM_CAT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
  return fetch(CAT_ENPOINT_RANDOM_CAT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}
