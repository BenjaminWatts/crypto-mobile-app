import React from 'react'
import {ActivityIndicator, StyleSheet} from 'react-native'
import { View } from 'react-native'

export const Loading = () => {
    return (
       <View style={styles.loading}>
         <ActivityIndicator style={styles.loading}/>
       </View>
    )
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    }
})