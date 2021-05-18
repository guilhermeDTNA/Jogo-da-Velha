import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import X from './src/X';
import O from './src/O';

export default class TicTac extends Component {

  constructor(props){
    super(props);

    this.state = {

    };
  }

  render(){

    //<View style={{width: 60, height: 60, backgroundColor: '#FF0000', borderRadius: 30}}></View>

    return (
      <View style={styles.container}>


        <View style={styles.area}>
          <View style={[styles.vertical, {borderLeftWidth: 0}]}>
            <View style={[styles.horizontal, {borderTopWidth: 0}]}>
              
            </View>

            <View style={styles.horizontal}>
              <O />
            </View>

            <View style={styles.horizontal}>
              
            </View>
          </View>

          <View style={styles.vertical}>
            <View style={[styles.horizontal, {borderTopWidth: 0}]}>
               <X />
            </View>

            <View style={styles.horizontal}>
              
            </View>

            <View style={styles.horizontal}>
              
            </View>
          </View>

          <View style={styles.vertical}>
            <View style={[styles.horizontal, {borderTopWidth: 0}]}>
              
            </View>

            <View style={styles.horizontal}>
              
            </View>

            <View style={styles.horizontal}>
              
            </View>
          </View>
        </View>

        <View style={styles.infoArea}>
          <View style={styles.infoTurn}>
            <Text>Vez de:</Text>
            

              
            </View>
          

          <View style={styles.infoNotice}>
            <Text>X ganhou!</Text>
          </View>

          </View>


        </View>
      );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  area:{
    width: 300,
    height: 300,
    flexDirection: 'row'
  },
  vertical:{
    flex: 1,
    borderLeftWidth: 5,
    borderLeftColor: '#000000'
  },
  horizontal:{
    flex: 1,
    borderTopWidth: 5,
    borderTopColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoArea:{
    marginTop: 30,
    flexDirection: 'row'
  },
  infoTurn:{
    width: 90,
    height: 90,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoNotice:{
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
