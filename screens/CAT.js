
// import React, {useEffect, useState} from "react";
// import {View, Text, FlatList, StyleSheet} from "react-native";
// import { getProducts } from "../services/ProductsService";
// import {Product} from "../components/Product";

// export function AC({navigation}){
    

//     function renderPr(){
//         return(
           
              
//                     navigation.navigate('ProductsList')
           
//         )
//     }

//     // const [products, setProducts] = useState([]);

//     // useEffect(() => {
//     //     setProducts(getProducts())
//     // })

//     return(
//       <View>
//           {/* <Text onPress={() => navigation.navigate('PAGE')} >HHHHHHHHHHHH</Text> */}
          

//           <Text  onPress={renderPr}  >HHHHHHHHHHHH</Text>

//           {/* <Text  onPress={() => this.props.navigation.navigate("PAGE")}>HHHHHHHHHHHH</Text> */}
      
//           <Text>HHHHHHHHHHHH</Text>

          
          
//           </View>
      
//     )

// }

// const styles = StyleSheet.create({
//     productsList: {
//       backgroundColor: "white",
//     },
//     productsListContainer: {
//       backgroundColor: "white",
//       paddingVertical: 8,
//       marginHorizontal: 8,
//     },
//   });



import React, {useEffect, useState} from "react";
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getProducts } from "../services/ProductsService";
import {Product} from "../components/Product";

export function CAT({navigation}){

    function renderP(){
        return(
           
              
                    navigation.navigate('FEMME')
           
        )
    }
   

    return(
        <SafeAreaView
     style={{ flex: 1, backgroundColor: '#fff'}}> 
     <View style={{marginTop: 4,paddingHorizontal: 5, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={18} style={{marginLeft: 10}} />
          <TextInput placeholder="Recherche" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={20} color={'#fff'} />
        </View>
      </View>

      <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     style={{}}>
                   <ScrollView
                     showsVerticalScrollIndicator
                     showsHorizontalScrollIndicator={false}
                    >
                         <View 
                // onPress={this.props.onPress}
                 style={{
                  marginTop:5,
                
                 height:700,
                 width:80,
                 backgroundColor:'#f1f1f1',
                //  elevation:2,
                 borderRadius:10,
                 marginLeft:1.5,
                 marginBottom:5
             }}
            >
                 <View  style={{
                             width: '100%',
                             height: '15%',
                             justifyContent: 'center',
                            alignItems: 'center',
                           
                           
                            borderLeftWidth:5,
                                       
                            borderColor:'#000',
                                        backgroundColor:'#f1f1f1',
                                               }}>
                          <Image
                         source={require('../screens/images/s.png')}                              
                           style={{
                                    width: '40%',
                                        height: '40%',
                                        
                                           resizeMode: 'center',
                                               }}
                                                 />
                                                 <Text style={style.textsize}>PLUS</Text>
                                                 <Text style={style.textsize}>POPULAIRES</Text>
                                                 </View>
                                                 <TouchableOpacity
                             style={{
                             width: '100%',
                             justifyContent: 'center',
                             alignItems: 'center',
                             height: '15%',
                                        backgroundColor:'#f1f1f1',
                                               }}>
                          <Image
                         source={require('../screens/images/f.png')}
                                style={{
                                    width: '40%',
                                        height: '40%',
                                        
                                           resizeMode: 'center',
                                               }}
                                                 />
                                                 <Text onPress={() => {navigation.navigate('FEMME')}} style={style.textsize}>FEMMES</Text>
                                                 
                         </TouchableOpacity>


                                                 <TouchableOpacity
                             style={{
                             width: '100%',
                             justifyContent: 'center',
                             alignItems: 'center',
                             height: '15%',
                                        backgroundColor:'#f1f1f1',
                                               }}>
                          <Image
                         source={require('../screens/images/man.png')}
                                style={{
                                    width: '45%',
                                        height: '45%',
                                        
                                           resizeMode: 'center',
                                               }}
                                                 />
                                                 <Text style={style.textsize}>HOMMES</Text>
                                                 
                         </TouchableOpacity>
                         <TouchableOpacity
                             style={{
                             width: '100%',
                             justifyContent: 'center',
                             alignItems: 'center',
                             height: '15%',
                                        backgroundColor:'#f1f1f1',
                                               }}>
                          <Image
                         source={require('../screens/images/e.png')}
                                style={{
                                    width: '40%',
                                        height: '40%',
                                        
                                           resizeMode: 'center',
                                               }}
                                                 />
                                                <Text style={style.textsize}>ENFANTS</Text>
                                                 
                         </TouchableOpacity>



                        




                         <TouchableOpacity
                             style={{
                             width: '100%',
                             justifyContent: 'center',
                             alignItems: 'center',
                             height: '15%',
                                        backgroundColor:'#f1f1f1',
                                               }}>
                          <Image
                         source={require('../screens/images/d2.png')}
                                style={{
                                    width: '70%',
                                        height: '70%',
                                        
                                           resizeMode: 'center',
                                               }}
                                                 />
                                                 <Text style={style.textsize}>DECORATION</Text>
                                                 
                         </TouchableOpacity>


                         <TouchableOpacity
                             style={{
                             width: '100%',
                             justifyContent: 'center',
                             alignItems: 'center',
                             height: '15%',
                                        backgroundColor:'#f1f1f1',
                                               }}>
                          <Image
                         source={require('../screens/images/t.png')}
                                style={{
                                    width: '50%',
                                        height: '50%',
                                        
                                           resizeMode: 'center',
                                               }}
                                                 />
                                                  <Text style={style.textsize}>TAPIS</Text>
                                                 
                         </TouchableOpacity>
                         <View
                          style={{
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '15%',
                                       backgroundColor:'#f1f1f1',
                                              }}></View>                 
                             </View>
                        </ScrollView>    
                          {/* view 2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}   
                          <ScrollView
                     showsVerticalScrollIndicator
                     showsHorizontalScrollIndicator={false}>
                    <View
                     style={{
                     backgroundColor:"#fff",
                    //   height:900,
                      width:330,
                    }} >
                     < View style={{flexDirection: 'row',paddingLeft:10,marginTop:10}}>
                                    <Text
                                           style={{fontWeight: 'bold', fontSize: 13, color: '#ff7f00'}}>
                                             FEMMES
                                    </Text>
                                            </View>

                                            <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     style={{marginTop:1,paddingHorizontal:2}}
                    >
                      
                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                            source={require('../screens/images/sandale2.jpg')}
                                    style={style.image}
                                         />
                                                  <Text style={style.textsize}>Sandales </Text> 
                                                  <Text style={style.textsize}>en cuir</Text>             
                         </TouchableOpacity>
                         

                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                            source={require('../screens/images/collier.jpg')}
                                    style={style.image1}
                                         />
                                                  <Text style={style.textsize}>Collier</Text> 
                                                  <Text style={style.textsize}>original</Text>             
                         </TouchableOpacity>
                         
                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                            source={require('../screens/images/sacp2.webp')}
                                    style={style.image}
                                         />
                                                  <Text style={style.textsize}>sac</Text>
                                                  <Text style={style.textsize}>en paille</Text>             
                         </TouchableOpacity>
                         
                    </ScrollView>
                      {/* LES FEMMES////////////////////////// */}

                      {/* LES HOMMES////////////////////////// */}
                    <View style={{flexDirection: 'row',paddingLeft:10,marginTop:15}}>
                                    <Text
                                           style={{fontWeight: 'bold', fontSize: 13, color: '#ff7f00'}}>
                                             HOMMES
                                    </Text>
                                            </View>
                                            <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     style={{marginTop:2,paddingHorizontal:2}}
                    >
                      
                        

                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                           source={require('../screens/images/sh1.webp')}
                            // source={require('./assets/sh1.webp')}
                                    style={style.image}
                                         />
                                                  <Text style={style.textsize}>Leather</Text>
                                                  <Text style={style.textsize}>sandales</Text>             
                         </TouchableOpacity>
                         
                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                         
                            source={require('../screens/images/bracleth.jpg')}
                                    style={style.image}
                                         />
                                                  <Text style={style.textsize}>Bracelet</Text>
                                                  <Text style={style.textsize}>tressé</Text>             
                         </TouchableOpacity>
                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                            source={require('../screens/images/cartable.jpg')}
                                    style={style.image}
                                         />
                                                  <Text style={style.textsize}>porte-documents</Text>
                                                  <Text style={style.textsize}>en cuire</Text>             
                         </TouchableOpacity>
                         
                         
                    </ScrollView>


                    <View style={{flexDirection: 'row',paddingLeft:10,marginTop:15}}>
                                    <Text
                                           style={{fontWeight: 'bold', fontSize: 13, color: '#ff7f00'}}>
                                             ENFANFS
                                    </Text>
                                            </View>
                               <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     style={{marginTop:2,paddingHorizontal:2}}
                    >
                      
                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                            source={require('../screens/images/sanEN.jpg')}
                                    style={style.image1}
                                         />
                                                  <Text style={style.textsize}>Sandales</Text>
                                                  <Text style={style.textsize}>Bleu-marine</Text>             
                         </TouchableOpacity>
                         

                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                            source={require('../screens/images/sandf.webp')}
                                    style={style.image1}
                                         />
                                                  <Text style={style.textsize}>Sandales</Text>
                                                  <Text style={style.textsize}>fille</Text>             
                         </TouchableOpacity>
                         
                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                            source={require('../screens/images/collierp.webp')}
                                    style={style.image1}
                                         />
                                                  <Text style={style.textsize}>Collier</Text>
                                                  <Text style={style.textsize}>cauri</Text>             
                         </TouchableOpacity>
                         
                    </ScrollView>
                    
                    {/* DECORATION////////////////////////// */}
                    <View style={{flexDirection: 'row',paddingLeft:10,marginTop:15}}>
                                    <Text
                                           style={{fontWeight: 'bold', fontSize: 13, color: '#ff7f00'}}>
                                             DECORATION
                                    </Text>
                                            </View>
                               <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     style={{marginTop:2,paddingHorizontal:2}}
                    >
                      
                        
                         

                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                            source={require('../screens/images/lamp1.jpg')}
                                    style={style.image1}
                                         />
                                                  <Text style={style.textsize}>Lamp</Text>
                                                  <Text style={style.textsize}>lanterne</Text>             
                         </TouchableOpacity>
                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                            source={require('../screens/images/plat2.webp')}
                                    style={style.image}
                                         />
                                                  <Text style={style.textsize}>Plat</Text>
                                                  <Text style={style.textsize}>ceramique</Text>             
                         </TouchableOpacity>
                         
                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                            source={require('../screens/images/pouf.jpg')}
                                    style={style.image}
                                         />
                                                  <Text style={style.textsize}>pouf</Text>
                                                  <Text style={style.textsize}>en cuir véritable</Text>             
                         </TouchableOpacity>
                         
                    </ScrollView>
                     {/* DECORATION////////////////////////// */}
                     <View style={{flexDirection: 'row',paddingLeft:10,marginTop:15}}>
                                    <Text
                                           style={{fontWeight: 'bold', fontSize: 13, color: '#ff7f00'}}>
                                             TAPIS
                                    </Text>
                                            </View>
                               <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                     style={{marginTop:2,paddingHorizontal:2}}
                    >
                      
                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                            source={require('../screens/images/tapi.jpg')}
                                    style={style.image1}
                                         />
                                                  <Text style={style.textsize}>Tapis  </Text>
                                                  <Text style={style.textsize}>berbére</Text>             
                         </TouchableOpacity>
                         

                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                            source={require('../screens/images/tapi1.jpg')}
                                    style={style.image}
                                         />
                                                  <Text style={style.textsize}>Tapis</Text>
                                                  <Text style={style.textsize}>laine</Text>             
                         </TouchableOpacity>
                         
                         <TouchableOpacity
                         style= {style.toucheview2}>
                         
                         <Image
                            source={require('../screens/images/tapi2.jpeg')}
                                    style={style.image1}
                                         />
                                                  <Text style={style.textsize}>Tapis</Text>
                                                  <Text style={style.textsize}> boucherouite</Text>             
                         </TouchableOpacity>
                         
                    </ScrollView>















                 </View>
                    </ScrollView>


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
              style={style.cat1}>
              <Image
               source={require('../screens/images/ac3.png')}
                style={{ height: 28, width: 28 }} />
            </TouchableOpacity>
            <Text
           onPress={() => {navigation.navigate('PAGEAC')}}
             style={{color:'gray',fontWeight:"bold",fontSize:10}}>Accueil</Text>
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
                source={require('../screens/images/cat1.png')}
                style={{ height: 28, width: 28 }} />
            {/* </TouchableOpacity> */}
            <Text 
            // onPress={renderPr}  
             style={{color:'orange',fontWeight:"bold",fontSize:10}}>Catégorie</Text>
            </View>

            <View
            style={{
              alignItems: "center",
              
              height: 90,
               width: 90, }}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={style.cat1}>
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
              style={style.cat1}>
              <Image
                source={require('../screens/images/compte.png')}
                // onPress={() => this.props.navigation.navigate("LOGIN")}
                style={{ height: 28, width: 28 }} />
            </View>
            <Text onPress={() => {navigation.navigate('COMPTE')}}
            // onPress={() => this.props.navigation.navigate("LOGIN")}
             style={{color:'gray',fontWeight:"bold",fontSize:10}}>Compte</Text>
            </View>
            
             </ScrollView>

















 {/* <View>
                    
                      <Text onPress={renderP}>CCCCCCCCCCCCCC</Text>
                      <Text >CCCCCCCCCCCCCC</Text>
                      <Text >CCCCCCCCCCCCCC</Text>
                      <Text >CCCCCCCCCCCCCC</Text>
        </View> */}


        </SafeAreaView>
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
      marginTop: 30,
  
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
      backgroundColor: "orange",
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
   textsize:
   {
     fontSize:10,
   },
   toucheview2:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
      width: 111,
      
   }
   
   
  });
  





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
       backgroundColor: "#ff8c00",
       height: 50,
       borderRadius: 5,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 50,
     },
     btnImage: {width: 20, height: 20, marginLeft: 5},
  
     line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
  
    
  
  });