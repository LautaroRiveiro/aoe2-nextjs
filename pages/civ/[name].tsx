import { Button, Card, Col, Container, Divider, Grid, Row, Text } from "@nextui-org/react"
import { GetStaticPaths, GetStaticProps } from "next"
import { FC, useEffect, useState } from "react"
import { Civilization } from "../../interfaces"
import { AppLayout } from "../../layouts"
import { civilizations } from "../../services"
import favorites from '../../services/favorites'
import confetti from 'canvas-confetti'

interface Props {
  civ: Civilization
}

type Params = {
  name: string
}

const CivilizationPage: FC<Props> = ({ civ }) => {

  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    setIsFav(favorites.isFavorite(`${civ.name}`))
  }, [civ])

  const toggleFavorite = () => {
    if(!isFav) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 90,
        origin: { x: 0.5, y: 0.9 }
      })
    }
    favorites.toggleFavorite(`${civ.name}`)
    setIsFav(!isFav)
  }

  return (
    <AppLayout civilization={civ.name}>
      <Grid.Container gap={2}>
        <Grid xs={12} direction="row" css={{ flexWrap: 'wrap' }} justify='space-between' alignItems="center" >
          <Grid direction='column'>
            <Text h1 css={{ lineHeight: 1.1, letterSpacing: '0px' }}>{civ.name}</Text>
            <Text small size={'1.15rem'} css={{ color: '$accents5' }}>{civ.army_type} civilization</Text>
          </Grid>
          <Button size={"sm"} onClick={toggleFavorite} ghost={!isFav} >
            { isFav ? `Favorito` : `Agregar a favoritos`}
            </Button>
        </Grid>
        <Grid xs={12} sm={4} direction='column'>
          <Text h3 css={{ mb: 10 }}>Information</Text>
          <Card shadow={false} bordered>
            <Container css={{ p: 0 }} direction='column'>
              <Row css={{ mb: 10 }}>
                <Text b>Expansion:&nbsp;</Text>
                <Text>{civ.expansion}</Text>
              </Row>
              <Row css={{ mb: 18 }}>
                <Col>
                  <Text b>Civilization bonus:</Text>
                  <ul style={{ margin: 0 }}>
                    {
                      civ.civilization_bonus.map((bonus) => (
                        <li key={bonus} style={{ margin: 0, marginLeft: '18px', listStyleType: 'disc' }}>{bonus}</li>
                      ))
                    }
                  </ul>
                </Col>
              </Row>
              <Row>
                <Text b>Team bonus:&nbsp;</Text>
                <Text>{civ.team_bonus}</Text>
              </Row>
            </Container>
          </Card>
        </Grid>
        <Grid xs={10} sm={8}>
          <Container direction="column" css={{ p: 0 }}>
            <Text h3 css={{ mb: 10, '@md': { ml: 12 } }}>Unique units</Text>
            <Grid.Container>
              {
                civ.unique_unit_data?.map((unit) => (
                  <Grid key={unit.id} css={{ mb: 12, '@md': { ml: 12 } }} xs={12} sm={5}>
                    <Card shadow={false} bordered>
                      <Card.Header>
                        <Text b>{unit.name}</Text>
                      </Card.Header>
                      <Card.Body >
                        <Text>
                          {unit.description}
                        </Text>
                      </Card.Body>
                      <Divider />
                      <Card.Footer>
                        <Row wrap="wrap" justify="flex-start" align="flex-end">
                          {unit.cost.Food && (
                            <Text b css={{ marginRight: '$xs', color: "$accents4" }}>🥩{unit.cost.Food}</Text>
                          )}
                          {unit.cost.Gold && (
                            <Text b css={{ marginRight: '$xs', color: "$accents4" }}>🥇{unit.cost.Gold}</Text>
                          )}
                          {unit.cost.Wood && (
                            <Text b css={{ marginRight: '$xs', color: "$accents4" }}>🌲{unit.cost.Wood}</Text>
                          )}
                          <Text b css={{ marginRight: '$xs', color: "$accents4", flex: 1, textAlign: 'end' }}>🕓{unit.build_time}&rdquo;</Text>
                        </Row>
                      </Card.Footer>
                    </Card>
                  </Grid>
                ))
              }
            </Grid.Container>
          </Container>
        </Grid>
      </Grid.Container>
    </AppLayout >
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {

  const civs = await civilizations.getAllCivilizations()
  const paths = civs.map((civ) => ({
    params: {
      name: civ.name.toLowerCase()
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {

  try {
    // TODO: ¿ Aseguro que params existe (params!) porque tengo fallback: false ?
    const civ = await civilizations.getOneCivilization(context.params!.name)
    
    return {
      props: {
        civ
      },
      revalidate: 604800 // 60 * 60 * 24 * 7 = 7d
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

}

export default CivilizationPage