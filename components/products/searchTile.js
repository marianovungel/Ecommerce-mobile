import { StyleSheet } from "react-native";
import { COLORS, SHADONS, SIZES } from "../../constants/index";
        
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:SIZES.small,
        flexDirection:"row",
        padding:SIZES.medium,
        borderRadius:SIZES.small,
        backgroundColor:"#fff",
        ...SHADONS.medium,
        shadowColor:COLORS.lightwhite
    },
    image:{
        width:70,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        justifyContent:"center",
        alignItems:"center"
    },
    productImg:{
        width:"100%",
        height:65,
        borderRadius:SIZES.small,
        resizeMode:"cover"
    },
    textContainer:{
        flex:1,
        marginHorizontal:SIZES.medium
    },
    productTitle:{
        fontWeight:600,
        fontSize:SIZES.medium,
        color:COLORS.primary
    },
    supplier:{
        fontSize:SIZES.small + 2,
        fontWeight:400,
        color:COLORS.gray,
        marginTop:2
    }
})
        
export default styles