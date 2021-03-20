// @flow
import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import StyledButton from '../styledButton';
import styles from './styles';
const CarItem = (props) => {
    return (
        <View style={styles.carcontainer} >
        <ImageBackground 
        source={require('../../assets/images/ModelX.jpeg')} 
        style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,999</Text>
        </View>
        
        <StyledButton type='primary' 
        content={"Custom Order"} 
        onPress={() => {
          console.warn("Custom order was pressed")
        }}
        
        />

        <StyledButton type='secondary' 
        content={"Existing Inventory"} 
        onPress={() => {
          console.warn("Exisiting inventory was pressed")
        }}
        
        />
      </View>
    );
};

export default CarItem;