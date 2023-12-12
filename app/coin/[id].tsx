import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';
import { Information } from '../../components/Information';
import { ScrollView } from 'react-native-gesture-handler';
import { MarketGraph } from '../../components/MarketChart';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default function ModalScreen() {
  const {id} = useGlobalSearchParams()

  return (
    <ScrollView>
      <MarketGraph coinId={id as string} />
      <Information coinId={id as string} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
