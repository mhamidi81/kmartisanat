import React from "react";
import {Text, Image, View, StyleSheet, TouchableOpacity} from "react-native";

export function Product({name, price, image, onPress}){
    return(
        <View  style={styles.card1}  onPress={onPress}>
              <View style={styles.card} >
            <Image  style={styles.image} source={image} /></View>
            <View style={styles.infoContainer}>
                <Text onPress={onPress} style={styles.price}>DH{price}.00 </Text>
                <Text onPress={onPress} style={styles.name}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        // borderRadius: 16,
        alignItems: 'center',
        // justifyContent: 'center',
        // marginTop: 30
    },
    card1: {
        borderColor:"#b3aeae",
        borderWidth:0.5,
        height: 240,
        marginTop:2,
        // paddingTop:5,
        // justifyContent: 'space-between',
         
        // paddingRight:5,
        // paddingStart:5,
        // paddingLeft:20,
        // backgroundColor:"gray",
          width: 196,
    },
    image: {
        // width: '65%',
        // height:'95%',
        width: '50%',
        height:'80%',
        aspectRatio: 1
    },
    infoContainer: {
        padding: 10,
        // paddingTop:8,
        // marginTop: 1
    },
    name: {
        fontSize:10,
       
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        // marginBottom: 8
    }
})