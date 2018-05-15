import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, StatusBar } from 'react-native';

import {createDrawerNavigator} from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';

import { Icon, Container, Content, Header, Left, Right, Body, List, ListItem } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
       <AppDrawerNavigator />
    );
  }
}

const CustomDrawerContentComponent = (props) => {
  return(
    <Container>
      <Header style={[styles.header , styles.androidHeader]}>
        <Left style={{flex:1, flexDirection: 'row', alignItems:'center',}}>
          <Icon name="person" style={{color:'white'}} />
          <Text style={styles.profilename}>Hello, Naadiya</Text>
        </Left>
      </Header>
      
      <Content>
        <FlatList
          keyExtractor={item=>item}
          data={[
            'Home', 'Shop by Cuisine', 'Todays Deals'
          ]}
          renderItem={( {item} ) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
        <FlatList
          style={styles.menulist}
          keyExtractor={item=>item}
          data={[
            'Favourites', 'Your Account'
          ]}
          renderItem={( {item} ) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
        <FlatList
          keyExtractor={item=>item}
          style={styles.menulist}
          data={[
            'Settings', 'Customer Service'
          ]}
          renderItem={( {item} ) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
      </Content>

    </Container>
  )
}

const AppDrawerNavigator = createDrawerNavigator(
  {
  HomeScreen: { screen: HomeScreen } ,
  },
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    // backgroundColor: '#3a455c',
    backgroundColor: "#F45866",
    height: 90,
  },
  menulist: {
    borderTopWidth: 0.5,
    borderColor: '#f0f0f0',
  },
  profilename: {
    marginLeft:5, 
    fontSize: 20, 
    color: 'white', 
    fontStyle: 'italic',
    paddingHorizontal: 10,
  },
  androidHeader: {
    ...Platform.select({
        paddingTop: StatusBar.currentHeight,
    })
}
});
