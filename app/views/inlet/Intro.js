/**
 * Created by Layman(http://github.com/anysome) on 16/2/19.
 */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default class Intro extends React.Component {
	render() {
		return (
			<View style={style.container}>
        <Text style={style.title}>行事易</Text>
      </View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
	title: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});
