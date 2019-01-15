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
            selectProfile: props.selectProfile
        }
        this.menuRef = React.createRef()
        this.onClose = this.onClose.bind(this)
        this.selectOption = this.selectOption.bind(this)
    }
    componentWillReceiveProps(props) {
        if (props.display != this.state.display)
            this.setState({ names: props.names, display: props.display }, () => {
                if (props.display) {
                    /*
                    this.menuRef.current.open().then(
                        this.menuRef.current.open().then(console.log("display is true"))
                    )
                    */

                } //props.ctx.menuActions.openMenu("main")
                else {
                    //this.menuRef.current.close()
                }
            })
    }
    onClose() {
        /*
        console.log("closed switch profile menu")
        if(this.state.display){
            this.setState({display: false})
            this.menuRef.current.close()
        } 
        */
        //this.state.onClose()
        //this.setState({display: false})
    }
    selectOption(value) {
        this.setState({ display: false })
        this.state.onClose()
        this.state.selectProfile(value)
    }
    render() {
        if (this.state.display) {


            const x = []
            let count = 0
            for (const n in this.state.names) {
                x.push(
                    <MenuOption customStyles={optionStyles} key={"switch-profile-menu-option-" + count} value={this.state.names[n]}>
                        <Text style={styles.text} >{this.state.names[n]}</Text>
                    </MenuOption>
                )
                count++
            }

            return (
                <View>
                    <Menu opened={true} onClose={this.onClose} ref={this.menuRef} name="main" onSelect={this.selectOption}>
                        <MenuTrigger></MenuTrigger>
                        <MenuOptions customStyles={optionsStyles} >
                            {x}
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
        /*
    marginLeft: "25%",
    marginRight: "25%",
    */
        fontSize: 20,
        textAlign: "center"
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