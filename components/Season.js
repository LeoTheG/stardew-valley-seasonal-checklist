import React, { Component } from 'react';
import CheckList from './CheckList';
import {View,ScrollView,Text,StyleSheet} from 'react-native'

export default class Season extends Component{
    constructor(props){
        super(props)
        this.state = {
            season: props.season,
            checks: props.checks
        }
    }
    render() {
        return (
            <ScrollView>
                <Text style={styles.header}>{this.state.season}</Text>
                <CheckList checks={this.state.checks["forage"]} category={"forage"} />
                <CheckList checks={this.state.checks["farming"]} category={"farming"} />
                <CheckList checks={this.state.checks["fishing"]} category={"fishing"} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 35,
        textAlign: "center"
    }
})