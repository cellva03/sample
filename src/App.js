import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import LeaderBoard from './Component/LeaderBoard';
import 'h8k-components';

const title = "SPA - LeaderBoard";
function App() {
	return (
		<>
		<Router>
			<Switch>
				<Route path="/">
					<div className="App">
						<h8k-navbar header={title}></h8k-navbar>
						<LeaderBoard />
					</div>
				</Route>
				<Route path="/name">
					<div className="App">
						<h8k-navbar header={title}></h8k-navbar>
						<LeaderBoard />
					</div>
				</Route>
				<Route path="/rank">
					<div className="App">
						<h8k-navbar header={title}></h8k-navbar>
						<LeaderBoard />
					</div>
				</Route>
				<Route path="/age">
					<div className="App">
						<h8k-navbar header={title}></h8k-navbar>
						<LeaderBoard />
					</div>
				</Route>
				<Route path="/points">
					<div className="App">
						<h8k-navbar header={title}></h8k-navbar>
						<LeaderBoard />
					</div>
				</Route>
			</Switch>
		</Router>
		</>
	);
}

export default App;
