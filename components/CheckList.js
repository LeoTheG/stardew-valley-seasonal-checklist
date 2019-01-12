import React, { Component } from 'react';
import Check from './Check';
import {Text,View,StyleSheet} from 'react-native'

export default class CheckList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            season: props.season,
            category: props.category || "",
            checks: props.checks, 
            check: props.check || function(){}
        }
        this.check = this.check.bind(this)
    }
    componentWillReceiveProps(props){
        if(props.checks != this.state.checks){
            this.setState({category: props.category, checks: props.checks})
        }
    }
    check(name, checked){
        this.state.check(this.state.category,name,checked)
    }
    render() {
        let x = []
        if (this.state.checks) {
            let count = 0
            for (const c in this.state.checks) {
                x.push(<Check key={count} name={c} 
                    expanse={this.state.checks[c].expanse} 
                    checked={this.state.checks[c].checked}
                    image={this.state.checks[c].image}
                    check={this.check} 
                    />)
                count++
            }
        }
        else x = <Text>Loading...</Text>
        let y = (this.state.category==='misc.' || (this.state.category === 'fishing' && (this.state.season==='spring' ||
        this.state.season==='summer' || this.state.season==='fall' || this.state.season==='winter' ))) ? <View style={styles.bottomBlock}/> : <View/>
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{this.state.category}</Text>
                {x}
                {y}
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
    },
    bottomBlock: {
        height: 60
    }
})