import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import CivListItem from '../components/CivListItem'
import { Civilization } from '../interfaces'
import { AppLayout } from '../layouts'
import favorites from '../services/favorites'
import { civilizations } from '../services'
import { Card, Container, Grid } from '@nextui-org/react'
import Link from 'next/link'


const FavoritesPage: NextPage = () => {

  const [civilizations, setCivilizations] = useState<string[]>([])


  useEffect(() => {
    setCivilizations(favorites.getFavorites())
  }, [])


  return (
    <AppLayout>
      {
        civilizations.length === 0
          ? <Container>No hay civilizaciones favoritas</Container>
          : (
            <Grid.Container gap={2}>
              {civilizations.map((name) => (
                <Grid key={name}>
                  <Link href={`/civ/${name.toLowerCase()}`} passHref>
                    <Card shadow={false} bordered clickable hoverable>{name}</Card>
                  </Link>
                </Grid>
              ))
              }
            </Grid.Container>
          )
      }
    </AppLayout>
  )
}
export default FavoritesPage