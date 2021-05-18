import React, {Component} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';

export default class X extends Component{

	constructor(props){
		super(props);

		this.state = {
			heightCircle: new Animated.Value(0),
		};

		Animated.timing(
			this.state.heightCircle,
			{toValue: 60, duration: 500, easing: Easing.elastic(1.5)}
		).start();

	}

	render(){

		return(

			<Animated.View style={styles.area}>
				<Animated.View style={[styles.circle, {height: this.state.heightCircle}]}>
					
				</Animated.View>
			</Animated.View>

		);
	}
}

const styles = StyleSheet.create({
	area:{
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center'
	},
	circle:{
		width: 60,
		backgroundColor: '#FF0000',
		borderRadius: 30
	}
});