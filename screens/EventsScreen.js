import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <Calendar />;
  }
}
