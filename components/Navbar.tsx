import { Container, Row, Avatar, Link, Switch, useTheme, Spacer } from "@nextui-org/react"
import NextLink from "next/link"
import { useTheme as useNextTheme } from 'next-themes'
import { SunIcon } from '../styles/SunIcon'
import { MoonIcon } from '../styles/MoonIcon'
import { ActiveLink } from "./ActiveLink"

export const Navbar = () => {

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
            text="AoE2"
            textColor="primary"
          />
        </NextLink>
        <Container as="nav" display="flex" alignItems="center" justify="flex-end" css={{ p: 0 }}>
          <ActiveLink href="/favoritos" text="Favoritos" />
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