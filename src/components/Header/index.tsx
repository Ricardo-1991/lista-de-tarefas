import {ReactNode} from 'react'
import { Header } from './style'

interface ChildrenProps {
    children: ReactNode
}

export function HeaderApp ({children}: ChildrenProps) {
    return (
        <Header>
            {children}
        </Header>
    )
}