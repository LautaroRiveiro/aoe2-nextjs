import { Card, Col, Container, Divider, Grid, Row, Spacer, Text } from "@nextui-org/react"
import { GetStaticPaths, GetStaticProps } from "next"
import { FC } from "react"
import { Civilization } from "../../interfaces"
import { AppLayout } from "../../layouts"
import { civilizations } from "../../services"

interface Props {
  civ: Civilization
}

type Params = {
  name: string
}

const CivilizationPage: FC<Props> = ({ civ }) => {
  return (
    <AppLayout>
      <Grid.Container gap={2}>
        <Grid xs={12} direction='column'>
          <Text h1 css={{ lineHeight: 1.1, letterSpacing: '0px' }}>{civ.name}</Text>
          <Text small size={'1.15rem'} css={{ color: '$accents5' }}>{civ.army_type} civilization</Text>
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
        <Grid xs={10} sm={4}>
          <Container direction="column" css={{ p: 0 }}>
            <Text h3 css={{ mb: 10 }}>Unique units</Text>
            {
              civ.unique_unit_data?.map((unit) => (
                <Card key={unit.id} shadow={false} bordered css={{ mb: 12 }}>
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
              ))
            }
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
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {

  // TODO: ¿ Aseguro que params existe (params!) porque tengo fallback: false ?
  const civ = await civilizations.getOneCivilization(context.params!.name)

  return {
    props: {
      civ
    }
  }
}

export default CivilizationPage