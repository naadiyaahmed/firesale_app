import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar,Image } from 'react-native';
import {Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem} from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import RecommendedCardItem from './Components/RecommendedCardItem';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
          
          <Header style={[styles.header,styles.androidHeader]}>
              <Left style={{flexDirection:'row'}}>
                <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{color: 'white', marginRight:30}} />
                <FAIcon name="fire" style={{fontSize: 30, color: 'white'}} />
                <Text style={styles.logoname}>Fire Sale</Text>
              </Left>
              <Right>
                  <Icon name="md-cart" style={{color:'white'}}  />
              </Right>
          </Header>
          
          <View style={styles.navbar2}>
            {/* <TouchableOpacity>
                <View style={styles.categoryButton}>
                    <Text style={{fontSize:12}}>Shop By</Text>
                    <Text style={{fontWeight:'bold'}}>Category</Text>
                </View>
            </TouchableOpacity> */}
                <View style={styles.searchbox}>
                    <Item style={styles.searchbar}>
                        <Icon name="search" style={{fontSize:20, paddingTop: 5}}/>
                        <Input placeholder="Search"/>
                    </Item>
                </View>
          </View>
          
          <Content style={{backgroundColor:'#EFF0D1', marginTop: 70}}>
              <View style={styles.accountinfo}>
                  <Text>Hello, Naadiya Ahmed</Text>
                  <View style={{flexDirection: 'row'}}>
                      <Text>Your Account  </Text>
                      <Icon name="arrow-forward" style={{fontSize:18}} />
                  </View>
              </View>
              
              <Swiper showsButtons={false} showsPagination={false} autoplay={true} style={{height:100}}>
                <View style={{flex:1}}>
                    <Image
                    style={{flex:1, height:null, width:null, resizeMode: 'cover'}}
                    source={require('../Images/banner1.jpg')}
                    />
                </View>
                <View style={{flex:1}}>
                    <Image
                    style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                    source={require('../Images/banner2.jpg')}
                    />
                </View>
                <View style={{flex:1}}>
                    <Image
                    style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                    source={require('../Images/banner3.jpg')}
                    />
                </View>
              </Swiper>
              
              <Card style={{marginLeft: 5, marginRight:5}}>
                  <CardItem header style={{borderBottomWidth:1, borderBottomColor: '#dee0e2'}}>
                      <Text>Your Recommendations</Text>
                  </CardItem>
                  <RecommendedCardItem
                    itemName="Chicken Caesar Salad"
                    itemCreator="Subway"
                    itemPrice="$10"
                    savings="$2"
                    imageUri={require('../Images/recommended1.jpeg')}
                    rating={4}
                  />
                  <RecommendedCardItem
                    itemName="Greek Lasagna"
                    itemCreator="Food and Beyond"
                    itemPrice="$20"
                    savings="$5"
                    imageUri={require('../Images/recommended2.jpeg')}
                    rating={5}
                  />
                  <RecommendedCardItem
                    itemName="Chicken Roll with Spices"
                    itemCreator="Roll-On"
                    itemPrice="$3"
                    savings="$1"
                    imageUri={require('../Images/recommended3.jpeg')}
                    rating={3}
                  />
              </Card>
          </Content>

      </Container>
    );
  }
}

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
        borderBottomColor: '#757575',
    },
    navbar2: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 90,
        height: 70,
        // backgroundColor: '#3a455c',
        backgroundColor: "#F45866",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    // categoryButton: {
    //     backgroundColor: '#e7e7eb',
    //     width: 100,
    //     height: 50,
    //     borderRadius: 5,
    //     padding: 10,
    // },
    searchbox: {
        flex: 1,
        height: '100%',
        marginLeft: 5,
        justifyContent: 'center',
    },
    searchbar: {
        backgroundColor: '#F1E4F3',
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    accountinfo: {
        backgroundColor: 'white',
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoname: {
        fontSize: 22,
        color: 'white', 
        paddingHorizontal: 5,
        alignItems: 'center',
        marginLeft: 10, 
        fontFamily: 'American Typewriter',
    },
    androidHeader: {
        ...Platform.select({
            paddingTop: StatusBar.currentHeight,
        })
    }
  });