import React, {useEffect, useState, useContext} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    SafeAreaView,
      ScrollView,
    TouchableOpacity,
} from "react-native";
import {CartContext} from "../CartContext";
import Icon from 'react-native-vector-icons/MaterialIcons';
export function INSCRIRE({navigation}){
   
    

    return(
	
                
        <SafeAreaView
        style={{ flex: 1, backgroundColor: '#fff'}}>
            <ScrollView
                     showsVerticalScrollIndicator
                     showsHorizontalScrollIndicator={false}
                     style={{
                      backgroundColor:"#fff",
                      height:680,
                      width:414,
                      paddingHorizontal: 20,
                      elevation:2,
                   }}
                   >

       <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: '#000'}}>
          Bienvenue
          </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', color:'#a5a5a5'}}>
          Inscrivez-vous pour continuer
          </Text>
        </View>
        <View style={{marginTop: 20}}>
        <View style={STYLES.inputContainer}>
            <Icon
             name="person-outline"
              color={'#a5a5a5'}
              size={25}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Nom compléte" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={'#a5a5a5'}
              size={25}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="E-mail ou téléphone" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={'#a5a5a5'}
              size={25}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Mot de passe"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <View style={STYLES.btnPrimary}>
            <Text onPress={() => {navigation.navigate('PROFILE')}} style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
            INSCRIPTION
            </Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OU</Text>
            <View style={STYLES.line}></View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
              S'inscrire avec
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../screens/images/face1.png')}
               
              />
            </View>
            <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>
              S'inscrire avec
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../screens/images/google.png')}
              
              />
            </View></View></View>
            <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color:'#a5a5a5', fontWeight: 'bold'}}>
          Vous avez déjà un compte ?
          </Text>
          <TouchableOpacity >
            <Text onPress={() => navigation.navigate('COMPTE')} style={{color:'#ff2d5f', fontWeight: 'bold'}}>
            Connexion
            </Text>
          </TouchableOpacity>
        </View>
         </ScrollView>

         <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{height:54, width:414,borderColor:"#f1f1f1",borderWidth:2}}
             
          >
             <View
            style={{
              alignItems: "center",
              // justifyContent: "center",
              height: 90,
              marginStart:24,
               width:90, }}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
            //   style={style.cat1}
            >
              <Image
               source={require('../screens/images/ac3.png')}
                style={{ height: 28, width: 28 }} />
            </TouchableOpacity>
            <Text onPress={() => {navigation.navigate('PAGEAC')}} style={{color:'gray',fontWeight:"bold",fontSize:10}}>Accueil</Text>
            {/* <Text  style={{color:'#ff7f00',fontWeight:"bold",fontSize:10}}>Accueil</Text> */}
            </View>

            <View
            style={{
              alignItems: "center",
             
              height: 90,
               width: 90, }}>
                  {/* <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={style.cat1}> */}
               
              <Image  
                source={require('../screens/images/cat2.png')}
                style={{ height: 28, width: 28 }} />
            {/* </TouchableOpacity> */}
            <Text onPress={() => {navigation.navigate('CAT')}}
            // onPress={renderPr}  
             style={{color:'gray',fontWeight:"bold",fontSize:10}}>Catégorie</Text>
            </View>

            <View
            style={{
              alignItems: "center",
              
              height: 90,
               width: 90, }}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
            //   style={style.cat1}
              >
              <Image
                source={require('../screens/images/pan.png')}
                style={{ height: 28, width: 28 }} />
            </TouchableOpacity>
            <Text  onPress={() => {navigation.navigate('Cart')}}  style={{color:'gray',fontWeight:"bold",fontSize:10}}>Panier</Text>
            </View>

            <View
            style={{
              alignItems: "center",
             
              height: 90,
               width: 90, }}>
                  <View
              // onPress={() => this.props.navigation.navigate("Detail")}
            //   style={style.cat1}
              >
              <Image
                source={require('../screens/images/compteorg.png')}
                // onPress={() => this.props.navigation.navigate("LOGIN")}
                style={{ height: 28, width: 28 }} />
            </View>
            <Text 
            // onPress={() => this.props.navigation.navigate("LOGIN")}
             style={{color:'orange',fontWeight:"bold",fontSize:10}}>Compte</Text>
            </View>
            
             </ScrollView>

            
             </SafeAreaView>
    
    )

}

const STYLES = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      
    },
    inputContainer: {flexDirection: 'row', marginTop:40},
    input: {
      color: '#a5a5a5',
      paddingLeft: 30,
      borderBottomWidth: 1,
      borderColor: '#a5a5a5',
      borderBottomWidth: 0.5,
      flex: 1,
      fontSize: 18,
    },
    cat1:{
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        width: 30,
        // borderColor: 'gray',
        // borderWidth:3,
       
    
      },
   
    Logo: {
      width: 200 ,
      height: 150 ,
     },
     btnSecondary: {
      height: 50,
      borderWidth: 1,
      borderColor: '#a5a5a5',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      flex: 1,
      flexDirection: 'row',
    },
     inputIcon: { position: 'absolute'},
     btnPrimary: {
    //    backgroundColor: "#ff8c00",
    backgroundColor: "orange",
       height: 50,
       borderRadius: 5,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 50,
     },
     btnImage: {width: 20, height: 20, marginLeft: 5},
  
     line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
  
    
  
  });