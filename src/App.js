// IMPORT CSS
import "./styles/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// IMPORT BOOTSTRAP
import "bootstrap";

// IMPORT REACT ROUTER
import { Route, Switch } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Website/Home";
import Winner from "./pages/Website/Winner";
import Login from "./pages/Panel/Login";
import Dashboard from "./pages/Panel/Dashboard";

function App() {
	return (
		<Switch>
			{/* <Route exact path="/" component={Home} /> */}
			<Route exact path="/winner" component={Winner} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/" component={Dashboard} />
		</Switch>
	);
}

export default App;
