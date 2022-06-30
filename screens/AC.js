


import React, {useEffect, useState} from "react";
import {View, Text, FlatList, StyleSheet,ScrollView,SafeAreaView,TextInput} from "react-native";
import { getProducts } from "../services/ProductsService";
import {Product} from "../components/Product";
import Icon from 'react-native-vector-icons/MaterialIcons';

export function AC({navigation}){

    function renderProduct({item: product}){
        return(
            <Product 
                {...product}
                onPress={() => {
                    navigation.navigate('ProductDetails', {productId: product.id})
                }}
            />
        )
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts())
    })

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


            <View
           
            style={{marginTop:10 ,paddingStart:2,flexDirection:"row",}}
          >
             <View
             style={styles.check}>
                  <View
              // onPress={() => this.props.navigation.navigate("Detail")}
             >
              <Text  style={{color:"gray",fontWeight:"bold",fontSize:14}}>Nouveautés</Text>
            </View>
           </View>

           <View
              style={styles.check}>
                  <View
              // onPress={() => this.props.navigation.navigate("Detail")}
             >
              <Text  style={{color:"gray",fontWeight:"bold",fontSize:14}}>Les mieux notés</Text>
            </View>
           </View>

           <View
            style={styles.check}>
                  <View
              // onPress={() => this.props.navigation.navigate("Detail")}
             >
              <Text  style={{color:"gray",fontWeight:"bold",fontSize:14}}>Les soldes</Text>
            </View>
 </View></View>
            



 {/* <View> */}
     
                    {/* //  showsVerticalScrollIndicator
                    //  showsHorizontalScrollIndicator={false} */}
                    
                          {/* <View 
                // onPress={this.props.onPress}
                 style={{
                  marginTop:5,
                 backgroundColor:"#fff",
                 height:800,
                 width:414,
                 elevation:2,
                 borderRadius:10,
                 marginLeft:1.5,
                 marginBottom:5
             }}
            > */}
        <FlatList 
            style={styles.productsList}
            numColumns={2}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct}
        />
        {/* </View> */}
        {/* </View> */}


</SafeAreaView>
    )

}

const styles = StyleSheet.create({
    productsList: {
      backgroundColor: "white",
    },
    productsListContainer: {
      backgroundColor: "white",
      paddingVertical: 8,
      marginHorizontal: 8,
    },
    check:{
        alignItems: "center",
        height:25,
        marginStart:10,
        backgroundColor: "#f1f1f1",
         width:120,},
  });


  const style = StyleSheet.create({
 
 
    categoryContainer: {
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 20,
      justifyContent: 'space-between',
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
  