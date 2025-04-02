import { appConstants } from "./appConstants";
import axios from "axios";
import Leaderboard from "./components/Leaderboard";

// this is to avoid cors issues in dev
// proxy set in vite config

axios.defaults.baseURL = "/api";
if (import.meta.env.PROD) {
	axios.defaults.baseURL = appConstants.baseUrl;
}

function App() {
	return <Leaderboard />;
}

export default App;
