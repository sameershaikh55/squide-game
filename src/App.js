// IMPORT CSS
import "./styles/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// IMPORT REACT ROUTER
import { Route, Switch } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Home";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	);
}

export default App;
