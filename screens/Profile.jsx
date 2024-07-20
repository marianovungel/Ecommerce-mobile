import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Profile = () => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})