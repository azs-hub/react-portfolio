import React from "react";
import data from "../shared_data"
import Fade from "react-reveal/Fade"

const Header = () => {
	return (
		<div className="section" id="home">
			<div className="container-lg fh">
				<div className="d-flex align-items-center justify-content-center">
					<div className="">
						<Fade left>
							<img src='images/lotus.svg' alt='lotus' />
							<h2>
								Hi, I'm {data.basic_info.name}{" "}
							</h2>
						</Fade>
						<Fade bottom cascade>
							<h1>
								{data.basic_info.headerTagline}
							</h1>
							<h3>
								{data.basic_info.headerTagline2}
							</h3>
						</Fade>
						<Fade bottom>
							<a className="btn btn-dark" href="#contact">
								CONNECT WITH ME
							</a>
						</Fade>
					</div>
				</div>
			</div>
		</div>
		)
	}

	export default Header