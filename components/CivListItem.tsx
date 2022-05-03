import { Card, Text } from "@nextui-org/react"
import Link from "next/link"
import { FC } from "react"
import { Civilization } from "../interfaces"

interface Props {
  civ: Civilization
}

export const CivListItem: FC<Props> = ({ civ }) => {
  return (
    <Link href={`/civ/${civ.name.toLowerCase()}`} passHref>
      <Card hoverable clickable bordered shadow={false} >
        <Text h2 b size="1.25rem">{civ.name}</Text>
        <Text small css={{ color: '$accents5' }}>{civ.army_type}</Text>
      </Card>
    </Link>
  )
}