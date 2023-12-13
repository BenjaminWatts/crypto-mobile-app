
import React from 'react'
import {Redirect} from 'expo-router'
import {log} from '../services/log'

export default function RootLayout() {
    log.debug(`app/index - redirecting to /(tabs)`)
    return ( <Redirect href="/(tabs)/home" />)
}