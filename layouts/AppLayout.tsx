import { Container } from "@nextui-org/react"
import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Footer, Navbar } from "../components"

interface Props {
  civilization?: string
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const AppLayout: FC<PropsWithChildren<Props>> = ({ children, civilization }) => {
  return (
    <Container xl css={{ w: '100%', p: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>AOE2 | {civilization || 'Civilizaciones'}</title>
        <meta name="author" content="Lautaro" />
        <meta name="description" content={
          civilization
            ? `Información sobre la civilización ${civilization} del AOE2`
            : "Civilizaciones del AOE2"
        } />
        <meta name="keywords" content={"aoe2, civilizaciones" + (civilization ? `, ${civilization}` : '')} />
        <meta property="og:title" content={civilization ? `La civilización ${civilization}` : "Civilizaciones del AoE2"} />
        <meta property="og:description" content={civilization ? `Información sobre los ${civilization}` : "Información sobre las civilizaciones del AoE2"} />
        <meta property="og:image" content={`${origin}/banner.jpg`} />
      </Head>
      <Navbar />
      <Container as='main' css={{ flex: 1, paddingBottom: '16px' }}>
        {children}
      </Container>
      <Footer />
    </Container>
  )
}