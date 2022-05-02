import { Container, Row, Avatar, Link } from "@nextui-org/react"
import NextLink from "next/link"

const Navbar = () => {
  return (
    <Container xl as='header' css={{ backgroundColor: '$primary' }}>
      <Row css={{ h: '55px' }} justify='space-between' align='center'>
        <NextLink href="/" passHref>
          <Avatar
            css={{ cursor: 'pointer' }}
            squared
            size="md"
            text="AOE2"
            textColor="primary"
          />
        </NextLink>
        <nav>
          <NextLink href="/favoritos" passHref>
            <Link css={{color:"$white"}}>
              Favoritos
            </Link>
          </NextLink>
        </nav>
      </Row>
    </Container>
  )
}
export default Navbar