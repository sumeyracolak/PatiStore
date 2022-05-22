import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{flex: 1, paddingHorizontal: 5, marginBottom: 10},
    body:{backgroundColor: "#f5f5f5", padding: 10, borderRadius: 10},
    image:{height:200,resizeMode: 'contain', backgroundColor:"#fff", borderRadius: 10},
    detail:{flexDirection:"column",justifyContent:"space-between",marginTop: 10},
    name:{fontSize: 16, fontWeight:"bold", color:"#000"},
    price:{fontSize: 14, color:"#555",fontWeight:"bold"},
    stock:{fontSize: 15, color:"red", textTransform:"uppercase",fontWeight:"bold" },
});