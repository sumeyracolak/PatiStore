import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './Card.style';

const Card = ({product}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.body}>
                <Image style={styles.image} source={{uri:product.imgURL}}/>
                <View style={styles.detail}>
                    <Text style={styles.name}>{product.title}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                    <Text style={styles.stock}>{product.inStock == true ? "" : "Stokta Yok"}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Card;