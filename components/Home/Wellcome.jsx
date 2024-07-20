import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './wellcome.style'
import { COLORS, SIZES } from '../../constants'
import { Feather, Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Wellcome = () => {

  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.wellcomeText(COLORS.black, SIZES.xSmall)}>Find The Most</Text>
        <Text style={styles.wellcomeText(COLORS.primary, 0)}>Luxurious Furniture</Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} color="black" />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=''
            onPressIn={()=>navigation.navigate("Search")}
            placeholder='What are you looking for'
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="camera-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Wellcome