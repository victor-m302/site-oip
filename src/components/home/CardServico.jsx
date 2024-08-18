import React from 'react'
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

const CardServico = (props) => (
  <Card>
    <Image src={props.image} wrapped ui={false} />
    <CardContent>
      <CardHeader>{props.title}</CardHeader>
      <CardMeta>2016</CardMeta>
      <CardDescription>
        {props.desc}
      </CardDescription>
    </CardContent>
    {/* <CardContent extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </CardContent> */}
  </Card>
)

export default CardServico