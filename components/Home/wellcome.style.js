import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";
        
const styles = StyleSheet.create({
    container:{
        width:"100%"
    },
    wellcomeText:(color, top)=>({
        fontWeight: 600,
        fontSize:SIZES.xxLarge -6,
        marginTop: top,
        color:color,
        marginHorizontal:SIZES.small,
    }),
    searchContainer:{
        flexDirection: 'row',
        justifyContent:"center",
        alignContent:"center",
        marginHorizontal:SIZES.small,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
        height:50
    },
    searchIcon:{
        marginHorizontal:10,
        color:COLORS.gray,
        marginTop:SIZES.small
    },
    searchWrapper:{
        flex:1,
        backgroundColor:COLORS.secondary,
        marginRight:SIZES.small,
        borderRadius:SIZES.small
    },
    searchInput:{
        width:"100%",
        height:"100%",
        fontWeight:"500",
        paddingHorizontal:SIZES.small
    },
    searchBtn:{
        width:50,
        height:"100%",
        borderRadius:SIZES.medium,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:COLORS.primary,

    }
})
        
export default styles