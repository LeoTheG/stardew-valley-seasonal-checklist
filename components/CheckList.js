import React, { Component } from 'react';
import Check from './Check';
import {Text,View,StyleSheet} from 'react-native'

export default class CheckList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: props.category || "",
            checks: props.checks //list of strs 
        }
    }
    render() {
        let x = []
        if (this.state.checks) {
            let count = 0
            for (const c in this.state.checks) {
                x.push(<Check key={count} name={c} description={""} />)
                count++
            }
        }
        else x = <Text>Loading...</Text>
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{this.state.category}</Text>
                {x}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    header: {
        fontSize: 25,
        textAlign: "center"
    }
})