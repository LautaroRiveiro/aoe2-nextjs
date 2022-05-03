import { Grid } from '@nextui-org/react'
import type { GetStaticProps, NextPage } from 'next'
import { CivListItem } from '../components'
import { Civilization } from '../interfaces'
import { AppLayout } from '../layouts'
import { civilizations } from '../services'

interface Props {
  civs: Civilization[]
}

const Home: NextPage<Props> = ({ civs }) => {

  return (
    <AppLayout>
      <Grid.Container gap={2}>
        {
          civs.map((civ) => (
            <Grid key={civ.id} xs={6} sm={3} lg={2}>
              <CivListItem civ={civ} />
            </Grid>
          ))
        }
      </Grid.Container>
    </AppLayout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {

  const civs = await civilizations.getAllCivilizations()

  return {
    props: {
      civs
    }
  }
}

export default Home
