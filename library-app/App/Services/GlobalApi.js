import axios from 'axios';
import Config from '../../assets/Shared/Config';

const AxiosOInstance = axios.create({
	baseURL:Config.BASE_URL,
	headers:{
		'Authorization':"Bearer"+Config.API_KEY,
	},
});

const getSlider = () => AxiosOInstance.get("/sliders?populate=*");

export default{
	getSlider,
}