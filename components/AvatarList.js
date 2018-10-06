import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

import { List, ListItem, Left, Body, Right, Thumbnail, } from 'native-base'

export default class AvatarList extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      users: this.props.users
    }
  }

  render() {
    return (
      <FlatList
        horizontal={true}
        data={this.state.users}
        renderItem={({item}) => this.renderCell(item)}
        />
    );
  }

  renderCell(user) {
    return <ListItem avatar key={user.key}>
              <Thumbnail source={{ uri: user.url }} />
              <Text>{user.current_total}</Text>
          </ListItem>
  }
}
