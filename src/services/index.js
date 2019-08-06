import axios from 'axios';

const RootPath = 'https://rest.farzain.com/api';
const apikey   = 'Z6OIZrudRcWtEuScCI9Nc38qx';

const Get = (path, params) => {
	const promise = new Promise((resolve, reject) => {
		axios.get(`${RootPath}/${path}`, {
			params
		})
		.then((result) => {
			resolve(result.data);
		}, (err) => {
			reject(err);
		})
	})
	return promise;
}

const getIgPhotos = (id) => Get('ig_post.php', {apikey, id});
const getIgVideos = (id) => Get('ig_post.php', {apikey, id});
const getIgStories = (id) => Get('ig_story.php', {apikey, id});

const API = {
	getIgPhotos,
	getIgVideos,
	getIgStories
}

export default API;