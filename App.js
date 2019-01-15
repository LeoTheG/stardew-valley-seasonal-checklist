import React from 'react';
import {
  StyleSheet, View,
  Picker, AsyncStorage, Alert
} from 'react-native';
import Season from './components/Season';
import { AdMobBanner } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import { MenuProvider } from 'react-native-popup-menu';
import Cog from './components/Cog';
import {initChecks} from './check-init.js'
import SwitchProfileMenu from './components/SwitchProfileMenu';



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      language: '',
      seasons: ["spring", "summer", "fall", "winter", "any"],
      season: "spring",
      profiles: {"Default": initChecks()},
      currentProfile: "Default",
      checks: initChecks(),
      displaySwitchProfileMenu: false
    }
    this.check = this.check.bind(this)
    this.storeData = this.storeData.bind(this)
    this.loadData = this.loadData.bind(this)
    this.resetChecks = this.resetChecks.bind(this)
    this.addProfile = this.addProfile.bind(this)
    this.switchProfile = this.switchProfile.bind(this)
    this.getProfileNames = this.getProfileNames.bind(this)
    this.onCloseSwitchProfile = this.onCloseSwitchProfile.bind(this)
    this.selectProfile = this.selectProfile.bind(this)

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
  resetChecks(){
    for(const season in this.state.checks){
      for (const category in this.state.checks[season]) {
        for (const i in this.state.checks[season][category]){
          this.state.checks[season][category][i].checked = false
        }
      }
    }
    this.forceUpdate()
  }
  switchProfile(){
    this.setState({displaySwitchProfileMenu: true})
  }
  addProfile(name){
    if(name in this.state.profiles){
      Alert.alert(
        'Profile already exists',
        'A profile with the name ' + name + ' already exists!',
        [
          {text: 'OK'}
        ]
        )
    }
    else{
      let state = Object.assign({}, this.state);    //creating copy of object
      state.profiles[name] = initChecks()
      this.setState(state)
    }
  }
  getProfileNames(){
    const list = []; 
    for(const n in this.state.profiles) 
      list.push(n); 
    return list;
  }
  render() {
    let x = []
    let count = 0
    for (const s in this.state.seasons) {
      x.push(<Picker.Item key={count} label={this.state.seasons[s]} value={this.state.seasons[s]} />)
      count++
    }
    return (
      <MenuProvider>
        <View style={styles.container}>
          <View style={styles.topBar}>


            <Picker style={styles.picker}
              selectedValue={this.state.season}
              onValueChange={(value, index) => { this.setState({ season: value }, () => { this.forceUpdate() }) }}
            >
              {x}
            </Picker>

            <Cog resetChecks={this.resetChecks} addProfile={this.addProfile} switchProfile={this.switchProfile}/>
            {
            <SwitchProfileMenu names={this.getProfileNames()} 
              display={this.state.displaySwitchProfileMenu} 
              onClose={this.onCloseSwitchProfile}
              selectProfile={this.selectProfile}
            />
            }

          </View>
          <Season season={this.state.season} checks={this.state.checks[this.state.season]} check={this.check} />
          <AdMobBanner style={styles.bottomBanner}
            bannerSize="fullBanner"
            //adUnitID="ca-app-pub-2964072979069071/2820899412"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            testDeviceID="EMULATOR"
            onDidFailToReceiveAdWithError={this.bannerError}
          />
        </View>
      </MenuProvider>
    );
  }
  onCloseSwitchProfile(){
    this.setState({displaySwitchProfileMenu: false})
  }
  selectProfile(profile){
    this.setState({profile,checks: this.state.profiles[profile]})
  }
}

const styles = StyleSheet.create({
  container: {
    // make room for banner
    marginBottom: 80
  },
  picker: {
    width: "30%"
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0
  },
  topBar: {
    marginTop: "5%",
    flexDirection: 'row'
  },
});
