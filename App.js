import React from 'react';
import {
  StyleSheet, View,
  Picker, AsyncStorage, Alert, Text
} from 'react-native';
import Season from './components/Season';
import { AdMobBanner } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import { MenuProvider } from 'react-native-popup-menu';
import Cog from './components/Cog';
import { initChecks } from './check-init.js'
import SwitchProfileMenu from './components/SwitchProfileMenu';
import RemoveProfileMenu from './components/RemoveProfileMenu';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      language: '',
      seasons: ["spring", "summer", "fall", "winter", "any"],
      season: "spring",
      profiles: { 'Default': initChecks() },
      currentProfile: 'Default',
      checks: initChecks(),
      displaySwitchProfileMenu: false,
      displayRemoveProfileMenu: false,
    }
    this.check = this.check.bind(this)
    this.storeData = this.storeData.bind(this)
    this.loadData = this.loadData.bind(this)
    this.resetChecks = this.resetChecks.bind(this)
    this.addProfile = this.addProfile.bind(this)
    this.switchProfile = this.switchProfile.bind(this)
    this.removeProfile = this.removeProfile.bind(this)
    this.getProfileNames = this.getProfileNames.bind(this)
    this.onCloseSwitchProfile = this.onCloseSwitchProfile.bind(this)
    this.onCloseRemoveProfile = this.onCloseRemoveProfile.bind(this)
    this.selectSwitchProfile = this.selectSwitchProfile.bind(this)
    this.selectRemoveProfile = this.selectRemoveProfile.bind(this)
    this.isProfile = this.isProfile.bind(this)

    this.loadData()
  }
  // used for propagating up changes in checks
  check(season, category, name, checked) {
    /*
    const newState = Object.assign({}, this.state)
    newState.checks[season][category][name]["checked"] = checked
    this.setState(newState, () => {
      this.storeData()
    })
    */
    this.state.checks[season][category][name]["checked"] = checked
    this.storeData()
  }
  storeData = async () => {
    try {
      //await AsyncStorage.setItem('checks', JSON.stringify(this.state.checks))
      await AsyncStorage.setItem('currentProfile', JSON.stringify(this.state.currentProfile))
    }
    catch (error) {
      console.log(error.message)
    }

    try {
      await AsyncStorage.setItem('profiles', JSON.stringify(this.state.profiles))
    }
    catch (error) { console.log(error.message) }
  }
  loadData = async () => {
    let profiles = null
    let currentProfile = null
    try {
      profiles = await AsyncStorage.getItem('profiles')
      currentProfile = await AsyncStorage.getItem('currentProfile')
    }
    catch (error) {
      console.log(error.message)
    }
    if (profiles != null) {
      this.setState({ profiles: JSON.parse(profiles) }, () => {
        if (currentProfile != null) {
          // remove extra quotation marks from turning to json and back
          if (currentProfile.charAt(0) == '"') currentProfile = currentProfile.substring(1, currentProfile.length - 1)
          this.setState({ currentProfile: currentProfile, checks: this.state.profiles[currentProfile] })
        }
      })
    }
  }
  resetChecks() {
    for (const season in this.state.checks) {
      for (const category in this.state.checks[season]) {
        for (const i in this.state.checks[season][category]) {
          this.state.checks[season][category][i].checked = false
        }
      }
    }
    this.forceUpdate()
  }
  switchProfile() {
    this.setState({ displaySwitchProfileMenu: true })
  }
  removeProfile() {
    this.setState({ displayRemoveProfileMenu: true })
  }
  addProfile(name) {
    if (name in this.state.profiles) {
      Alert.alert(
        'Profile already exists',
        'A profile with the name ' + name + ' already exists!',
        [
          { text: 'OK' }
        ]
      )
    }
    else {
      let state = Object.assign({}, this.state);    //creating copy of object
      state.profiles[name] = initChecks()
      this.setState(state,()=>{
        this.storeData()
      })
    }
  }
  getProfileNames() {
    const list = [];
    for (const n in this.state.profiles) {
      list.push(n);
    }
    return list;
  }
  render() {
    let x = []
    let count = 0
    for (const s in this.state.seasons) {
      x.push(<Picker.Item key={count} label={this.state.seasons[s]} value={this.state.seasons[s]} />)
      count++
    }
    if (!this.state.checks) return (
      <View><Text>Loading...</Text></View>
    )
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

            <Cog resetChecks={this.resetChecks} addProfile={this.addProfile} switchProfile={this.switchProfile}
              removeProfile={this.removeProfile}
            />
              <SwitchProfileMenu names={this.getProfileNames()}
                display={this.state.displaySwitchProfileMenu}
                onClose={this.onCloseSwitchProfile}
                selectProfile={this.selectSwitchProfile}
                isProfile={this.isProfile}
                currentProfile={this.state.currentProfile}
              />
            <RemoveProfileMenu names={this.getProfileNames()}
              display={this.state.displayRemoveProfileMenu}
              onClose={this.onCloseRemoveProfile}
              selectProfile={this.selectRemoveProfile}
            />

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
  onCloseSwitchProfile() {
    this.setState({ displaySwitchProfileMenu: false })
  }
  onCloseRemoveProfile() {
    this.setState({ displayRemoveProfileMenu: false })
  }
  selectSwitchProfile(profile) {
    this.setState({ currentProfile: profile, checks: this.state.profiles[profile] })
  }
  selectRemoveProfile(profile) {
    const oneProfile = Object.keys(this.state.profiles).length == 1
    if (oneProfile) {
      Alert.alert(
        'Cannot delete only profile',
        'You must have at least one profile',
        [
          { text: 'OK' }
        ]
      )
    }
    else {
      if (profile in this.state.profiles) {


        Alert.alert(
          'Confirm deleting profile',
          'Are you sure you want to delete ' + profile + '?',
          [
            {
              text: 'OK', onPress:() => {

                delete this.state.profiles[profile]
                // swap current profile
                if (this.state.currentProfile == profile) {
                  this.state.currentProfile = Object.keys(this.state.profiles)[0]
                  this.state.checks = this.state.profiles[this.state.currentProfile]
                  this.forceUpdate()
                }
                this.storeData()
              },
            },
            {
              text: 'Cancel'
            }
          ]
        )

      }
    }
  }
  isProfile(profile) {
    return this.state.profiles.hasOwnProperty(profile)
  }
}

const styles = StyleSheet.create({
  container: {
    // make room for banner
    marginBottom: 80
  },
  picker: {
    width: "35%"
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

// need to add profile removing and details on items