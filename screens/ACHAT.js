import React, {} from "react";
import {View, Image, Text, Button, FlatList, StyleSheet,ScrollView,TouchableOpacity} from "react-native";
// import {CartContext} from "../CartContext";

export function ACHAT({navigation}){
  
   return(
      <View>
         <View
        style={{backgroundColor:'#f1f1f1'}}
        >
           <View style={{
                            // alignItems: "center", justifyContent: "center",
                             paddingTop:14,
                            
                           
                             }}>

                             
           <Text style={{
                                  fontSize:11,
                                  marginStart:10,
                                    color:"gray",
       }}>Nous espérons que vous aimerez ce que vous avez commandé ! {'\n'}
       Cependant, dans le cas où vous ne seriez pas entièrement satisfait, {'\n'}
       nous avons rendu la procédure de retour très facile.</Text>   
       
        <View style={{// alignItems: "center", justifyContent: "center",
                             paddingTop:24,
                             marginStart:10,
                             }}>
           <Text style={{fontSize:14,
                     fontWeight:'bold',
                     color:"#000",
       }}>De combien de temps est-ce que je dispose avant de   {'\n'}
      faire un retour et est-ce que je dois payer les frais {'\n'}
      d'expédition ?</Text>   
        </View> 

        <View style={{// alignItems: "center", justifyContent: "center",
                             paddingTop:24,
                             marginStart:10,
                             }}>
           <Text style={{fontSize:12,
                     fontWeight:'bold',
                     color:"#000",
       }}>（1）À propos du délai de retour
          </Text>   
        </View> 


        <View style={{// alignItems: "center", justifyContent: "center",
                             paddingTop:24,
                             marginStart:10,
                             }}>
           <Text style={{fontSize:11,
                     color:"gray",
       }}>Nous acceptons les retours dans un délai de 30 jours à compter de la{'\n'} 
     date de livraison. Dès que nous recevrons votre colis dans {'\n'}
     notre entrepôt, votre remboursement sera automatiquement émis.
          </Text>   
        </View> 

        <View style={{// alignItems: "center", justifyContent: "center",
                             paddingTop:24,
                             marginStart:10,
                             }}>
           <Text style={{fontSize:12,
                     fontWeight:'bold',
                     color:"#000",
       }}>（2）À propos des étapes de retour
          </Text>   
        </View> 

        <View style={{// alignItems: "center", justifyContent: "center",
                             paddingTop:24,
                             marginStart:10,
                             }}>
           <Text style={{fontSize:11,
                     color:"gray",
       }}>Envoi par soi-même：Veuillez choisir votre propre société de logistique{'\n'} 
          <Text style={{fontSize:12,
                     color:"orange",
       }}>à vos frais </Text>et expédier le colis. {'\n'}
     
          </Text>   
        </View> 

        <View style={{// alignItems: "center", justifyContent: "center",
                             paddingTop:24,
                             marginStart:10,
                             }}>
           <Text style={{fontSize:14,
                     fontWeight:'bold',
                     color:"#000",
       }}>Comment effectuer un retour ?
          </Text>   
        </View> 

       
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 30 }}
          >
               <View
            style={{
                // marginStart:2,
              alignItems: "center",
              justifyContent: "center",
              height: 90,
              flexDirection:"row",
               width:83, }}>
                      <View  style={style.catt}><Text  style={{color:'#000',fontWeight:"bold",fontSize:9}}>1</Text></View>
                  <View
           style={style.cat}>
               <Image
                 source={require('../screens/images/r1.png')}
                 style={{ height: 27, width: 27 }} />
            </View>
             </View>


             <View
            style={{
                // marginStart:2,
              alignItems: "center",
              justifyContent: "center",
              flexDirection:"row",
              height: 90,
               width: 83, }}>
                    <View  style={style.catt}><Text  style={{color:'#000',fontWeight:"bold",fontSize:9}}>2</Text></View>
                  <View
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={style.cat}>
               
              <Image
                source={require('../screens/images/r2.png')}
                style={{ height: 27, width: 27 }} />
            </View>
           
            </View>


            <View
            style={{
                // marginStart:2,
              alignItems: "center",
              justifyContent: "center",
              flexDirection:"row",
              height: 90,
               width: 83, }}>
                    <View  style={style.catt}><Text  style={{color:'#000',fontWeight:"bold",fontSize:9}}>3</Text></View>
                  <View
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={style.cat}>
               
              <Image
                source={require('../screens/images/r3.png')}
                style={{ height: 27, width: 27 }} />
            </View>
           
            </View>


            <View
            style={{
                // marginStart:2,
              alignItems: "center",
              justifyContent: "center",
              flexDirection:"row",
              height: 90,
               width: 83, }}>
                    <View  style={style.catt}><Text  style={{color:'#000',fontWeight:"bold",fontSize:9}}>4</Text></View>
                  <View
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={style.cat}>
               
              <Image
                source={require('../screens/images/r4.png')}
                style={{ height:27, width: 27 }} />
            </View>
           
            </View>

            <View
            style={{
                // marginStart:2,
              alignItems: "center",
              justifyContent: "center",
              flexDirection:"row",
              height: 90,
               width: 83, }}>
                    <View  style={style.catt}><Text  style={{color:'#000',fontWeight:"bold",fontSize:9}}>5</Text></View>
                  <View
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={style.cat}>
               
              <Image
                source={require('../screens/images/r55.jpg')}
                style={{ height: 30, width: 30 }} />
            </View>
           
            </View>





          </ScrollView>





        <View style={{// alignItems: "center", justifyContent: "center",
                             paddingTop:24,
                             marginStart:10,
                             }}>
           <Text style={{fontSize:11,
                     color:"gray",
       }}>1. Connectez-vous à votre compte .{'\n'}
       2. Trouvez la commande dans Mes commandes , cliquez sur le bouton "Retourner l'article".{'\n'}
       3. Sélectionnez le(s) article(s) que vous souhaitez retourner, indiquez la raison, puis soumettez.{'\n'}
       4. Sélectionnez la méthode de retour et la méthode de remboursement, puis emballez le(s) article(s) à retourner avec l'emballage d'origine.{'\n'} 
           </Text>
        </View> 

           </View> 
      </View>
     



     
       </View>

   )
	
 

}

const style = StyleSheet.create({
    cat:{
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
        marginStart:3,
        borderColor:'#000',
    //    backgroundColor:"#f1f1f1",
       borderWidth:1,
       borderRadius:50,
        borderColor: 'gray',
        // borderWidth:3,
       },

       catt:{
        alignItems: "center",
        justifyContent: "center",
        height: 15,
        width: 15,
        borderColor:'gray',
    //    backgroundColor:"gray",
       borderWidth:1,
       borderRadius:50,
        // borderColor: 'gray',
        // borderWidth:3,
       },


	cartLine: {
		borderBottomWidth: 1,
		borderColor:'#dcdcdc',
		borderRadius:15,
		flexDirection: 'row',
		width: 390,
		height:180,
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