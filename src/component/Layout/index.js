import React from 'react'
import { Header } from '../Header'
import { Menu } from '../Menu'

export default function Layout(props) {
    return (
        <>
            <Header />
            <Menu/>
            {props.children}
        </>
    )
}
