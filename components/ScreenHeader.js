import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Header, Left, Body, Right, Title } from 'native-base'

export default class ScreenHeader extends React.Component {
  render() {
    return (
        <Header>
          <Left/>
          <Body>
            <Title>{this.props.screenTitle}</Title>
          </Body>
          <Right />
        </Header>
    );
  }
}
