import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Vehicles extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="m-5">
							<h1 className="text-center text-danger">Vehicles</h1>
							<ul className="list-group">
								{store.vehicles &&
									store.vehicles.map((e, i) => {
										return (
											<li key={i} className="list-group-item d-flex justify-content-between">
												{e.name}
												<i className="far fa-star float-right" />
												<Link to={"/vehiclesSingle/" + i}>
													<span> Link to: {i.name}</span>
												</Link>
											</li>
										);
									})}
							</ul>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
