// Fetch ou Axios - consome api 
import "dotenv/config";
import axios from "axios";

// const {NODE_ENV} = process.env;
// Endpoint acessado para fazer as requisições
// const URL = "http://localhost:3001/api";
const URL = "https://spotify-jornada-full-stack-edhp.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
