import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

import UserAssignScreen from './containers/UserAssignScreen.js'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { is_loading: true };
  }

  async componentWillMount() {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
      this.setState({is_loading: false});
    }

  render() {
    if(this.state.is_loading){
      return <Expo.AppLoading />
    } else {
      return <UserAssignScreen />
    }
  }
}
