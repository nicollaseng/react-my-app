import React from 'react'

export const Soma = (props) => {
    console.log(props)
    return (
        <h1>{props.a + props.b}</h1>
    )
}