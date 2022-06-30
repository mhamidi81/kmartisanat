import React, {} from "react";
import {View, Image, Text, Button, FlatList, StyleSheet,ScrollView,TouchableOpacity} from "react-native";
// import {CartContext} from "../CartContext";

export function COMMANDE({navigation}){
  
   return(
    <View
    style={{backgroundColor:'#f1f1f1', paddingTop:4,}}
    >
        
        <View style={{ alignItems: "center", justifyContent: "center",
                   paddingTop:10,
                  marginStart:10,
                             }}>
           <Text style={{fontSize:14,
             fontWeight:'bold',
            color:"#000",
       }}>Faire du shopping sur <Text style={{fontSize:11,
        color:"orange",fontSize:14,
}}>MK-Artisanat  </Text>est très facile. {'\n'} Suivez simplement les étapes ci-dessous.
     </Text>   
        </View> 


        <View style={{
                   paddingTop:24,
                  marginStart:10,
                             }}>
           <Text style={{fontSize:14,
             fontWeight:'bold',
            color:"#000",
       }}>* Étape 1 : {'\n'} {'\n'}Ajouter un ou plusieurs articles dans votre panier.
     </Text>   
        </View> 

        <View style={{// alignItems: "center", justifyContent: "center",
                             paddingTop:24,
                             marginStart:10,
                             }}>
           <Text style={{fontSize:12,
                     color:"gray",
       }}>Sélectionnez la taille la couleur et la quantité si nécessaire.{'\n'} Il est possible que pour certains articles, nous vous recommanderons la taille à prendre{'\n'}
       {'\n'}Cliquez sur "AJOUTER AU PANIER".
          </Text>   
        </View> 

        <View style={{
                   paddingTop:24,
                  marginStart:10,
                             }}>
           <Text style={{fontSize:14,
             fontWeight:'bold',
            color:"#000",
       }}>* Étape 2 : {'\n'} {'\n'}Vérifier les articles choisis.
     </Text>   
        </View>


        <View style={{// alignItems: "center", justifyContent: "center",
                             paddingTop:24,
                             marginStart:10,
                             }}>
           <Text style={{fontSize:12,
                     color:"gray",
       }}>
      Cliquez sur le bouton PANIER pour vérifier les articles choisis .
          </Text>   
        </View> 

        <View style={{
                   paddingTop:24,
                  marginStart:10,
                             }}>
           <Text style={{fontSize:14,
             fontWeight:'bold',
            color:"#000",
       }}>* Étape 3 : {'\n'} {'\n'}Se connecter à votre compte.

     </Text>   
        </View>

        <View style={{// alignItems: "center", justifyContent: "center",
                             paddingTop:24,
                             marginStart:10,
                             }}>
           <Text style={{fontSize:12,
                     color:"gray",
       }}>
      Allez dans « Me connecter » si vous avez déjà un compte sur notre site. {'\n'}
      Cliquez sur « Nouveau sur SHEIN » pour vous inscrire avec votre adresse mail.
          </Text>   
        </View> 

        <View style={{
                   paddingTop:24,
                  marginStart:10,
                             }}>
           <Text style={{fontSize:14,
             fontWeight:'bold',
            color:"#000",
       }}>* Étape 4 : {'\n'} {'\n'}Compléter les informations d'expédition et de facturation.

     </Text>   
        </View>

        <View style={{// alignItems: "center", justifyContent: "center",
                             paddingTop:24,
                             marginStart:10,
                             }}>
           <Text style={{fontSize:12,
                     color:"gray",
       }}>
      Remplissez l'adresse de livraison. {'\n'}
      Cliquez sur « PASSER COMMANDE »..
          </Text>   
        </View> 






    </View>

    

   )
	
 

}

