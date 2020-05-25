import React from 'react'
import { Header } from 'semantic-ui-react';


export default function Title(props){

    return(
        <div>
            <Header as='h1'>
               my {props.name}
            </Header>
        </div>
    )
}