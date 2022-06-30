import React, {useEffect, useState, useContext} from "react";
import {View, Image, Text, Button, FlatList, StyleSheet,ScrollView,TouchableOpacity,TextInput} from "react-native";
import {CartContext} from "../CartContext";

export function PROFILE({navigation}){
    const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
    function renderItem({item}){
        return(
			<View
			// style={{marginTop:5,backgroundColor:'gray'}}
			>
            {/* <> */}
                <View style={styles.cartLine}>
                    <Image style={styles.image} source={item.product.image} />
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
    {/* <View style={{
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
   </View> */}


   <View style={{
            paddingTop:14,
            //  backgroundColor:'#fff',  width:420, 
             }}>
                  <View style={{
            // paddingTop:24,
             backgroundColor:'#fff',  width:420, 
             }}>
             <View style={{ 
                           width:380,
                            height:160,
                            marginStart:18,
                             backgroundColor:'#fff',
                             borderBottomWidth: 0.5,
                             borderColor: 'gray',
                             }}>
               <Text  style={{fontSize:13,fontWeight:'bold',color:'black', marginStart:10,paddingTop:20,}}  >Mes Commandes</Text>
               <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10 }}
          >
             <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 90,
               width:83, }}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={styles.cat}>
              <Image
                 source={require('../screens/images/paye.png')}
                style={{ height: 50, width: 50 }} />
            </TouchableOpacity>
            <Text   style={{color:'#000',fontSize:10}}>Non payé</Text>
            <Text   style={{color:'#fff',fontSize:10}}>.</Text>
            </View>

        
            
            <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 90,
              marginStart:20,
             width: 83, }}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={styles.cat}>
              <Image
                 source={require('../screens/images/trait.jpg')}
                style={{ height: 37, width: 45 }} />
            </TouchableOpacity>
            <Text  style={{color:'#000',fontSize:10}}>En cours </Text>
            <Text  style={{color:'#000',fontSize:10}}>de traitement</Text>
            </View>

            <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 90,
              marginStart:20,
             width: 83, }}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={styles.cat}>
              <Image
                 source={require('../screens/images/exp.png')}
                style={{ height: 43, width: 40 }} />
            </TouchableOpacity>
            <Text  style={{color:'#000',fontSize:10}}>Expédiés </Text>
            <Text  style={{color:'#fff',fontSize:10}}>.</Text>
            </View>

            <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 90,
              marginStart:20,
             width: 83, }}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={styles.cat}>
              <Image
                 source={require('../screens/images/retor.png')}
                style={{ height: 50, width: 50 }} />
            </TouchableOpacity>
            <Text  style={{color:'#000',fontSize:10}}>Retour </Text>
            <Text  style={{color:'#fff',fontSize:10}}>.</Text>
            </View>
            
            
            </ScrollView>
                </View> 
            </View>

          

   </View>




   <View style={{
            paddingTop:14,
            //  backgroundColor:'#fff',  width:420, 
             }}>
                  <View style={{
            // paddingTop:24,
             backgroundColor:'#fff',  width:420, 
             }}>
             <View style={{ 
                           width:380,
                            height:85,
                            marginStart:18,
                             backgroundColor:'#fff',
                            //  borderBottomWidth: 0.5,
                            //  borderColor: 'gray',
                             }}>
               <Text  style={{fontSize:12,fontWeight:'bold',color:'gray', marginStart:10,paddingTop:5,}}  >Non payé</Text>
               <View
                style={{  
                    alignItems: "center",
                        justifyContent: "center",}}
               >
                    <View style={{ 
                           
                           height:40,
                           width:50,
                           alignItems: "center",
                           justifyContent: "center",
                             borderBottomWidth: 0.5,
                             borderColor: 'gray',
                             }}>
               <Image
                 source={require('../screens/images/vide.png')}
                style={{ height:32, width: 24 ,}} /></View>
                  <Text  style={{fontSize:10,color:'gray', paddingTop:5}}>Vide ici:-(</Text>
                  </View>
              </View> 
            </View>
     </View>




     <View style={{
            paddingTop:14,
            //  backgroundColor:'#fff',  width:420, 
             }}>
                  <View style={{
            // paddingTop:24,
             backgroundColor:'#fff',  width:420, 
             }}>
             <View style={{ 
                           width:380,
                            // height:85,
                            marginStart:18,
                             backgroundColor:'#fff',
                            //  borderBottomWidth: 0.5,
                            //  borderColor: 'gray',
                             }}>
               <Text  style={{fontSize:12,fontWeight:'bold',color:'gray', marginStart:10,paddingTop:5,}}  >En cours de traitement</Text>
               
               
                <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.product.id.toString()}
            // ListFooterComponent={Totals}
        ></FlatList>
              </View> 
            </View>
     </View>



     <View style={{
            paddingTop:14,
            //  backgroundColor:'#fff',  width:420, 
             }}>
                  <View style={{
            // paddingTop:24,
             backgroundColor:'#fff',  width:420, 
             }}>
             <View style={{ 
                           width:380,
                            height:85,
                            marginStart:18,
                             backgroundColor:'#fff',
                            //  borderBottomWidth: 0.5,
                            //  borderColor: 'gray',
                             }}>
               <Text  style={{fontSize:12,fontWeight:'bold',color:'gray', marginStart:10,paddingTop:5,}}  >Expédiés</Text>
               <View
                style={{  
                    alignItems: "center",
                        justifyContent: "center",}}
               >
                    <View style={{ 
                           
                           height:40,
                           width:50,
                           alignItems: "center",
                           justifyContent: "center",
                             borderBottomWidth: 0.5,
                             borderColor: 'gray',
                             }}>
               <Image
                 source={require('../screens/images/vide.png')}
                style={{ height:32, width: 24 ,}} /></View>
                  <Text  style={{fontSize:10,color:'gray', paddingTop:5}}>Vide ici:-(</Text>
                  </View>
              </View> 
            </View>
     </View>




     <View style={{
            paddingTop:14,
            //  backgroundColor:'#fff',  width:420, 
             }}>
                  <View style={{
            // paddingTop:24,
             backgroundColor:'#fff',  width:420, 
             }}>
             <View style={{ 
                           width:380,
                            height:85,
                            marginStart:18,
                             backgroundColor:'#fff',
                            //  borderBottomWidth: 0.5,
                            //  borderColor: 'gray',
                             }}>
               <Text  style={{fontSize:12,fontWeight:'bold',color:'gray', marginStart:10,paddingTop:5,}}  >Retour</Text>
               <View
                style={{  
                    alignItems: "center",
                        justifyContent: "center",}}
               >
                    <View style={{ 
                           
                           height:40,
                           width:50,
                           alignItems: "center",
                           justifyContent: "center",
                             borderBottomWidth: 0.5,
                             borderColor: 'gray',
                             }}>
               <Image
                 source={require('../screens/images/vide.png')}
                style={{ height:32, width: 24 ,}} /></View>
                  <Text  style={{fontSize:10,color:'gray', paddingTop:5}}>Vide ici:-(</Text>
                  </View>
              </View> 
            </View>
     </View>


     <View style={{
            paddingTop:14,
            //  backgroundColor:'#fff',  width:420, 
             }}>
                  <View style={{
              width:380,
              height:85,
             backgroundColor:'#fff',  width:420, 
             }}>
            
            </View>
     </View>

     


















  




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
		width: 56,
		height:56,
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
		// marginTop:10,
		
		backgroundColor: 'white'
	},
	itemsListContainer: {
		backgroundColor: 'white',
		// paddingVertical: 8,
		// marginHorizontal: 8
	
	},
    cat:{
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        width: 60,
       backgroundColor:"#fff",
    //    borderRadius:50,
        // borderColor: 'gray',
        // borderWidth:3,
       
    
      },
})

