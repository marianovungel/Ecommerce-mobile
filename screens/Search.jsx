import { Image, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './search.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { TextInput } from 'react-native-gesture-handler'
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants'
import axios from 'axios'
import SearchTilee from '../components/products/SearchTilee'

const Search = () => {
  const [searchKey, setSearchKey] = useState("")
  const [searchResults, setSearchResults] = useState([])
  console.log(searchResults)

  const heandleSearch = async()=>{
    try {
      const results = await axios.get(`https://ecommerce-backend-f1kw.onrender.com/api/products/search/${searchKey}`)
      setSearchResults(results.data)
      
    } catch (error) {
      
    }
  }
  // console.log(searchKey)
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline"  size={24} style={styles.searchIcon} color="black" />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            onPressIn={()=>{}}
            placeholder='What are you looking for'
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={()=>heandleSearch()}>
            <Feather name="search"
             size={SIZES.xLarge} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{flex:1, alignContent:"center", alignItems:"center"}}>
          <Image
            source={require('../assets/pesq.png')}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList 
          data={searchResults}
          keyExtractor={(item)=> item._id}
          renderItem={({item})=> (<SearchTilee item={item} />)}
          style={{marginHorizontal:12}}
          // horizontal
          // contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Search