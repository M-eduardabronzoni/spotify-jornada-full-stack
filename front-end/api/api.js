// Fetch ou Axios - consome api 
import axios from "axios";

// Endpoint acessado para fazer as requisições
const URL = "http://localhost:3001"; 

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
