import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';

export default class Check extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: props.name || "",
            description: props.description || "",
            checked: false 
        }
        this.press = this.press.bind(this)
    }
    press(){
        this.setState({checked: !this.state.checked})
    }
    render() {
        return (
            <View style={styles.container}>
                <CheckBox containerStyle={styles.checkBox} title={this.state.name} checked={this.state.checked} onPress={this.press} iconRight/>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>+</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    checkBox: {
        width: "80%"
    },
    text: {
        fontSize: 30,
        textAlign: "center"
    },
    textContainer: {
        width: "10%"
    }
})