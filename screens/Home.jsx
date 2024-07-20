import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { CardRow, Carousel, Heading, Wellcome } from '../components';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.location}>Shanghai China</Text>

          <View style={{alignItems:"flex-end"}}>
            <View style={styles.CartCout}>
              <Text style={styles.cartNumber}> 8 </Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <Wellcome />
        <Carousel />
        <Heading />
        <CardRow />
      </ScrollView>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Home