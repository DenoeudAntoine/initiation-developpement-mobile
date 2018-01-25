import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button
} from 'react-native';

export default class App extends Component {
	videos = [{
			"title":"CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation",
			"thumbnail": require("./images/catlaugh.jpg"),
			"video": "videos/catfails.mp4"
		},
		{
			"title":"Hilarious Cat Fails (April 2017)",
			"thumbnail": require("./images/catfails.jpg"),
			"video": "videos/catfails.mp4"
		},
		{
			"title":"Cats are so funny you will die laughing - Funny cat compilation",
			"thumbnail": require("./images/catssofunny.jpg"),
			"video": "videos/catfails.mp4"
		}];

	render() {
		return (
			<View>
				<View>
					<Text>ReactTube</Text>
				</View>
				<Button title="Ajouter une vidéo" />
				{ this.renderVideoList() }
			</View>
		);
	}

	renderVideoList() {
		const videoList = [];
		this.videos.forEach( video => {
			videoList.push(
				<View key={video.thumbnail+video.video}>
					{/* <Image /> */}
					<Image source={video.thumbnail} />
					<Text>{video.title}</Text>
				</View>
			);
		});
		return videoList;
	}
}

