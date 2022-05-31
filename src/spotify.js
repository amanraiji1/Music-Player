import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "5723a0d88f2343a28f5d0264c5e2c16a";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-library-read",
  "playlist-read-private",
  "streaming",
  "user-read-email",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-library-modify",
  "user-read-private",
];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
