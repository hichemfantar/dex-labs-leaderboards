import appConstants from "appConstants";
import axios from "axios";
import "./App.css";
import Leaderboard from "./components/Leaderboard";

// only set baseurl in prod because dev is using proxy
if (process.env.NODE_ENV === "production") {
	axios.defaults.baseURL = appConstants.baseUrl;
}

function App() {
	return <Leaderboard />;
}

export default App;
