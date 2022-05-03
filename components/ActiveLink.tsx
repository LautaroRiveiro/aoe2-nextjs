import { FC } from 'react'
import NextLink from "next/link"
import { useRouter } from 'next/router'
import { Link } from "@nextui-org/react"

interface Props {
  text: string,
  href: string
}

const style = {
  color: '#dae2ea',
  textDecoration: 'underline'
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

  const { asPath } = useRouter()

  return (
    <NextLink href={href} passHref>
      <Link css={{ color: "$white" }} style={asPath === href ? style : undefined}>
        {text}
      </Link>
    </NextLink>
  )
}