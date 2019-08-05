import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
export class Home extends React.Component {
	render() {
		return (
			<div className="container mt-5">
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								store.people &&
								store.people.map((item, index) => {
									return (
										<div key={index} className="col-3 m-3 p-3 border border-primary">
											<h5 className="card-title">{item.name}</h5>

											<a href={item.homeworld}>Visit {item.name} Home Planet </a>
											<div className="d-flex justify-content-between">
												<div>
													<a href="#" className="btn btn-primary">
														{item.gender}
													</a>
												</div>
												<div>
													<i className="far fa-star" />
												</div>
											</div>
										</div>
									);
								})
							);
						}}
					</Context.Consumer>
				</div>
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div>
									{store.vehicles &&
										store.people &&
										store.vehicles[5].name + " " + store.people[5].name}
								</div>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
