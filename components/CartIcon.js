import React, {useContext} from "react";
import {View, Text, StyleSheet,Image} from "react-native";
import { CartContext } from "../CartContext";

export function CartIcon({navigation}){
    const {getItemsCount} = useContext(CartContext);
    return(
        <View style={styles.container}>
			 <Image
                source={require('../screens/images/cartpan.png')}
                style={{ height: 24, width: 24 }} />
            <Text style={styles.text} onPress={() => {navigation.navigate('Cart')}}>
                ({getItemsCount()})
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 8,
		// backgroundColor: 'orange',
		height: 34,
		padding:8,
		// borderRadius: 32,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: '#000',
		fontWeight: 'bold',
		fontSize: 12
	}
})