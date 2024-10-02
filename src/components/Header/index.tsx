import {ReactNode} from 'react'
import { View} from 'react-native'
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