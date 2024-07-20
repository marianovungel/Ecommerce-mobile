import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './heading.style'
import { Entypo } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Heading = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTetle}>New Rivals</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("ProductList")}>
            <Entypo name="grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Heading