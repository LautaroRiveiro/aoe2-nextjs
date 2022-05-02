const getFavorites = (): string[] => {
  const favorites = JSON.parse( localStorage.getItem('favorites') ?? '[]' )
  return favorites
}

const toggleFavorite = (name: string): string[] => {
  const favorites = getFavorites()

  const index = favorites.indexOf(name)
  if (index === -1) {
    favorites.push(name)
  } else {
    favorites.splice(index, 1)
  }
  localStorage.setItem('favorites', JSON.stringify(favorites))
  return favorites
}

const isFavorite = (name: string) : boolean => {
  const favorites = getFavorites()
  return favorites.includes(name)
}

const favorites =  {
  getFavorites,
  toggleFavorite,
  isFavorite
}

export default favorites