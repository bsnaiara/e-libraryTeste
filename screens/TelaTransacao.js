import { Component } from "react";
import { View, Text, StyleSheet} from "react-native";

export default class TelaTransacao extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Tela de Transacao</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    },
    text: {
        color: "#black",
        fontSize: 30
    }
});