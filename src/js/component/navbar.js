import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/people">
						<button className="btn btn-primary">People</button>
					</Link>
					<Link to="/vehicles">
						<button className="btn btn-primary">Vehicles</button>
					</Link>
					<Link to="/planets">
						<button className="btn btn-primary">Planets</button>
					</Link>
				</div>
			</nav>
		);
	}
}
