import Leaderboard from "./components/Leaderboard";
import "./App.css";
import axios from "axios";

if (process.env.NODE_ENV === "production") {
	axios.defaults.baseURL = "http://api.dexlabs.systems";
}

function App() {
	return <Leaderboard />;
}

export default App;
