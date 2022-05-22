import React from 'react';
import {SafeAreaView, FlatList, StyleSheet,Text,TextInput,View} from 'react-native';
import product from './Products.json';
import Card from './Components/ProductCard';
import SearchBar from './Components/SearchBar';

const App = () => {
  const renderItem = ({item}) => <Card product={item} />
   return(
     <SafeAreaView style={styles.container}>
       <Text style={styles.title}>PATIKASTORE</Text>
       <FlatList
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <SearchBar />
          </View>
        )}
        data={product}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns="2"
      />
     </SafeAreaView>
   )
}

const styles = StyleSheet.create({
  header:{paddingHorizontal: 5, marginBottom: 10},
  container:{flex: 1, padding: 10, backgroundColor:"white"},
  title:{fontSize: 30, color:"purple",fontWeight:"bold"}
})

export default App;