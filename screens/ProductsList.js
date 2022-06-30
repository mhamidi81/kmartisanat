import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    Image,
    SafeAreaView,
    TextInput,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import Icon from 'react-native-vector-icons/MaterialIcons';
import { getProducts } from "../services/ProductsService";
import {Product} from "../components/Product";

export function ProductsList({navigation}){
    

    return(
      <View
               style={{ alignItems: "center",
               justifyContent: "center",
              backgroundColor:'#fff',
              
              }}
              >
      
              
              <View
               style={{ 
                 alignItems: "center",
              //  justifyContent: "center",
              backgroundColor:'#fff',
              height:700,
              paddingTop:170,
              }}
              >
                             <Image
                 source={require('../screens/images/MKa.png')}
                style={{ height: 120, width: 120 }} />
                <Text  style={{color:'#ff7f00',fontWeight:"bold",fontSize:16,paddingTop:19,}}  onPress={() => {navigation.navigate('PAGEAC')}} >  MK--Artisanat</Text>
              </View>
</View>

          
         
      
    )

}

const style = StyleSheet.create({
 
 
    categoryContainer: {
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 20,
      justifyContent: 'space-between',
    },
   
     header: {
      marginTop: 3,
  
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    image:{
      height: 70,
      width: 80,
    },
    image1:{
      height: 70,
      width: 89,
    },
    input: {
      fontSize: 15,
      fontWeight: 'bold',
      flex: 1,
      color: '#000',
    },
    searchContainer: {
      height: 30,
      backgroundColor: '#F1F1F1',
      borderRadius: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    sortBtn: {
      marginLeft: 10,
      height: 30,
      width: 30,
      borderRadius: 10,
      backgroundColor:"orange",
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoryText:
     {fontSize: 16, color: 'grey', fontWeight: 'bold'},
    categoryTextSelected: {
      color:'#ff7f00',
      paddingBottom: 5,
      borderBottomWidth: 2,
      borderColor: '#ff7f00',
    },
    check:{
      alignItems: "center",
      justifyContent: "center",
      height:35,
      marginStart:10,
      backgroundColor: "#f1f1f1",
       width:120,
  
    },
    cat:{
      alignItems: "center",
      justifyContent: "center",
      height: 60,
      width: 60,
     backgroundColor:"#f1f1f1",
     borderRadius:50,
      // borderColor: 'gray',
      // borderWidth:3,
     
  
    },
    cat1:{
      alignItems: "center",
      justifyContent: "center",
      height: 30,
      width: 30,
      
      // borderColor: 'gray',
      // borderWidth:3,
     
  
    },
  //  textsize:
  //  {
  //    fontSize:10,
  //  },
  //  toucheview2:{
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: 100,
  //     width: 100,
      
  //  },
   sol:{
    alignItems: "center",
    justifyContent: "center",
    marginStart:40,
    height: 80,
     width:100, 
   },
   sol1:{
    alignItems: "center",
    justifyContent: "center",
    marginStart:3,
    height: 80,
     width:100, 
   },
   
  
  });