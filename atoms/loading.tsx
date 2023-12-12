import React from 'react'
import {ActivityIndicator, StyleSheet} from 'react-native'

export const Loading = () => {
    return (
        <ActivityIndicator style={styles.loading}/>
    )
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})