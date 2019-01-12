import React, { Component } from 'react';
import CheckList from './CheckList';
import {View,ScrollView,Text,StyleSheet} from 'react-native'

export default class Season extends Component{
    constructor(props){
        super(props)
        this.state = {
            season: props.season,
            checks: props.checks,
            check: props.check || function(){}
        }
        this.check = this.check.bind(this)
    }
    componentWillReceiveProps(props){
        if(props.season != this.state.season || props.checks != this.state.checks){
            this.setState({season: props.season, checks:props.checks})
        }
    }
    check(category, name, checked){
        this.state.check(this.state.season,category,name,checked)
    }
    render() {
        const x = []
        let count = 0
        for(const category in this.state.checks){
            const c = this.state.checks[category]
            x.push(
                <CheckList key={"checklist-"+count} check={this.check} checks={c} category={category} season={this.state.season} />
            )
            count++
        }
        return (
            <ScrollView>
                {x}
                {/*
                <CheckList check={this.check} checks={this.state.checks["foraging"]} category={"foraging"} />
                <CheckList check={this.check} checks={this.state.checks["farming"]} category={"farming"} />
                <CheckList check={this.check} checks={this.state.checks["fishing"]} category={"fishing"} />
                */}
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