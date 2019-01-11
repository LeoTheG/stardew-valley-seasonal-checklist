import React from 'react';
import {
  StyleSheet, Text, View, Button, Alert,
  TextInput, Picker
} from 'react-native';
import Check from './components/Check';
import Season from './components/Season';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      language: '',
      checks: {
        spring: {
          forage: {
            "Wild Horseradish":{},
            "Leek": {},
            "Daffodil": {},
            "Dandelion": {},
            "Morel": {},
            "Common Mushroom": {},
          },
          farming: {
            "Parsnip":{},
            "Parsnip(Gold Quality) x5": {},
            "Cauliflower": {},
            "Potato": {},
            "Green Bean": {},
            "Apricot": {},
            "Cherry": {},
          },
          fishing: {
            "Sunfish": {},
            "Sardine": {},
            "Eel": {},
            "Catfish": {},
            "Shad": {},
          }
        }
      }

    }
  }
  render() {
    return (
      <View>
        <Season season={"spring"} checks={this.state.checks.spring} />
      </View>
      /*
      <Check name="parsnip" description="forage"/>
      <View style={styles.container}>
        <Text>Lmao</Text>
        <Button onPress={() => {
          Alert.alert('You tapped the button!');
        }}
          title="Press Me"
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here"
          onChangeText={(text) => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}

        </Text>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 300, backgroundColor: "gray" }}
          onValueChange={(value, index) => this.setState({ language: value })}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
