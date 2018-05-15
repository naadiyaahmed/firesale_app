import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Right } from 'native-base';
import StarRating from 'react-native-star-rating';


export default class RecommendedCardItem extends Component {
  render() {
    return (
      <View>
        <CardItem>
            <View>
                <Image 
                style={{height:90, width: 90}}
                source={this.props.imageUri}
                />
            </View>
            <Right style={styles.itemdetails}>
                <Text>{this.props.itemName}</Text>
                <Text style={{fontSize: 12, color: 'grey'}}>{this.props.itemCreator}</Text>
                <Text style={{fontSize: 14,fontWeight:'bold', color: '#c4402f'}}>{this.props.itemPrice}</Text>
                <Text>
                    <Text style={{fontSize: 12, color: 'grey'}}>You Save:</Text>  
                   {this.props.savings}
                </Text>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={this.props.rating}
                    starSize={12}
                    fullStarColor='orange'
                    emptyStarColor='orange'
                />
            </Right>
        </CardItem>
     </View>
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
    itemdetails: {
        flex:1,
        alignItems: 'flex-start',
        height: 90,
        paddingHorizontal: 20,
    }
});