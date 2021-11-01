import React, { Component } from "react";
import { ProgressBar } from 'react-bootstrap';
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import SectionName from "./SectionName";
import data from "../shared_data"


class Skills extends Component {

	render() {
		return (
	    <div className="section" id="skills">
	      <div className="container-md">
	      	<SectionName title="Skills"/>
	      	<div className="row">
		        {data.skills.map((skillCat, index) => (
		        	<div className="col-sm-12 mt-5 mb-5 text-center">
			        	<Fade cascade left>
						    	<h4>{skillCat.name}</h4>
									<ProgressBar now={skillCat.level} />
									<Zoom delay={1000}>
							    	<div className="row justify-content-center mt-3 icon-greyscale">
							      	{skillCat.skills.map((skill, index) => (
							      		<div className="col">
							          	<img src={skill.class} alt="css"></img>
							          </div>
							        ))}
							    	</div>
									</Zoom>
								</Fade>
			        </div>
		        ))}
		    	</div>
		    </div>
	    </div>
	  )
	}
}
export default Skills