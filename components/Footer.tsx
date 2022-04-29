import { Container, Link, Text } from "@nextui-org/react"

const Footer = () => {
  return (
    <Container as='footer' xl css={{ backgroundColor: '$accents1', h: '40px', display: 'flex', alignItems: 'center' }}>
      <Text small size={12} css={{ w: 'inherit', textAlign: 'right' }}>API:&nbsp;
        <Link href="https://age-of-empires-2-api.herokuapp.com/" block={false} target={"_blank"}>
          <Text span>
            https://age-of-empires-2-api.herokuapp.com/
          </Text>
        </Link>
      </Text>
    </Container>
  )
}
export default Footer