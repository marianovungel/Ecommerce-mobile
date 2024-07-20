import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import styles from "./newRivalss"
import { COLORS } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import { ProductListt } from '../components';

const NewRivals = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View  style={styles.wrapper}>
        <View style={styles.upperRow}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="chevron-back-circle" 
                    size={30} color={COLORS.lightwhite} 
                />
            </TouchableOpacity>
            <Text style={styles.heading}>Products</Text>
        </View>
        <ProductListt />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default NewRivals