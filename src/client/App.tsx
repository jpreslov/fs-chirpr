import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './views/Home';
import Details from './views/Details';
import Admin from './views/Admin';
import Compose from './views/Compose';


const App: React.FC<AppProps> = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/details/:id" component={Details}/>
					<Route exact path="/admin/:id" component={Admin}/>
					<Route exact path="/compose/" component={Compose}/>
				</Switch>
			</BrowserRouter>
		</>
	)
}

export interface AppProps {}

export interface IAppState {
	name: string;
}

export default App;
