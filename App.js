

import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "./screens/ProductsList.js";
// import { AC } from "./screens/AC.js";
// import { CATE } from "./screens/CATE.js";

// import { PAGE } from "./screens/PAGE.js";
import { CAT } from "./screens/CAT.js";
import { FEMME } from "./screens/FEMME";

import { AC } from "./screens/AC.js";
import { PAGEAC } from "./screens/PAGEAC";
import { ProductDetails } from "./screens/ProductDetails.js";
import { Cart } from "./screens/Cart.js";
import { LIVRAISON } from "./screens/LIVRAISON.js";
import { ACHAT} from "./screens/ACHAT.js";
import { COMMANDE } from "./screens/COMMANDE.js";
import { COMPTE } from "./screens/COMPTE.js";
import { CartProvider } from "./CartContext.js";
import { CartIcon } from "./components/CartIcon.js";
import { Info } from "./screens/Info";
import { INSCRIRE } from "./screens/INSCRIRE.js";
import { PROFILE } from "./screens/PROFILE.js";


const Stack = createNativeStackNavigator();

function App(){
  return(
  //   <View>
  //   <Text>vvvvvv</Text>
  // </View>
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductsList} options={({navigation}) => ({title: 'MK- -Artisanat'})} />
          <Stack.Screen name="PAGEAC" component={PAGEAC} options={({navigation}) => ({title: 'MK- -Artisanat', headerRight: () => <CartIcon navigation={navigation} />})} />

          <Stack.Screen name="ACHAT" component={ACHAT} options={({navigation}) => ({title: 'Achetez et Retour facile', headerRight: () => <CartIcon navigation={navigation} />})} />
           <Stack.Screen name="COMMANDE" component={COMMANDE} options={({navigation}) => ({title: 'Commande', headerRight: () => <CartIcon navigation={navigation} />})} />
           <Stack.Screen name="Info" component={Info} options={({navigation}) => ({title: 'Adresse de livraison', headerRight: () => <CartIcon navigation={navigation} />})} />

          <Stack.Screen name="LIVRAISON" component={LIVRAISON} options={({navigation}) => ({title: 'Livraison', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="CAT" component={CAT} options={({navigation}) => ({title: 'Catégories', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="FEMME" component={FEMME} options={({navigation}) => ({title: 'Femmes', headerRight: () => <CartIcon navigation={navigation} />})} />
           <Stack.Screen name="AC" component={AC} options={({navigation}) => ({title: 'Colliers', headerRight: () => <CartIcon navigation={navigation} />})} />
           <Stack.Screen name="COMPTE" component={COMPTE} options={({navigation}) => ({title: 'Connexion', headerRight: () => <CartIcon navigation={navigation} />})} />
           <Stack.Screen name="INSCRIRE" component={INSCRIRE} options={({navigation}) => ({title: 'Inscription', headerRight: () => <CartIcon navigation={navigation} />})} />
           <Stack.Screen name="PROFILE" component={PROFILE} options={({navigation}) => ({title: 'Compte', headerRight: () => <CartIcon navigation={navigation} />})} />

          <Stack.Screen name="ProductDetails" component={ProductDetails} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="Cart" component={Cart} options={({navigation}) => ({title: 'Panier', headerRight: () => <CartIcon navigation={navigation} />})} />
            {/* <Stack.Screen name="PAGE" component={PAGE} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} /> */}


        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default App;