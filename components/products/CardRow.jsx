import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './productRou.style'
import { COLORS, SIZES } from '../../constants'
import CardView from './CardView'
import useFetch from '../../hook/useFetch'

const CardRow = () => {
  const { data, isLoading, error } = useFetch()
  const products = [1,2,3,4,5]
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ): error ? (
        <Text>Something went wrong!</Text>
      ):(
      <FlatList 
        data={data}
        keyExtractor={(item)=> item._id}
        renderItem={({item})=> (<CardView item={item} />)}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
      )}
    </View>
  )
}

export default CardRow