import React, { Component } from 'react';
import {View} from 'react-native';

export default class Bundles extends Component{
    constructor(props){
        super(props)
        this.state = {
            bundles = props.bundles
        }
    }
    render() {
        const x = []
        for(const bundle in this.state.bundles){
            const y = []
            for(const itemName in this.state.bundles[bundle].items){
                if(this.state.bundles[bundle].items[itemName].checked)
                y.push(<h2>{itemName}</h2>)
            }
            x.push(
            <View>
                <h1>{bundle}</h1>
                {y}
            </View>)
        }
        return (
            <View>
                {x}
            </View>
        );
    }
}