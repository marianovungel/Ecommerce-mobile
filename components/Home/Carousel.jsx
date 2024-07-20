import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import styles from './carousel.style'
import { COLORS } from '../../constants'

const Carousel = () => {
    const slides = [
        "https://i.pinimg.com/736x/d2/71/7d/d2717d7b5f5a4354311d9ace8d60f515.jpg",
        "https://s2.glbimg.com/FxBengkVFvTKVgKY9I1Iofx4oPM=/smart/e.glbimg.com/og/ed/f/original/2018/08/14/apartamento-branco-morumbi-001.jpg",
        "https://finger.ind.br/wp-content/uploads/2021/08/post_thumbnail-a604185952a2859240903c1b2af3cd7c-1170x685.jpg",
    ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox 
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle = {{borderRadius:15, width: "92%", marginTop: 15}}
        autoplay
        circleLoop
        images={slides} />
    </View>
  )
}

export default Carousel