import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";
        
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightwhite
    },
    upperRow:{
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"absolute",
        top:SIZES.xxLarge,
        width:SIZES.width -44,
        zIndex:999
    },
    image:{
        aspectRatio:1,
        resizeMode:"cover"
    },
    details:{
        marginTop: -SIZES.large,
        backgroundColor:COLORS.lightwhite,
        width:SIZES.width,
        borderTopLeftRadius:SIZES.medium,
        borderTopRightRadius:SIZES.medium
    },
    cardRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width,
    },
    cardBtn:{
        width:SIZES.width*0.7,
        backgroundColor:COLORS.black,
        padding:SIZES.small,
        borderRadius:SIZES.large,
        marginLeft:12
    },
    cartTitle:{
        marginLeft:SIZES.small,
        fontWeight:"bold",
        fontSize:SIZES.medium,
        color:COLORS.lightwhite
    },
    addCart:{
        width:37,
        height:37,
        borderRadius:50,
        margin:SIZES.small,
        backgroundColor:COLORS.black,
        justifyContent:"center",
        alignItems:"center"
    },
    titleRow:{
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width -44,
        top:20
    },
    ratingRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width -10,
        top:5
    },
    rating:{
        top:SIZES.large,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginHorizontal:SIZES.large
    },
    ratingText:{
        color:COLORS.gray,
        fontWeight:"500",
        paddingHorizontal:SIZES.xSmall
    },
    descriptionWrapper:{
        marginTop: SIZES.large*2,
        marginHorizontal:SIZES.large
    },
    description:{
        fontWeight:"400",
        fontSize:SIZES.large -2
    },
    descText:{
        fontWeight:"300",
        fontSize:SIZES.small,
        textAlign:"justify",
        marginBottom:SIZES.small
    },
    location:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:COLORS.secondary,
        marginHorizontal:12,
        padding:5,
        borderRadius:SIZES.large
    },
    title:{
        fontWeight:"bold",
        fontSize:SIZES.large
    },
    price:{
        paddingHorizontal:10,
        fontWeight:"500",
        fontSize:SIZES.medium
    },
    priceWrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.large
    }
})
        
export default styles