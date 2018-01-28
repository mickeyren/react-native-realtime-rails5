import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, List, ListItem, Title } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class MembersScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    
    return <Container>
      <Header style={{backgroundColor: '#333333'}}>
      <Left></Left>
      <Body>
          <Title>Members</Title>
      </Body>
    </Header>    
    <Content style={{ backgroundColor: '#FFFFFF'}}>
    <List>
      <ListItem style={{ backgroundColor: '#FFFFFF', padding:0, paddingBottom: 0, marginBottom: 0}} itemDivider >
        <Text><B>A</B></Text>
      </ListItem>   
      <ListItem>
      <Grid>
        <Col style={{ height: 210 }}>
          <Card>
              <CardItem>
                <Body>
                  <Image 
                    style={{width: '100%', height: 120}}
                    source={{uri: 'https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'}} 
                    />
                  <Text>
                    Edinson <B>Arena</B>{"\n"}
                    <Text note style={{fontSize: 8}}>Member</Text>{"\n"}
                    <Text style={{fontSize: 10}}>Azteca Mexican Candy</Text>
                  </Text>
                </Body>
              </CardItem>
          </Card>
        </Col>
        <Col></Col>
      </Grid>
      </ListItem>
    <ListItem itemDivider style={{ backgroundColor: '#FFFFFF', padding:0, paddingBottom: 0, marginBottom: 0}}>
    <Text><B>B</B></Text>
  </ListItem>   
  <ListItem>
    <Grid>
          <Col style={{ height: 210 }}>
          <Card>
          <CardItem>
                  <Body>
                    <Image 
                      style={{width: '100%', height: 120}}
                      source={{uri: 'https://images.pexels.com/photos/235534/pexels-photo-235534.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'}} 
                      />
                    <Text>
                      Simone <B>Bruni</B>{"\n"}
                      <Text note style={{fontSize: 8}}>Member</Text>{"\n"}
                      <Text style={{fontSize: 10}}>Demolition Diva</Text>
                    </Text>
                  </Body>
                </CardItem>
            </Card>
          </Col>
          <Col style={{ backgroundColor: '#FFFFFF', height: 200 }}></Col>
        </Grid>      
  </ListItem>
  </List>
  </Content>
  </Container>;
  }
}
