import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class VehiclesSingle extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<Context.Consumer>
					{({ store }) => {
						return <h1 className="display-4">{store.vehicles[this.props.match.params.theid].name}</h1>;
					}}
				</Context.Consumer>

				<hr className="my-4" />

				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		);
	}
}

VehiclesSingle.propTypes = {
	match: PropTypes.object
};
