import { Container } from "@nextui-org/react"
import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

interface Props { }

export const AppLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <Container xl css={{ w: '100%', p: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>AOE2 Civs</title>
      </Head>
      <Navbar />
      <Container as='main' css={{ flex: 1, paddingBottom: '16px' }}>
        {children}
      </Container>
      <Footer />
    </Container>
  )
}