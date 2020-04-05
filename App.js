import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
	render() {

		const comments = [
			{
			nickname: 'Dummy 1',
			comment: 'Um belo comentário aqui'
		},
		{
			nickname: 'Dummy 2',
			comment: 'Um comentário não tão belo aqui'
		}
		]
		return (
			<View style={{flex: 1}}>
				<Header />
				<Post image={require('./assets/imgs/fence.jpg')} 
					comments={comments}
				/>
			</View>
    	)
	}
}

