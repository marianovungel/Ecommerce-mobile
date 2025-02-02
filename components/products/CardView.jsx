import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './CardView.style'
import { COLORS } from '../../constants'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CardView = ({item}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails", {item})}>
      <View style={styles.container}>
        <View style={styles.imgcontainer}>
            <Image 
                style={styles.image}
                source={{uri: item.imageUrl}}
            />
        </View>
        <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.supplier} numberOfLines={1}>{item.supplier}</Text>
            <Text style={styles.price}>$ {item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default CardView