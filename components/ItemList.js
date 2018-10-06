import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

import { Card, CardItem, Left, Body, Right } from 'native-base'

export default class ItemList extends React.Component {
  render() {
    return (
      <FlatList
        horizontal={true}
        data={this.props.items}
        renderItem={({item}) => this.renderCell(item)}
        />
    );
  }

  renderCell(item) {
    return <Card>
              <CardItem header>
                <Body>
                  <Text> RM {item.price} </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text> {item.name} </Text>
                </Body>
              </CardItem>
          </Card>
  }
}
