import React, {} from "react";
import {View, Image, Text, Button, FlatList, StyleSheet,ScrollView,TouchableOpacity} from "react-native";
// import {CartContext} from "../CartContext";

export function LIVRAISON({navigation}){
  
   return(
       <View
        style={{backgroundColor:'#f1f1f1'}}
        >
           <View style={{
                            alignItems: "center", justifyContent: "center", paddingTop:14,}}>
           <Text 
           style={{
           color:'gray',}}>Temps de préparation: 1-3 jours</Text>
           </View>
        
      <View  style={{
                            alignItems: "center",
                        //     justifyContent: "center",
                        //     flexDirection:"row",
                        //  padding:72,
                         paddingTop:70,
                         
                            //  marginBottom:5 
                             }}>  
                             <View style={{ borderBottomWidth: 2,
            borderColor: "#dcdcdc", width:400 }}>
          <Text 
          style={{ 
            color: "#f1f1f1"}}>.</Text>
          </View>
           <View  style={{
                            alignItems: "center",
                        //     justifyContent: "center",
                        //     flexDirection:"row",
                        //  padding:2,
                            //  marginBottom:5 
                             }}> 
         
           <View style={{
                            alignItems: "center", justifyContent: "center",
                            paddingTop:9,
                            flexDirection:"row",
                        //  padding:2,
                            //  marginBottom:5 
                             }}> 
                   <View style={{
                                   width:120,height:60,backgroundColor:"#f1f1f1",borderColor:"#dcdcdc",borderWidth:1.5, alignItems: "center", justifyContent: "center",}}>
						        <Text  style={{
                                  fontSize:11,
                                    // fontWeight:'bold',
                                    color:"#000",
                               }}>Mode De {'\n'}Livraison</Text></View>
    
                       <View style={{
                                   width:120,height:60,backgroundColor:"#f1f1f1",borderColor:"#dcdcdc",borderWidth:1.5, alignItems: "center", justifyContent: "center",}}>
                                   <Text  style={{
                                  fontSize:11,
                                    // fontWeight:'bold',
                                    color:"#000",
                               }}>Durée De {'\n'}Livraison</Text></View>
                              
                              <View style={{
                                   width:120,height:60,backgroundColor:"#f1f1f1",borderColor:"#dcdcdc",borderWidth:1.5, alignItems: "center", justifyContent: "center",}}>
                                   <Text  style={{
                                  fontSize:11,
                                    // fontWeight:'bold',
                                    color:"#000",
                               }}>Frais</Text></View>
                              </View>


                              <View style={{
                            // backgroundColor:"#000",
                            flexDirection:'row',
                        //  padding:2,
                            //  marginBottom:5 
                             }}> 
                   <View style={{
                                   width:120,height:150,borderColor:"#dcdcdc",borderWidth:1,backgroundColor:'#fff',alignItems: "center", justifyContent: "center",}}>
						        <Text  style={{
                                  fontSize:11,
                                    color:"gray",
                               }}>Livraison à</Text>
                               <Text  style={{
                                  fontSize:11,
                                    color:"gray",
                               }}>Domicile</Text>
                               </View>

               <View style={{
                                   width:120,height:150,borderColor:"#dcdcdc",borderWidth:1,backgroundColor:'#fff',alignItems: "center", justifyContent: "center",}}>
                                   <Text  style={{
                                  fontSize:11,
                                    // fontWeight:'bold',
                                    color:"gray",
                               }}>Livraison aprés 3 jours si vous commandez  maintenant.</Text></View>   


                 <View style={{
                                   width:120,height:150,borderColor:"#dcdcdc",borderWidth:1,backgroundColor:'#fff',alignItems: "center", justifyContent: "center",}}>
                                   <Text  style={{
                                  fontSize:10,
                                    fontWeight:'bold',
                                    color:"gray",
                               }}>DH50.00—dépenser{'\n'} moins de DH500.00{'\n'}
                               DH60.00—dépenser {'\n'}plus de DH500.00,{'\n'}mais moins de{'\n'}DH1000.00{'\n'}
                               DH80.00—pour plus {'\n'}de DH1000.00</Text></View>        
    
                               </View>
                              </View>
                             </View> 


                 <View style={{
                            // alignItems: "center",
                        //     justifyContent: "center",
                        //     flexDirection:"row",
                        //  padding:72,
                         paddingTop:70,
                         margin:20,
                           marginBottom:5 
                             }}>  
                    
               <Text style={{
                                  fontSize:12,
                                    color:"gray",
                               }}>* Le délai de livraison est une estimation basée sur la date à laquelle 
                   vous avez payé la commande, mais le réel délai de livraison peut être 
                   plus long que prévu à cause d'une adresse invalide, de procédures de 
                   dédouanement ou d'autres causes.{'\n'}{'\n'}{'\n'}
                   Si votre colis n'a pas été livré ou si les informations de suivi indiquent 
                   que votre colis a été livré mais que vous ne l'avez pas reçu, vous devez
                    contacter le service clientèle .{'\n'}{'\n'}{'\n'}
                    * En raison des exigences en matière de transport du service logistique 
                    et pour assurer une livraison efficace du colis, votre commande pourrait 
                    être transportée en séparation. Merci de votre compréhension.
                   
                   
                   
                   
                   </Text>
               

                 </View>


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