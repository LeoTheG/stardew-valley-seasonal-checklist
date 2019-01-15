import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    withMenuContext
} from 'react-native-popup-menu';

export default class RemoveProfileMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            names: props.names || [],
            display: false,
            onClose: props.onClose,
            selectProfile: props.selectProfile
        }
        this.selectOption = this.selectOption.bind(this)
    }
    componentWillReceiveProps(props) {
        if (props.display != this.state.display)
            this.setState({ names: props.names, display: props.display })
    }
    selectOption(value) {
        if(value != 'cancel-option'){
            this.state.selectProfile(value)
        }
        this.setState({ display: false })
        this.state.onClose()
    }
    render() {
        if (this.state.display) {
            const x = []
            let count = 0
            for (const n in this.state.names) {
                x.push(
                    <MenuOption customStyles={optionStyles} key={"delete-profile-menu-option-" + count} value={this.state.names[n]}>
                        <Text style={styles.text} >{this.state.names[n]}</Text>
                    </MenuOption>
                )
                count++
            }
            return (
                <View>
                    <Menu opened={true} onClose={this.onClose} onSelect={this.selectOption}>
                        <MenuTrigger></MenuTrigger>
                        <MenuOptions customStyles={optionsStyles} >
                            {x}
                            <MenuOption value={"cancel-option"}>
                                <Text style={styles.cancel}>cancel</Text> 
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </View>
            );
        }
        else return (<View></View>)
    }
}
const styles = StyleSheet.create({
    container: {
        top: 100,
        position: "absolute",
        right: "2%",
    },
    text: {
        fontSize: 20,
        textAlign: "center"
    },
    cancel: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
})

const optionsStyles = {
    optionsContainer: {
        padding: 5,
        marginLeft: "25%",
        marginRight: "25%",
        marginTop: 100
    },
};

const optionStyles = {
    optionText: {
        color: 'red',
    },
};