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

export default class SwitchProfileMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            names: props.names || [],
            display: false,
            onClose: props.onClose,
            selectProfile: props.selectProfile,
            isProfile: props.isProfile,
            currentProfile: props.currentProfile
        }
        this.selectOption = this.selectOption.bind(this)
        this.cancelMenu = this.cancelMenu.bind(this)
    }
    componentWillReceiveProps(props) {
        if (props.display != this.state.display || props.currentProfile != this.state.currentProfile)
            this.setState({ names: props.names, display: props.display, currentProfile: props.currentProfile })
    }
    selectOption(value) {
        if (this.state.isProfile(value)) {
            this.setState({ display: false }, () => {
                this.state.onClose()
                this.state.selectProfile(value)
            })
        }
    }
    cancelMenu() {
        this.setState({ display: false }, () => {
            this.state.onClose()
        })

    }
    render() {
        if (this.state.display) {
            const x = []
            let count = 0
            let s = styles.text
            let disabled = false
            for (const n in this.state.names) {
                if (this.state.names[n] == this.state.currentProfile) {
                    s = styles.currentProfile
                    disabled = true
                }
                else {
                    s = styles.text
                    disabled = false
                }
                x.push(
                    <MenuOption
                        disabled={disabled}
                        customStyles={optionStyles}
                        key={"switch-profile-menu-option-" + count}
                        value={this.state.names[n]}>
                        <Text style={s} >{this.state.names[n]}</Text>
                    </MenuOption>
                )
                count++
            }

            return (
                <View>
                    <Menu opened={true} name="main" onSelect={this.selectOption}>
                        <MenuTrigger></MenuTrigger>
                        <MenuOptions customStyles={optionsStyles} >
                            {x}
                            <MenuOption onSelect={this.cancelMenu}>
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
    currentProfile: {
        fontSize: 20,
        textAlign: "center",
        color: "grey"
    }
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