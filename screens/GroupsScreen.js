import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Button, Icon, List, ListItem, Title } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

StyleSheet.create({
  Header: {
    backgroundColor: '#ff0000'
  },
  content: {
    backgroundColor: '#0000ff'
  },
  welcome: {
    fontSize: 20
  }
});

export default class GroupsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return <Container>
      <Header style={{backgroundColor: '#333333'}}>
        <Left></Left>
        <Body>
            <Title>Groups</Title>
        </Body>
      </Header>
      <Content style={{backgroundColor: '#ffffff'}}>
      <List>
        <ListItem style={{ marginRight: 5}}>
        <Grid>
          <Col style={{margin: 5}}>
              <View style={{borderColor: '#dddddd', borderWidth: 1, justifyContent: 'center', paddingBottom: 10 }}>
                <Image 
                  style={{width: '100%', height: 120}}
                  source={{uri: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'}} 
                  />
                <Text>Workout Club</Text>
                <Button light small rounded capitalize={false} style={{ height: 20, marginTop:0, marginLeft:0, paddingLeft: 0, paddingRight: 0, alignSelf:'center' }}>
                  <Text style={{fontSize: 8}}>Join now</Text>
                </Button>
              </View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{fontSize: 10, paddingLeft: 15, flex: 1, borderColor: '#dddddd', borderWidth: 1, borderTopWidth:0, alignSelf: 'center'}}>Members{"\n"}
                  <Text style={{fontSize: 12}}>78</Text>
                  <Icon name="md-person" style={{fontSize: 12, marginLeft: 5}} />
                </Text>
                <Text style={{fontSize: 10, paddingLeft: 15, flex: 1, borderColor: '#dddddd', borderWidth: 1, borderTopWidth:0}}>Posts{"\n"}
                  <Text style={{fontSize: 12}}>127</Text>
                  <Icon name="md-chatboxes" style={{fontSize: 12, marginLeft: 5}}/>
                </Text>
              </View>
          </Col>
          <Col style={{margin: 5}}>
            <View style={{borderColor: '#dddddd', borderWidth: 1, justifyContent: 'center', paddingBottom: 10 }}>
              <Image 
                style={{width: '100%', height: 120}}
                source={{uri: 'https://images.pexels.com/photos/210337/pexels-photo-210337.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'}} 
                />
              <Text>The Food Club</Text>
              <Button light small rounded capitalize={false} style={{height: 20, marginTop:0, marginLeft:0, paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0, alignSelf:'center' }}>
                <Text style={{fontSize: 8}}>Join now</Text>
              </Button>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{fontSize: 10, paddingLeft: 15, flex: 1, borderColor: '#dddddd', borderWidth: 1, borderTopWidth:0, alignSelf: 'center'}}>Members{"\n"}
                <Text style={{fontSize: 12}}>78</Text>
                <Icon name="md-person" style={{fontSize: 12, marginLeft: 5}} />
              </Text>
              <Text style={{fontSize: 10, paddingLeft: 15, flex: 1, borderColor: '#dddddd', borderWidth: 1, borderTopWidth:0}}>Posts{"\n"}
                <Text style={{fontSize: 12}}>127</Text>
                <Icon name="md-chatboxes" style={{fontSize: 12, marginLeft: 5}}/>
              </Text>
            </View>
          </Col>
        </Grid>
      </ListItem>
     <ListItem>
      <Grid>
            <Col style={{marginLeft: 5, marginRight: 5}}>
              <View style={{borderColor: '#dddddd', borderWidth: 1, paddingBottom: 10 }}>
                <Image 
                  style={{width: '100%', height: 120}}
                  source={{uri: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'}} 
                  />
                <Text>Book Club</Text>
                <Button light small rounded capitalize={false} style={{ marginTop:0, marginLeft:0, height: 20, paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0, alignSelf:'center' }}>
                  <Text style={{fontSize: 8}}>Join now</Text>
                </Button>
              </View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 10, paddingLeft: 15, flex: 1, borderColor: '#dddddd', borderWidth: 1, borderTopWidth:0, alignSelf: 'center'}}>Members{"\n"}
                  <Text style={{fontSize: 12, marginRight: 5}}>78</Text>
                  <Icon name="md-person" style={{fontSize: 12}} />
                </Text>
                <Text style={{fontSize: 10, paddingLeft: 15, flex: 1, borderColor: '#dddddd', borderWidth: 1, borderTopWidth:0}}>Posts{"\n"}
                  <Text style={{fontSize: 12, paddingRight: 5}}>127</Text>
                  <Icon name="md-chatboxes" style={{fontSize: 12}}/>
                </Text>
              </View>
            </Col>
            <Col></Col>
          </Grid>      
    </ListItem>
    </List>
    </Content>
    </Container>;
  }
}
