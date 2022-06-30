import React, {useEffect, useState, useContext} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Button} from "react-native";
import { getProduct } from '../services/ProductsService';
import {CartContext} from "../CartContext";

export function ProductDetails({route}) {

    const {productId} = route.params;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(getProduct(productId))
    })

    const {addItemToCart} = useContext(CartContext)

    function onAddToCart(){
      addItemToCart(product.id)
    }


  return (
    <View style={{
      flex:1,
      backgroundColor:"#fff",
      paddingHorizontal:15,
      width:430,
  }}>
        <ScrollView 
                    style={{
                      // marginTop:5
                    }}
                    showsVerticalScrollIndicator
                    showsHorizontalScrollIndicator={false}
                    
                    >
            <View style={{
                        flexDirection:"row",
                        height:280,
                       
                        alignItems: 'center',
                        justifyContent: 'center',
                        width:360,
                    }}>
                      
                <Image style={styles.image} source={product.image} />
            </View>
            




            <View style={styles.infoContainer}>
                <Text style={styles.name}>{product.name}</Text>
                <View  style={{
                               
                               flexDirection:"row"
                            }}>
                <Text  style={styles.price}> DH{product.price}.00</Text>
                <View style={{
                            // width:"35%",
                            paddingLeft:180
                        }}>
                            <Text style={{
                                
                                fontSize:9,
                                color:"#4f4a4a"
                            }}>Évaluation des clients</Text>
                            <View style={{
                             
                                alignItems:"center",
                                flexDirection:"row"
                            }}>
                              
                              <Image
                              source={require('../screens/images/star.png')}
                            style={{  width:17, height:15,}}/>
                             <Image
                              source={require('../screens/images/star.png')}
                            style={{  width:17, height:15,}}/>
                              <Image
                              source={require('../screens/images/star.png')}
                            style={{  width:17, height:15,}}/>
                              <Image
                              source={require('../screens/images/star.png')}
                            style={{  width:17, height:15,}}/>
                            <Image
                              source={require('../screens/images/star.png')}
                            style={{  width:17, height:15,}}/>
                  
                              </View>
                        </View>
                
                
                </View>
                <Text style={styles.description}>{product.description}</Text>

                      

                {/* <Button onPress={onAddToCart} title="AJOUTER AU PANIER" /> */}
              </View>
              <View 
              style={{
                          // marginTop:10,
                            borderRadius:10,
                            height:60,
                            width:380,
                            borderColor:"#dcdcdc",
                            borderWidth:1, }}>
                       <View style={{
                            // backgroundColor:"#000",
                            flexDirection:"row",
                         padding:2,
                            //  marginBottom:5 
                            
                            }}>
                                <Image
                                  source={require('../screens/images/liv.png')}

                                    style={{height:20,width:25}}
                                />
                                <Text style={{
                                    fontSize:14,
                                    color:"#000",
                                    // fontFamily:"Bold",
                                    marginHorizontal:15
                                }}>
                                   Livraison à domicile 
                                </Text> 
                               <View style={{
                                  
                                  paddingLeft:130,}}>
                                <Text style={{
                                  borderBottomWidth: 1,
                                  borderColor: "#1e90ff",
                                  fontSize:11,
                                  
                                    color:"#1e90ff",
                                    // fontFamily:"Bold",
                                    marginHorizontal:10
                                }}>
                                   Détails
                                </Text></View>

                               </View> 
                                 <Text style={{
                                    fontSize:10,
                                    paddingLeft:40,
                                    color:"#008000",
                                    // fontFamily:"Bold",
                               }}>Livraison à seulement 30DH.
                               </Text>
                                 <Text style={{
                                    fontSize:10,
                                    paddingLeft:40,
                                    color:"#000",
                                    // fontFamily:"Bold",
                               }}>Livraison aprés 3 jours si vous commandez  maintenant.</Text>
                              </View>

                              <View style={{
                          marginTop:10,
                            borderRadius:10,
                            height:60,
                            width:380,
                            borderColor:"#dcdcdc",
                            borderWidth:1, }}>
                       <View style={{
                         
                            // backgroundColor:"#000",
                            flexDirection:"row",
                         padding:2,
                            //  marginBottom:5 
                            
                            }}>
                                <Image
                                  source={require('../screens/images/retour.png')}

                                    style={{height:20,width:25}}
                                />
                                <Text style={{
                                    fontSize:14,
                                    color:"#000",
                                    // fontFamily:"Bold",
                                    marginHorizontal:15
                                }}>
                                   Politique de retour
                                </Text>
                                
                                
                                 </View>

                                 <View style={{
                            // backgroundColor:"#000",
                            flexDirection:"row",
                         padding:2,
                            //  marginBottom:5 
                            
                            }}>
                                 <Text style={{
                                    fontSize:10,
                                    paddingLeft:40,
                                    color:"#000",
                                    // fontFamily:"Bold",
                               }}>Retour gratuit dans les 15 jours .
                               </Text>
                               
                                 <Text style={{
                                    borderBottomWidth: 1,
                                    borderColor: "#1e90ff",
                                    fontSize:11,
                                      color:"#1e90ff",
                                      // fontFamily:"Bold",
                               }}>En savoir plus.</Text>
                               </View>
                              </View>
                              <Text style={{
                                // fontFamily:"Bold",
                                fontSize:18,
                                fontWeight:'500',
                                marginTop:13,
                                color:"#4f4a4a"
                            }}>Produits similaires</Text>

<ScrollView 
                    style={{marginTop:5}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    
                    >
                        <View style={{
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"#f5f6fb",
                            height:70,
                            width:70,
                            borderRadius:25,
                            marginRight:20
                        }}>
                           <Image
                                source={require('../screens/images/fc4.webp')}
                               style={{height:70,width:80, borderWidth:2, borderColor:'#f1f1f1', borderRadius:25,}} />
                        </View>

                        <View style={{
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"#f5f6fb",
                            height:70,
                            width:80,
                            borderRadius:25,
                            marginRight:20
                        }}>
                             <Image
                                source={require('../screens/images/fc1.jpg')}
                               style={{height:70,width:80, borderWidth:2, borderColor:'#f1f1f1', borderRadius:25,}} />
                            
                        </View>
                        <View style={{
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"#f5f6fb",
                            height:70,
                            width:80,
                            borderRadius:25,
                            marginRight:20
                        }}>
                            <Image
                                source={require('../screens/images/fc3.jpg')}
                               style={{height:70,width:80, borderWidth:2, borderColor:'#f1f1f1', borderRadius:25,}} />
                           
                        </View>
                        <View style={{
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"#f5f6fb",
                            height:70,
                            width:80,
                            borderWidth:2,
                            borderColor:'#000',
                            borderRadius:25,
                            marginRight:10
                        }}>
                            <Image
                                    source={require('../screens/images/fc2.jpg')}
                                 style={{height:70,width:80, borderWidth:2, borderColor:'#f1f1f1', borderRadius:25,}} />
                        </View>
                    </ScrollView>






        </ScrollView>
        <View style={{
                            backgroundColor:"orange",
                            flexDirection:"row",
                            width:380,
                            alignItems:"center",
                            justifyContent:"center",
                            borderRadius:10,
                            padding:12,
                            height:40,
                             marginBottom:5 
                            
                            }}>
                                {/* <Image
                                  source={require('./assets/details/bag1.png')}

                                    style={{height:20,width:16}}
                                /> */}
                                <Text
                                onPress={onAddToCart}
                                 style={{
                                    fontSize:13,
                                    color:"#FFF",
                                    fontWeight:'bold',
                                    // fontFamily:"Bold",
                                    marginHorizontal:15
                                }}>
                                   AJOUTER AU PANIER
                                </Text>

                        </View>                 
    </View>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      backgroundColor: 'white'
    },
    image: {
      height:300,
      width:300,  
      borderRadius:10,
      marginTop:2,
      aspectRatio: 1
    },
    infoContainer: {
      padding: 10
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    price: {
      // fontSize: 16,
      // fontWeight: '600',
      // marginBottom: 8,
      // fontFamily:"Bold",
                        fontSize:16,
                        fontWeight:'bold',
                        color:"red"
    },
    description: {
      // fontSize: 16,
      // fontWeight: '400',
      // color: '#000',
      // marginBottom: 16,
      // fontFamily:"Medium",
      fontSize:12,
      lineHeight:20,
      // color:"#b3aeae",
      color:"gray",
      marginTop:15,
    },
  });