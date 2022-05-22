import React from "react";
import {View,TextInput,StyleSheet} from 'react-native';

const SearchBar = () =>{
    return(
        <View>
            <TextInput style={styles.search} placeholder="Ara..."></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    search:{backgroundColor:"#f5f5f5", borderRadius:10, padding: 10}
})

export default SearchBar;