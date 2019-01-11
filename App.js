import React from 'react';
import {
  StyleSheet, View,
  Picker, AsyncStorage
} from 'react-native';
import Check from './components/Check';
import Season from './components/Season';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      language: '',
      seasons: ["spring", "summer", "fall", "winter"],
      season: "spring",
      checks: {
        spring: {
          forage: {
            "Wild Horseradish": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Spring Foraging",
                lastChance: true
              },
              checked: false
            },
            "Leek": {
              expanse: {

              },
              checked: false
            },
            "Daffodil": {
              expanse: {

              },
              checked: false
            },
            "Dandelion": {
              expanse: {

              },
              checked: false
            },
            "Morel": {},
            "Common Mushroom": {},
          },
          farming: {
            "Parsnip": {},
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
        },
        summer: {
          forage: {
            "Spice Berry": {},
            "Sweet Pea": {},
            "Grape": {},
            "Fiddlehead Fern": {},
            "Red Mushroom": {},
          },
          farming: {
            "Tomato": {},
            "Hot Pepper": {},
            "Blueberry": {},
          },
          fishing: {

          }
        }
      }

    }
    this.check = this.check.bind(this)
    this.storeData = this.storeData.bind(this)
    this.loadData = this.loadData.bind(this)

    this.loadData()
  }
  // used for propagating up changes in checks
  check(season, category, name, checked) {
    const newState = Object.assign({}, this.state)
    newState.checks[season][category][name]["checked"] = checked
    this.setState(newState, () => {
      this.storeData()
    })
    //this.state.checks[season][category][name]["checked"] = checked
  }
  storeData = async () => {
    try {
      await AsyncStorage.setItem('checks', JSON.stringify(this.state.checks))
    }
    catch (error) {
      console.log(error.message)
    }
  }
  loadData = async () => {
    let data = null
    try {
      data = await AsyncStorage.getItem('checks')
    }
    catch (error) {
      console.log(error.message)
    }
    if (data != null) {
      this.setState({ checks: JSON.parse(data) })
    }
  }
  render() {
    let x = []
    let count = 0
    for (const s in this.state.seasons) {
      x.push(<Picker.Item key={count} label={this.state.seasons[s]} value={this.state.seasons[s]} />)
      count++
    }
    return (
      <View>
        <Picker style={styles.picker}
          selectedValue={this.state.season}
          onValueChange={(value, index) => { this.setState({ season: value }, () => { this.forceUpdate() }) }}
        >
          {x}
        </Picker>
        <Season season={this.state.season} checks={this.state.checks[this.state.season]} check={this.check} />
      </View>
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
  picker: {
    marginTop: 50,
    width: 150
  }
});
