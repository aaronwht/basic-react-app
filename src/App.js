import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/about" component={About} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
