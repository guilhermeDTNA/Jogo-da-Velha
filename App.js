import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';

import X from './src/X';
import O from './src/O';

export default class TicTac extends Component {

  constructor(props){
    super(props);

    this.state = {
      turn: 'x',
      notice: '',

      a1: '',
      a2: '',
      a3: '',

      b1: '',
      b2: '',
      b3: '',

      c1: '',
      c2: '',
      c3: ''
    };

    this.clicked = this.clicked.bind(this);
    this.reset = this.reset.bind(this);
    this.verify = this.verify.bind(this);
  }

  reset(){
    this.setState({
      turn: 'x',
      notice: '',
      status: 1,

      a1: '',
      a2: '',
      a3: '',

      b1: '',
      b2: '',
      b3: '',

      c1: '',
      c2: '',
      c3: ''
    });
  }

  clicked(position){
    let state = this.state;

    //eval transforma a concatenação em código JavaScript
    if(eval('state.'+position) == '' && state.status == 1){
       eval('state.'+position+' = state.turn');

       if(state.turn == 'x'){
         state.turn = 'o';
       } else{
         state.turn = 'x'
       }
    }

    this.setState(state);

    this.verify('x');
    this.verify('o');
  }

  verify(value){
    let state = this.state;

    if(

        (state.a1 == value && state.b1 == value && state.c1 == value) ||
        (state.a2 == value && state.b2 == value && state.c2 == value) || 
        (state.a3 == value && state.b3 == value && state.c3 == value) ||
        (state.a1 == value && state.a2 == value && state.a3 == value) ||
        (state.b1 == value && state.b2 == value && state.b3 == value) ||
        (state.c1 == value && state.c2 == value && state.c3 == value) ||
        (state.a1 == value && state.b2 == value && state.c3 == value) ||
        (state.a3 == value && state.b2 == value && state.c1 == value)

     ){
      state.notice = value + ' ganhou!!';
      state.status = 0;
    } else if(state.status == 1){

      //Verificando todos os campos

      if(

        state.a1 != '' && state.b1 != '' && state.c1 != '' &&
        state.a2 != '' && state.b2 != '' && state.c2 != '' && 
        state.a3 != '' && state.b3 != '' && state.c3 != '' 

       ){
        state.notice = 'EMPATOU';
        state.status=0;
      }

    }

    
    



    this.setState(state);
  }

  render(){

    return (
      <View style={styles.container}>


        <View style={styles.area}>
          <View style={[styles.vertical, {borderLeftWidth: 0}]}>
            <TouchableHighlight underlayColor='#EEEEEE' onPress={() => {this.clicked('a1')}} style={[styles.horizontal, {borderTopWidth: 0}]}>
              <View>
                {this.state.a1 == 'x' && <X />}
                {this.state.a1 == 'o' && <O />}
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='#EEEEEE' onPress={() => {this.clicked('a2')}} style={styles.horizontal}>
              <View>
                {this.state.a2 == 'x' && <X />}
                {this.state.a2 == 'o' && <O />}
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='#EEEEEE' onPress={() => {this.clicked('a3')}} style={styles.horizontal}>
              <View>
                {this.state.a3 == 'x' && <X />}
                {this.state.a3 == 'o' && <O />}
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.vertical}>
            <TouchableHighlight underlayColor='#EEEEEE' onPress={() => {this.clicked('b1')}} style={[styles.horizontal, {borderTopWidth: 0}]}>
              <View>
                {this.state.b1 == 'x' && <X />}
                {this.state.b1 == 'o' && <O />}
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='#EEEEEE' onPress={() => {this.clicked('b2')}} style={styles.horizontal}>
              <View>
                {this.state.b2 == 'x' && <X />}
                {this.state.b2 == 'o' && <O />}
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='#EEEEEE' onPress={() => {this.clicked('b3')}} style={styles.horizontal}>
              <View>
                {this.state.b3 == 'x' && <X />}
                {this.state.b3 == 'o' && <O />}
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.vertical}>
            <TouchableHighlight underlayColor='#EEEEEE' onPress={() => {this.clicked('c1')}} style={[styles.horizontal, {borderTopWidth: 0}]}>
              <View>
                {this.state.c1 == 'x' && <X />}
                {this.state.c1 == 'o' && <O />}
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='#EEEEEE' onPress={() => {this.clicked('c2')}} style={styles.horizontal}>
              <View>
                {this.state.c2 == 'x' && <X />}
                {this.state.c2 == 'o' && <O />}
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='#EEEEEE' onPress={() => {this.clicked('c3')}} style={styles.horizontal}>
              <View>
                {this.state.c3 == 'x' && <X />}
                {this.state.c3 == 'o' && <O />}
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.infoArea}>
          <View style={styles.infoTurn}>
            <Text>Vez de: </Text>
              {this.state.turn == 'x' && <X />}
              {this.state.turn == 'o' && <O />}
              
            </View>
          

          <View style={styles.infoNotice}>
            <Text>{this.state.notice}</Text>
          </View>

          </View>

          <View>
            <Button title="Resetar" onPress={this.reset} />
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
