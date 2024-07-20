import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../../hook/useFetch'
import { COLORS, SIZES } from '../../constants'
import styles from './productList'
import CardView from './CardView'

const ProductListt = () => {
    const { data, isLoading, error} = useFetch()

    if(isLoading){
        return (
            <View style={styles.loadingConatiner}>
              <ActivityIndicator 
                size={SIZES.xxLarge} 
                color={COLORS.primary} />
            </View>
          );
    }

    return (
        <View style={styles.conatiner}>
          <FlatList
            data={data}
            numColumns={2}
            // renderItem={(item)=>(<CardView item={item} />)}
            renderItem={({item})=> (<CardView item={item} />)}
            contentContainerStyle={styles.conatiner}
            ItemSeparatorComponent={()=> <View style={styles.separator} />}
          />
        </View>
    );
  
}

export default ProductListt