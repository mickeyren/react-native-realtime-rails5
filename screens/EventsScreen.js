import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Container, Header, Left, Body, Title } from 'native-base';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <Container>
      <Header style={{backgroundColor: '#333333'}}>
        <Left></Left>
        <Body>
            <Title>Events</Title>
        </Body>
      </Header>
      <Calendar />
      <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>There are no events today</Text>
      </View>      
    </Container>;
  }
}
