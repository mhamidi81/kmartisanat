import React, {useEffect, useState, useContext} from "react";
import {View, Image, Text, Button, FlatList, StyleSheet,ScrollView,TouchableOpacity} from "react-native";
import {CartContext} from "../CartContext";

export function Cart({navigation}){
    const {items, getItemsCount, getTotalPrice} = useContext(CartContext);

    function Totals(){
        let [total, setTotal] = useState(0);
        useEffect(() => {
            setTotal(getTotalPrice())
        })
        return(
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
                <Text style={styles.mainTotal}>DH {total}.00 </Text>
				<View style={{marginTop:8,backgroundColor:"orange",padding:2,fontSize: 16,height:30,fontWeight: 'bold',width:150,justifyContent: 'center', alignItems: 'center'}}>
                   
				<Text onPress={() => {navigation.navigate('Info')}}  style={{color:'#fff',fontSize: 16,fontWeight: 'bold'}} >PAYER</Text>
				</View>
				
				</View>
        )
    }

    function renderItem({item}){
        return(
			<View
			// style={{marginTop:5,backgroundColor:'gray'}}
			>
            {/* <> */}
                <View style={styles.cartLine}>
                    <Image style={styles.image} source={item.product.image} />
                
                    <Text style={styles.lineLeft}>   {item.product.name} {'\n'} 
					<Text >   Qty = {item.qty} {'\n'}</Text>
					
					<Text style={styles.productTotal}>   {item.totalPrice} .00 DH</Text>
					</Text>
                </View>
            {/* </> */}
			</View>
        )
    }

    return(
		// <ScrollView
		<View
			style={{padding:10}}
			>
				 <View 
              style={{
                          marginTop:10,
                            // borderRadius:10,
                            height:90,
                            width:391,
							padding:10,
							backgroundColor:'#fff8dc',
							 // borderColor:"#dcdcdc",
                            // borderWidth:1,
							 }}>
                      <View style={{
                            // backgroundColor:"#000",
                            flexDirection:"row",
                         padding:2,
                            //  marginBottom:5 
                            
                            }}> 
						  <Text  style={{
                                  fontSize:14,
                                    fontWeight:'bold',
                                    color:"#000",
                                   
                                }}>Articles Panier Plus</Text>
						  <View style={{
                                   paddingLeft:130,}}>
                                <Text 
								 onPress={() => {navigation.navigate('AC')}}
								style={{
                                //   borderBottomWidth: 1,
                                //   borderColor: "#1e90ff",
                                  fontSize:14,
                                    fontWeight:'bold',
                                    color:"#000",
                                    // fontFamily:"Bold",
                                    marginHorizontal:10
                                }}>
                                   Ajouter
                                </Text> 
								</View>
								<Image
                                  source={require('../screens/images/arrow.png')}
                                  style={{margin:4, height:15,width:15}}
                                />
					  </View>
					  {/* <Text style={{color:'#fff8dc'}}>.</Text> */}
					   <Text style={{ fontSize: 13,}}>Dépensez <Text  style={{fontWeight: 'bold', fontSize: 13, color: '#ff7f00', paddingLeft:50, }}>DH3500.00</Text> pour profiter des réductions. {'\n'}et profiter les soldes</Text>
					   </View>	
        <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.product.id.toString()}
            ListFooterComponent={Totals}
        ></FlatList>
		{/* </ScrollView> */}
		</View>
		
	
    )

}

const styles = StyleSheet.create({
	cartLine: {
		borderBottomWidth: 1,
		borderColor:'#dcdcdc',
		borderRadius:15,
		flexDirection: 'row',
		width: 390,
		height:150,
		paddingVertical: 10
	},
	image: {
		width: 100,
		height:100,
		// borderWidth:1,
		// borderColor:'#000',
		aspectRatio: 1,
		marginRight: 5
	},
	cartLineTotal: {
		flexDirection: 'row',
		borderTopColor: '#dcdcdc',
		marginTop:10,
		borderTopWidth: 2
	},
	productTotal: {
		fontWeight: 'bold'
	},
	lineTotal: {
		fontWeight: 'bold'
	},
	lineLeft: {
		fontSize: 16,
		lineHeight: 40,
		color: '#333333'
	},
	lineRight: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333333',
		textAlign: 'left',
	},
	mainTotal: {
		flex: 1,
		fontSize:15,
		fontWeight: 'bold',
		lineHeight: 40,
		color: '#000',
		textAlign: 'right'
	},
	itemsList: {
		marginTop:10,
		
		backgroundColor: 'white'
	},
	itemsListContainer: {
		backgroundColor: 'white',
		paddingVertical: 8,
		marginHorizontal: 8
	
	}
})