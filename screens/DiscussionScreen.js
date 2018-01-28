import React from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Button, Icon, Left, Body, Right, Text, Thumbnail, Title, InputGroup, Input } from 'native-base';
//import { Card, Title, Subtitle, Caption, Button } from '@shoutem/ui';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'A few seconds ago'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_1280.png',
    subtitle: '3 hours ago'
  }
]


export default class DiscussionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

 render() {
    return (
       <Container>
        <Header style={{backgroundColor: '#333333'}}>
          <Left></Left>
          <Body>
              <Title>Discussion</Title>
          </Body>
        </Header>
        <Content>
        <View>
          <InputGroup>
              <Icon name="ios-person" />
              <Input placeholder="Say something to this group" />
          </InputGroup>
        </View>
        {
          list.map((l, i) => (
          <Card  key={i} style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: l.avatar_url}} />
                <Body>
                  <Text>{l.name}</Text>
                  <Text note>{l.subtitle}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </Body>
            </CardItem>
            <CardItem>
                <Left>
                  <Text note>1 like, 10 comments</Text>
                </Left>
                <Right>
                  <Text note>Seen by 7</Text>
                </Right>
            </CardItem>
            <CardItem style={{paddingLeft:0, paddingRight:0, marginLeft:0}}>
              <Left style={{width: '100%'}}>
                <Button light style={{width: '100%', borderColor: '#dddddd', borderWidth: 1}}>
                  <Icon name="md-chatboxes" />
                  <Text style={{}}>Like</Text>
                </Button>
              </Left>
              <Right style={{width: '100%'}}>
                <Button light style={{width: '100%', borderColor: '#dddddd', borderWidth: 1}}>
                  <Text>Comments</Text>
                  <Icon name="md-chatboxes" />
                </Button>
              </Right>
            </CardItem>
          </Card>
          ))
        }
      </Content>        
      </Container>
    );
  }
}
