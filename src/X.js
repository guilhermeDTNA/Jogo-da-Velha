import React, {Component} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';

export default class X extends Component{

	constructor(props){
		super(props);

		this.state = {
			arrow1: new Animated.Value(0),
			arrow2: new Animated.Value(0)
		};

		Animated.timing(
			this.state.arrow1,
			{toValue: 45, duration: 500, easing: Easing.elastic(1.5)}
		).start();

		Animated.timing(
			this.state.arrow2,
			{toValue: -45, duration: 500, easing: Easing.elastic(1.5)}
		).start();
	}

	render(){

		let rotate1 = this.state.arrow1.interpolate({
			inputRange: [0, 360],
			outputRange: ['0deg', '360deg']
		});

		let rotate2 = this.state.arrow2.interpolate({
			inputRange: [0, 360],
			outputRange: ['0deg', '360deg']
		});

		return(

			<Animated.View style={styles.area}>
				<Animated.View style={[
					styles.arrow,  
					{
						transform: [{perspective: 1000}, {rotate: rotate1}]
					}
				]}>
					
				</Animated.View>

				<Animated.View style={[
					styles.arrow,  
					{
						transform: [{perspective: 1000}, {rotate: rotate2}]
					}
				]}>
					
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
	arrow:{
		width: 10,
		height: 60,
		backgroundColor: '#FF0000',
		position: 'absolute'
	}
});