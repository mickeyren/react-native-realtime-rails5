import React from 'react';
//import { View, Left, Right, Icon, Image } from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Button, Icon, Left, Body, Right, Text, Thumbnail, Title } from 'native-base';
//import { Card, Title, Subtitle, Caption, Button } from '@shoutem/ui';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]


export default class DiscussionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

 render() {
    return (
       <Container>
        <Header backgroundColor="#ffffff">
          <Body>
            <Title>Discussion</Title>
          </Body>
        </Header>
 {
          list.map((l, i) => (
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: l.avatar_url}} />
                <Body>
                  <Text>l.name</Text>
                  <Text note>A few seconds ago</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
                <Left>
                  <Icon name="md-chatboxes" />
                  <Text note>1,926 comments</Text>
                </Left>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button light>
                  <Icon name="md-chatboxes" />
                  <Text>Like</Text>
                </Button>
              </Left>
              <Right>
                <Button light>
                  <Text>Comments</Text>
                  <Icon name="md-chatboxes" />
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
          ))
        }
      </Container>
    );
  }
}
