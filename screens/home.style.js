import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";
        
const styles = StyleSheet.create({
    text:{
        fontSize:50
    },
    appBarWrapper:{
        marginHorizontal: 22,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center"
    },
    location:{
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    CartCout:{
        position: "absolute",
        bottom: 16,
        width:16,
        height:16,
        borderRadius:8,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor:"green",
        zIndex:999
    },
    cartNumber:{
        fontWeight: "600",
        fontSize:10,
        color: COLORS.lightwhite
    }
})
        
export default styles