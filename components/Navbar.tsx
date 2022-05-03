import { Container, Row, Avatar, Link, Switch, useTheme, Spacer } from "@nextui-org/react"
import NextLink from "next/link"
import { useTheme as useNextTheme } from 'next-themes'
import { SunIcon } from '../styles/SunIcon'
import { MoonIcon } from '../styles/MoonIcon'

const Navbar = () => {

  const { setTheme } = useNextTheme()
  const { isDark, theme } = useTheme()

  return (
    <Container
      xl
      as='header'
      css={{ backgroundColor: isDark ? theme?.colors.backgroundContrast.value : theme?.colors.primary.value }}
    >
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
        <Container as="nav" display="flex" alignItems="center" justify="flex-end" css={{ p: 0 }}>
          <NextLink href="/favoritos" passHref>
            <Link css={{ color: "$white" }}>
              Favoritos
            </Link>
          </NextLink>
          <Spacer />
          <Switch
            checked={isDark}
            size="sm"
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </Container>
      </Row>
    </Container>
  )
}
export default Navbar