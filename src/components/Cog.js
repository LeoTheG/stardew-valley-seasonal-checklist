import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import DialogInput from 'react-native-dialog-input';



export default class Cog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: ["resetChecks", "addProfile", "switchProfile", "removeProfile"],
            resetChecks: props.resetChecks || function(){},
            isDialogVisible: false,
            addProfile: props.addProfile,
            switchProfile: props.switchProfile,
            removeProfile: props.removeProfile
        }

        this.selectOption = this.selectOption.bind(this)
        this.showDialog = this.showDialog.bind(this)
        this.sendInput = this.sendInput.bind(this)
    }
    selectOption(option) {
        if(option === this.state.options[0]){
            Alert.alert(
                'Confirm resetting checkmarks',
                'Are you sure you want to reset checkmarks for this profile? You cannot undo this.',
                [
                    {text: 'Confirm', onPress: this.state.resetChecks},
                    {text: 'Cancel'}
                ]
            )
        }
        else if (option === this.state.options[1]){
            this.showDialog(true)
        }
        else if(option === this.state.options[2]){
            this.state.switchProfile()
        }
        else if(option === this.state.options[3]){
            this.state.removeProfile()
        }
    }
    sendInput(text){
        this.state.addProfile(text)
        this.showDialog(false)
    }
    showDialog(show){
        this.setState({isDialogVisible: show})
    }
    render() {
        //onSelect={value => alert(`Selected number: ${value}`)}>
        return (
            <View style={styles.container}>
                <Menu onSelect={option => this.selectOption(option)}>
                    <MenuTrigger>
                        <FontAwesome name="cog" size={32} />
                    </MenuTrigger>
                    <MenuOptions customStyles={optionsStyles} >
                        <MenuOption value={this.state.options[0]}>
                            <Text style={styles.text}>reset checkmarks</Text>
                        </MenuOption>
                        <MenuOption value={this.state.options[1]}>
                            <Text style={styles.text}>add new profile</Text>
                        </MenuOption>
                        <MenuOption value={this.state.options[2]}>
                            <Text style={styles.text}>switch profile</Text>
                        </MenuOption>
                        <MenuOption value={this.state.options[3]}>
                            <Text style={styles.text}>remove profile</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
                <DialogInput isDialogVisible={this.state.isDialogVisible}
            title={"Add New Profile"}
            submitInput={ (inputText) => {this.sendInput(inputText)} }
            closeDialog={ () => {this.showDialog(false)}}>
</DialogInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 10,
        position: "absolute",
        right: "2%",
    },
    text: {
        fontSize: 20
    }
})
const optionsStyles = {
    optionsContainer: {
        padding: 5,
        width: 300
    },
}