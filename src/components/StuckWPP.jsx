import { createRef, useRef } from "react"
import { Button, Grid, GridColumn, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react';

import contato from '../assets/contato.png'


export default function StuckWPP() {

    const contextRef = useRef();

    const docsButtonStyle = {
        position: 'fixed',
        margin: '2em',
        bottom: 0,
        right: 0,
        animation: 'back-to-docs 1.5s ease-in-out infinite',
        zIndex: 6,
      }

    return (

        <div style={docsButtonStyle}>
         <Image src={contato} size='tiny' circular />
        </div>

    );
};
