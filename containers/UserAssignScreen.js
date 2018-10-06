import React from 'react';

import { StyleSheet, Text, FlatList, View, PanResponder } from 'react-native';

import { List, ListItem, Left, Body, Right, Thumbnail, Container, Card, CardItem,} from 'native-base'

import { Col, Row, Grid } from 'react-native-easy-grid';

// import Carousel from 'react-native-snap-carousel';
// import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';


import ScreenHeader from '../components/ScreenHeader.js';
import AvatarList from '../components/AvatarList.js';
import ItemList from '../components/ItemList.js';

export default class UserAssignScreen extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        users : [
          {key: '1', name: 'Karin', url: "https://scontent.fkul10-1.fna.fbcdn.net/v/t31.0-8/23551166_10155850971182505_6697654017228366398_o.jpg?_nc_cat=0&oh=a64a515273da767d487465f27d1906a1&oe=5C3177FA", current_total: 0},
          {key: '2', name: 'Azriff', url: "https://scontent.fkul10-1.fna.fbcdn.net/v/t31.0-8/10446204_948420608562938_3362172455530479727_o.jpg?_nc_cat=0&oh=fd10deb735e76b74fedf238b4d4fc4a1&oe=5C3AC448", current_total: 0}
        ],
        items : [
          {key: '1', name: 'Hot Dog', price: "20", shared_by: []},
          {key: '2', name: 'Potatoes', price: "30", shared_by: []},
        ]
      };
  }

  // _renderItem ({item, index}) {
  //         return (
  //             <View style={styles.slide}>
  //                 <Text style={styles.title}>{ item.title }</Text>
  //             </View>
  //         );
  //     }

  render() {
    return (
      <Container>
        <ScreenHeader screenTitle='User Assign'/>
        <Grid>
          <Col size={20} style={{ backgroundColor: '#635DB7' }}>
            <FlatList
              horizontal={false}
              data={this.state.users}
              renderItem={({item}) => this.renderUserCell(item)}
              />
          </Col>
          <Col size={80} style={{ backgroundColor: '#000000' }}>
            <FlatList
              horizontal={true}
              data={this.state.items}
              renderItem={({item}) => this.renderItemCell(item)}
              />

              {/*<Carousel
                  ref={(c) => { this._carousel = c; }}
                  data={this.state.items}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                />*/}


          </Col>
        </Grid>
      </Container>
    );
  }

  renderUserCell(user) {
    return <ListItem avatar key={user.key}>
              <Thumbnail source={{ uri: user.url }} />
              <Text>{user.current_total}</Text>
          </ListItem>
  }

  renderItemCell(item) {
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
