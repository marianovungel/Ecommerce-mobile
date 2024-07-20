import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Cart = () => {
  return (
    <SafeAreaView>
      <Text>Cart</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({})