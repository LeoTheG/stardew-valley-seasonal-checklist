import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Check extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name || "",
            expanse: props.expanse || {location:"",bundle:"",lastChance:false},
            checked: props.checked || false,
            expanded: false,
            check: props.check || function(){}
        }
        this.press = this.press.bind(this)
        this.pressExpand = this.pressExpand.bind(this)
    }
    componentWillReceiveProps(props){
        if(props.name != this.state.name || props.checked != this.state.checked){
            this.setState({name: props.name, expanse: props.expanse, checked: props.checked, expanded: false})
        }
    }
    press() {
        this.setState({ checked: !this.state.checked }, () => {
            this.state.check(this.state.name,this.state.checked)
        })
    }
    pressExpand() {
        this.setState({ expanded: !this.state.expanded })
    }
    render() {
        let x = []
        let count = 0
        if (this.state.expanded) {
            x.push(<Text key={"location-"+count}>Location: {this.state.expanse.location}</Text>)
            x.push(<Text key={"bundle-"+count}>Bundle: {this.state.expanse.bundle}</Text>)
            x.push(<Text key={"lastChance-"+count}>Last Chance?: {this.state.expanse.lastChance ? "Yes" : "No"}</Text>)
            count++
        }
        else x = <View></View>
        return (
            <View>
                <View style={styles.container}>
                    <CheckBox containerStyle={styles.checkBox} title={this.state.name} checked={this.state.checked} onPress={this.press} iconRight />
                    <View style={styles.textContainer}>
                        <Text style={styles.text} onPress={this.pressExpand}>{this.state.expanded? "-" : "+"}</Text>
                    </View>
                </View>
                <View style={styles.expanseContainer}>
                    {x}
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
    },
    expanseContainer: {
        marginLeft: "5%"
    }
})