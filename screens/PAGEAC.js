


import React, {useEffect, useState} from "react";
import { StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    Image,
    SafeAreaView,
    TextInput,
    FlatList,
    TouchableOpacity,} from "react-native";
// import { getProducts } from "../services/ProductsService";
// import {Product} from "../components/Product";
import Icon from 'react-native-vector-icons/MaterialIcons';

export function PAGEAC({navigation}){
    function renderPr(){
        return(
           
              
                    navigation.navigate('CAT')
           
        )
    }

    return(
        <SafeAreaView  style={{flex: 1,  backgroundColor: '#fff'}}>
              
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
           showsVerticalScrollIndicator
            showsHorizontalScrollIndicator={false} >
      <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10 ,paddingStart:2}}
          >
             <View
            style={style.check}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
             >
              <Text 
               onPress={() => {navigation.navigate('ACHAT')}} 
               style={{color:"gray",fontWeight:"bold",fontSize:8}}>ACHETEZ FACILE{'\n'}RETOUR FACILE</Text>
            </TouchableOpacity>
           </View>

           {/* <View
              style={style.check}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
             >
              <Text onPress={() => {navigation.navigate('COMMANDE')}}  style={{color:"gray",fontWeight:"bold",fontSize:12}}>COMMANDE</Text>
            </TouchableOpacity>
           </View> */}
            <View
            style={style.check}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
             >
              <Text 
               onPress={() => {navigation.navigate('COMMANDE')}} 
               style={{color:"gray",fontWeight:"bold",fontSize:12}}>COMMANDE</Text>
            </TouchableOpacity>
           </View>

           <View
            style={style.check}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
             >
              <Text  onPress={() => {navigation.navigate('LIVRAISON')}} style={{color:"gray",fontWeight:"bold",fontSize:12}}>LIVRAISON</Text>
            </TouchableOpacity>
           </View>
          
         </ScrollView>
         
         <ImageBackground
           source={require('../screens/images/arti3.jpg')}
           style={{
               height:140,
               width:414,
               backgroundColor:"#000",
               justifyContent: 'center',
               alignItems: 'center',
               marginTop:10,
           }}
           ></ImageBackground>
           <View
      style={{
        height:100,
        width:414,
      
      justifyContent: 'center',
        alignItems: 'center',
        marginTop:7}}
     >
       <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10,marginBottom: 20,  }}
          >
             <View
            style={style.sol1}>
            <Text  style={{color:'#000',fontWeight:"bold",fontSize:20}}>-10%EN+</Text>
            <Text  style={{color:'gray',fontSize:9}}>dés 3500DH d'achat</Text>
            </View>

            <View
            style={style.sol}>
            <Text  style={{color:'#000',fontWeight:"bold",fontSize:20}}>-18%EN+</Text>
            <Text  style={{color:'gray',fontSize:9}}>dés 4300DH d'achat</Text>
            </View>

            <View
            style={style.sol}>
            <Text  style={{color:'#000',fontWeight:"bold",fontSize:20}}>-20%EN+</Text>
            <Text  style={{color:'gray',fontSize:9}}>dés 5500DH d'achat</Text>
            </View>
           </ScrollView>
     </View>
     <View
      style={{
        height:35,
        width:414,
      //  backgroundColor:"gray",
      justifyContent: 'center',
        alignItems: 'center',
       }}>
       <View
       style={{
        height:26,
        width:414,
       backgroundColor:"#dcdcdc",}}
       >
        <View
              style={{
                position: 'absolute',
                height:28,
                   width:254,
                backgroundColor: "orange",
                // backgroundColor:  'orange',

                marginLeft:24,
                top: 10,
                left: 50,
                borderTopLeftRadius: 25,
                borderBottomRightRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
               <Text  style={{color:"#fff",fontWeight:"bold",fontSize:15}}>Achetez par catégorie</Text>
            </View></View>
           </View>
           <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 30 }}
          >
             <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 90,
               width:83, }}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={style.cat}>
              <Image
                 source={require('../screens/images/f.png')}
                style={{ height: 33, width: 30 }} />
            </TouchableOpacity>
            <Text  onPress={() => {navigation.navigate('FEMME')}}  style={{color:'#ff7f00',fontWeight:"bold",fontSize:12}}>FEMME</Text>
            </View>

            <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 90,
               width: 83, }}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={style.cat}>
               
              <Image
                source={require('../screens/images/man.png')}
                style={{ height: 33, width: 30 }} />
            </TouchableOpacity>
            <Text  style={{color:'#ff7f00',fontWeight:"bold",fontSize:12}}>HOMMES</Text>
            </View>

            <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 90,
               width: 83, }}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={style.cat}>
              <Image
                 source={require('../screens/images/e.png')}
                style={{ height: 33, width: 30 }} />
            </TouchableOpacity>
            <Text  style={{color:'#ff7f00',fontWeight:"bold",fontSize:12}}>ENFANTS</Text>
            </View>

            <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 90,
               width: 83, }}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={style.cat}>
              <Image
                source={require('../screens/images/d2.png')}
                style={{ height: 33, width: 33 }} />
            </TouchableOpacity>
            <Text  style={{color:'#ff7f00',fontWeight:"bold",fontSize:12}}>DECORS</Text>
            </View>
            
            <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 90,
               width: 83, }}>
                  <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Detail")}
              style={style.cat}>
              <Image
                source={require('../screens/images/t.png')}
                style={{ height: 33, width: 33 }} />
            </TouchableOpacity>
            <Text  style={{color:'#ff7f00',fontWeight:"bold",fontSize:12}}>TAPIS</Text>
            </View>
             </ScrollView>



             <View
      style={{
        height:35,
        width:414,
      //  backgroundColor:"gray",
      justifyContent: 'center',
        alignItems: 'center',
        marginTop:20}}>
       <View
       style={{
        height:26,
        width:414,
       backgroundColor:"#dcdcdc",}}
       >
        <View
              style={{
                position: 'absolute',
                height:28,
                   width:254,
                backgroundColor: "orange",
                // backgroundColor:  'orange',

                marginLeft:24,
                top: 10,
                left: 50,
                borderTopLeftRadius: 25,
                borderBottomRightRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
               <Text  style={{color:"#fff",fontWeight:"bold",fontSize:15}}>Promo du jour</Text>
            </View></View>
          </View>


          <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:20}}
                    >
                      {/* ::les new/////////////////////////////////////////////////////////////////// */}
               <View style={{
               flexDirection:"row",
               height:90,
               width:190,
               backgroundColor:"#fff",
               elevation:2,
               padding:6,
               marginVertical:5,
               marginRight:20,
               marginLeft:2,
               borderRadius:10
           }}> 
             <View
              style={{
                position: 'absolute',
                width: '20%',
                height: '22%',
                backgroundColor:  'red',
                top: 0,
                left: 150,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 10,
                  color: '#ffffff',
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
              -45%
              </Text>
            </View>

           <View>
               <Image
               source={require('../screens/images/cuir1.jpg')}
                style={{
                  marginTop:10,
                    height:70,
                    width:60,
                    borderRadius:10
                }}
               />
           </View>
           <View style={{
               width:"65%",
               justifyContent:"flex-end",
               paddingHorizontal:10,
               height:"100%"
           }}>
               <Text style={{
                   fontSize:9,
                  //  fontFamily:"Medium",

               }}>
                   Ensemble de sacs et petite maroquinerie en cuir
               </Text>
               <Text style={{
                   fontSize:12,
                   fontWeight:'bold',
                  //  fontFamily:"Bold",
               }}>
                   399.00DH
               </Text>

           </View>
           <View style={{
               width:"5%",
               justifyContent:"flex-end",
               height:"100%"
           }}>
               <Image
                source={require('../screens/images/add.png')}
                style={{
                    height:17,
                    width:17
                }}
               />
           </View>
           
           </View>
          
            <View style={{
               flexDirection:"row",
               height:90,
               width:190,
               backgroundColor:"#fff",
               elevation:2,
               padding:6,
               marginVertical:5,
               marginRight:20,
               marginLeft:2,
               borderRadius:10
           }}> 

            <View
              style={{
                position: 'absolute',
                width: '20%',
                height: '22%',
                backgroundColor:  'red',
                top: 0,
                left: 150,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 10,
                  color: '#ffffff',
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
              -51%
              </Text>
            </View>



           <View>
               <Image
                source={require('../screens/images/pouf.jpg')}
                style={{
                    height:70,
                    width:60,
                    marginTop:14,
                    borderRadius:10
                }}
               />
           </View>
           <View style={{
               width:"65%",
               justifyContent:"flex-end",
               paddingHorizontal:10,
               height:"100%"
           }}>
               <Text style={{
                   fontSize:8,
                  //  fontFamily:"Medium",

               }}>
                   Pouf marocain de couleur marron et beige.
               </Text>
               <Text style={{
                   fontSize:12,
                   fontWeight:'bold',
                  //  fontFamily:"Bold",
               }}>
                   299.00DH
               </Text>

           </View>
           <View style={{
               width:"5%",
               justifyContent:"flex-end",
               height:"100%"
           }}>
               <Image
               source={require('../screens/images/add.png')}
                style={{
                    height:17,
                    width:17
                }}
               />
           </View>
           
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
               source={require('../screens/images/acorng.png')}
                style={{ height: 28, width: 28 }} />
            </TouchableOpacity>
            <Text  style={{color:'orange',fontWeight:"bold",fontSize:10}}>Accueil</Text>
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
            <Text 
            onPress={renderPr}  
             style={{color:'gray',fontWeight:"bold",fontSize:10}}>Catégorie</Text>
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
            <Text 
            // onPress={() => this.props.navigation.navigate("LOGIN")}
            onPress={() => {navigation.navigate('COMPTE')}} style={{color:'gray',fontWeight:"bold",fontSize:10}}>Compte</Text>
            </View>
            
             </ScrollView>












          
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
// import React, {useEffect, useState} from "react";
// import React from "react";
// import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
// import { Feather, Entypo } from "@expo/vector-icons";

// export function AC({navigation}){
//   const [search, setSearch] = useState('');
//   // const [filteredDataSource, setFilteredDataSource] = useState([]);
//   // const [masterDataSource, setMasterDataSource] = useState([]);
  
//   const [product,  setData] = useState("");

//   const searchFilterFunction = (text) => {
//     let product = product
//     let searchFilterFunction = product.filter((item)=>{
//       return item.name.tolowerCase().includes(input.tolowerCase)
//     });
//     setData(searchData)





//     // // Check if searched text is not blank
//     // if (text) {
//     //   // Inserted text is not blank
//     //   // Filter the masterDataSource
//     //   // Update FilteredDataSource
//     //   const newData = product.filter(
//     //     function (item) {
//     //       const itemData = item.name
//     //         ? item.title.toUpperCase()
//     //         : ''.toUpperCase();
//     //       const textData = text.toUpperCase();
//     //       return itemData.indexOf(textData) > -1;
//     //   });
//     //   setFilteredDataSource(newData);
//     //   setSearch(text);
//     // } else {
//     //   // Inserted text is blank
//     //   // Update FilteredDataSource with masterDataSource
//     //   setFilteredDataSource(product);
//     //   setSearch(text);
//     // }
//   };



//   // useEffect(() => {
//   //   fetch('https://jsonplaceholder.typicode.com/posts')
//   //     .then((response) => response.json())
//   //     .then((responseJson) => {
//   //       setFilteredDataSource(responseJson);
//   //       setMasterDataSource(responseJson);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // }, []);


  

 
 
//   const ItemSeparatorView = () => {
//     return (
//       // Flat List Item Separator
//       <View
//         style={{
//           height: 0.5,
//           width: '100%',
//           backgroundColor: '#C8C8C8',
//         }}
//         />
//       );
//     };

//     const getItem = (item) => {
//       // Function for click on an item
//       // alert('Id : ' +price + ' Title : ' +  name);
//       alert('Id ');
//     };
   

//     const ItemView = ({item}) => {
//       return (
//     //     <Product 
//     //     {...product}
//     //     onPress={() => {
//     //         navigation.navigate('ProductDetails', {productId: product.id})
//     //     }}
//     // />
//         // Flat List Item
//         <Text
//           style={styles.itemStyle}
//           onPress={() => getItem(item)}>
//           {item.id}
//           {'.'}
//           {item.name.toUpperCase()}
//         </Text>
//       );
//     };



//     function renderProduct({item: product}){
//         return(
//             <Product 
//                 {...product}
//                 onPress={() => {
//                     navigation.navigate('ProductDetails', {productId: product.id})
//                 }}
//             />
//         )
//     }

//     const [products, setProducts] = useState([]);

//     useEffect(() => {
      
//         setProducts(getProducts())
//     })

//     return(
//         <SafeAreaView
//      style={{ flex: 1, backgroundColor: '#fff'}}>
//           <View style={{marginTop: 4,paddingHorizontal: 5, flexDirection: 'row'}}>
//         <View style={style.searchContainer}>
//           <Icon name="search" size={18} style={{marginLeft: 10}} />
//           <TextInput placeholder="Recherche" style={style.input} />
//         </View>
//         <View style={style.sortBtn}>
//           <Icon name="sort" size={20} color={'#fff'} />
//         </View>
//       </View>


//             <View
           
//             style={{marginTop:10 ,paddingStart:2,flexDirection:"row",}}
//           >
//              <View
//              style={styles.check}>
//                   <View
//               // onPress={() => this.props.navigation.navigate("Detail")}
//              >
//               <Text  style={{color:"gray",fontWeight:"bold",fontSize:14}}>Nouveautés</Text>
//             </View>
//            </View>

//            <View
//               style={styles.check}>
//                   <View
//               // onPress={() => this.props.navigation.navigate("Detail")}
//              >
//               <Text  style={{color:"gray",fontWeight:"bold",fontSize:14}}>Les mieux notés</Text>
//             </View>
//            </View>

//            <View
//             style={styles.check}>
//                   <View
//               // onPress={() => this.props.navigation.navigate("Detail")}
//              >
//               <Text  style={{color:"gray",fontWeight:"bold",fontSize:14}}>Les soldes</Text>
//             </View>
//  </View></View>
            




// <TextInput
//             style={styles.textInputStyle}
//             onChangeText={(text) => searchFilterFunction(text)}
//             value={search}
//             underlineColorAndroid="transparent"
//             placeholder="Search Here"
//           />
//           <FlatList
//              data={products}
//              keyExtractor={(item) => item.id.toString()}
//             ItemSeparatorComponent={ItemSeparatorView}
//             renderItem={ItemView}
//             // renderItem={renderProduct}
//           />
//         {/* <TextInput
//             style={styles.textInputStyle}
//             onChangeText={(text) => searchFilterFunction(text)}
//             // value={search}
//             // underlineColorAndroid="transparent"
//             placeholder="Search Here"
//           />
//           <FlatList
//             // data={filteredDataSource}
//             // keyExtractor={(item, index) => index.toString()}
//             // ItemSeparatorComponent={ItemSeparatorView}
//             // renderItem={ItemView}
//             style={styles.productsList}
//             numColumns={2}
//             contentContainerStyle={styles.productsListContainer}
//             keyExtractor={(item) => item.id.toString()}
//             data={products}
//             renderItem={renderProduct}
//           /> */}

//         {/* </View> */}
//         {/* </View> */}


// </SafeAreaView>
//     )

// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
//   itemStyle: {
//     padding: 10,
//   },
//   textInputStyle: {
//     height: 40,
//     borderWidth: 1,
//     paddingLeft: 20,
//     margin: 5,
//     borderColor: '#009688',
//     backgroundColor: '#FFFFFF',
//   },
//     productsList: {
//       backgroundColor: "white",
//     },
//     productsListContainer: {
//       backgroundColor: "white",
//       paddingVertical: 8,
//       marginHorizontal: 8,
//     },
//     check:{
//         alignItems: "center",
//         height:25,
//         marginStart:10,
//         backgroundColor: "#f1f1f1",
//          width:120,},
//   });


//   const style = StyleSheet.create({
 
 
//     categoryContainer: {
//       flexDirection: 'row',
//       marginTop: 30,
//       marginBottom: 20,
//       justifyContent: 'space-between',
//     },
   
 
//     searchContainer: {
//       height: 30,
//       backgroundColor: '#F1F1F1',
//       borderRadius: 10,
//       flex: 1,
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     sortBtn: {
//       marginLeft: 10,
//       height: 30,
//       width: 30,
//       borderRadius: 10,
//       backgroundColor: "orange",
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
   
   
   
//   });
  