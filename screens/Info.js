import React, {useEffect, useState, useContext} from "react";
import {View, Image, Text, Button, FlatList, StyleSheet,ScrollView,TouchableOpacity,TextInput} from "react-native";
import {CartContext} from "../CartContext";

export function Info({navigation}){
    const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
    function renderItem({item}){
        return(
			<View
			// style={{marginTop:5,backgroundColor:'gray'}}
			>
            {/* <> */}
                <View style={styles.cartLine}>
                    {/* <Image style={styles.image} source={item.product.image} /> */}
                    <Text style={styles.lineLeft}>  {item.qty} {item.product.name}  
					<Text style={styles.productTotal}>  {item.totalPrice} .00 DH</Text>
					</Text>
                </View>
            {/* </> */}
			</View>
        )
    }
   return(
  
    <View
  style={{backgroundColor:'#f1f1f1'}}
  >
    <View style={{
            paddingTop:24, }}>
              <View style={{ justifyContent: "center",
                            //  paddingTop:24,
                            //  s:10,
                             backgroundColor:'#fff',
                             }}>
           <Text style={{fontSize:11,color:"gray", marginStart:10,}}>
                    *Lieu{'\n'} 
      {'\n'}
      <Text style={{fontSize:12,color:"#000",fontWeight:'bold'}}> Maroc</Text>
          </Text>   
        </View> 
   </View>


   <View style={{
            paddingTop:24,
            //  backgroundColor:'#fff',  width:420, 
             }}>
                  <View style={{
            // paddingTop:24,
             backgroundColor:'#fff',  width:420, 
             }}>
             <View style={{ 
                           width:380,
                            height:60,
                            marginStart:18,
                             backgroundColor:'#fff',
                             borderBottomWidth: 0.5,
                             borderColor: 'gray',
                             }}>
             <TextInput placeholder="*Prénom"  style={{fontSize:11,color:"gray", marginStart:10,paddingTop:18,}}  /> 
            </View> 
            </View>

            <View style={{
            // paddingTop:24,
             backgroundColor:'#fff',  width:420, 
             }}>
             <View style={{ 
                           width:380,
                            height:60,
                            marginStart:18,
                             backgroundColor:'#fff',
                             borderBottomWidth: 0.5,
                             borderColor: 'gray',
                             }}>
             <TextInput placeholder="*Nom De Famille"  style={{fontSize:11,color:"gray", marginStart:10,paddingTop:18,}}  /> 
            </View> 
            </View>

            <View style={{
            // paddingTop:24,
             backgroundColor:'#fff',  width:420, 
             }}>
             <View style={{ 
                           width:380,
                            height:60,
                            marginStart:18,
                            flexDirection:"row",
                             backgroundColor:'#fff',
                             borderBottomWidth: 0.5,
                             borderColor: 'gray',
                             }}>
                                 <Text style={{fontSize:11,color:"#000", marginStart:12,paddingTop:24,}}>MA +212 |</Text>
             <TextInput placeholder="*Numéro de téléphone"  style={{fontSize:11,color:"gray", marginStart:10,paddingTop:10,}}  /> 
            </View> 
            </View>

            <View style={{
            // paddingTop:24,
             backgroundColor:'#fff',  width:420, 
             }}>
             <View style={{ 
                           width:380,
                            height:60,
                            marginStart:18,
                             backgroundColor:'#fff',
                            //  borderBottomWidth: 0.5,
                            //  borderColor: 'gray',
                             }}>
            <Text  style={{fontSize:11,color:"gray", marginStart:10,paddingTop:10,}}>Pour la livraison, il nécessaire d'indiquer un numéro de téléphone valable.</Text>
            </View> 
            </View>
   </View>



   <View style={{
            paddingTop:24,
            //  backgroundColor:'#fff',  width:420, 
             }}>
                  <View style={{
            // paddingTop:24,
             backgroundColor:'#fff',  width:420, 
             }}>
             <View style={{ 
                           width:380,
                            height:60,
                            marginStart:18,
                             backgroundColor:'#fff',
                             borderBottomWidth: 0.5,
                             borderColor: 'gray',
                             }}>
             <Text  style={{fontSize:12,fontWeight:'bold',color:'black', marginStart:10,paddingTop:20,}}  > *Etat/Province</Text>
            </View> 
            </View>

            <View style={{
            // paddingTop:24,
             backgroundColor:'#fff',  width:420, 
             }}>
             <View style={{ 
                           width:380,
                            height:60,
                            marginStart:18,
                             backgroundColor:'#fff',
                             borderBottomWidth: 0.5,
                             borderColor: 'gray',
                             }}>
             <TextInput placeholder="*Ville"  style={{fontSize:11,color:"gray", marginStart:10,paddingTop:14,}}  /> 
            </View> 
            </View>

            <View style={{
            // paddingTop:24,
             backgroundColor:'#fff',  width:420, 
             }}>
             <View style={{ 
                           width:380,
                            height:60,
                            marginStart:18,
                            flexDirection:"row",
                             backgroundColor:'#fff',
                             borderBottomWidth: 0.5,
                             borderColor: 'gray',
                             }}>
                                
             <TextInput placeholder="*Code postal"  style={{fontSize:11,color:"gray", marginStart:10,}}  /> 
            </View> 
            </View>

            <View style={{
            // paddingTop:24,
             backgroundColor:'#fff',  width:420, 
             }}>
             <View style={{ 
                           width:380,
                            height:60,
                            marginStart:18,
                            flexDirection:"row",
                             backgroundColor:'#fff',
                            //  borderBottomWidth: 0.5,
                            //  borderColor: 'gray',
                            // #ff7f00
                             }}>
                                
             <TextInput placeholder="*Adresse"  style={{fontSize:11,color:"gray", marginStart:10,}}  /> 
            </View> 
            </View>
   </View>

   <View style={{marginTop:18,backgroundColor:'#000', marginStart:15,padding:2,fontSize: 16,height:40,fontWeight: 'bold',width:380,justifyContent: 'center', alignItems: 'center'}}>
                   
				<Text   style={{color:'#fff',fontSize: 16,fontWeight: 'bold'}} >CONSERVER</Text>
				</View>



                <View style={{marginTop:68,}}>
                <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.product.id.toString()}
            // ListFooterComponent={Totals}
        ></FlatList></View>

    </View>






 

   )
}

const styles = StyleSheet.create({
	cartLine: {
		borderBottomWidth: 1,
		borderColor:'#dcdcdc',
		
		flexDirection: 'row',
		width: 390,
		height:60,
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
		fontWeight: 'bold',
        fontSize: 12,
	},
	lineTotal: {
		fontWeight: 'bold'
	},
	lineLeft: {
		fontSize: 12,
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

