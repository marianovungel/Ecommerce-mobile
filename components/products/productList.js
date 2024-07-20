import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";
        
const styles = StyleSheet.create({
    loadingConatiner:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center"
    },
    conatiner:{
        alignItems:"center",
        paddingTop:SIZES.xxLarge,
        paddingLeft: SIZES.small/2
    },
    separator:{
        height:16
    }
})
        
export default styles