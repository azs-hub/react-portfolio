import React, { Component } from "react";
import { ProgressBar } from 'react-bootstrap';
import Fade from "react-reveal/Fade"
import Spin from "react-reveal/Spin"
import Zoom from "react-reveal/Zoom"

import data from "../shared_data"


class Skills extends Component {

	RenderSpinSkill(show, skillCat) {
		return (
			<Spin delay={2000}>
	    	<div className="row justify-content-center mt-3">
	      	{skillCat.skills.map((skill, index) => (
	      		<div className="col-1">
	          	<img src={skill.class} alt="css"></img>
	          </div>
	        ))}
	    	</div>
	    </Spin>
    )
	}

	SkillTitleRevealed(value) {
		return true;
	}

	RenderSkill(skillCat) {
		var isShown = 0;
		var show = false;
		return (
  		<Fade cascade left onReveal={ () => show=true }>
      	<h4>{skillCat.name}</h4>
				<ProgressBar now={skillCat.level} />
				<Zoom when={show}>
					<h1>LOL</h1>
				</Zoom>
			</Fade>
    )
	}

	render() {
		return (
	    <div className="section" id="skills">
	      <div className="container-md">
	      	<div className="row">
	        	<div className="col-sm-12">
		          <h2>Skills</h2>
		        </div>
		        {data.skills.map((skillCat, index) => (
		        	<div className="col-sm-12 mt-5 mb-5 text-center">
			        	<Fade cascade left>
						    	<h4>{skillCat.name}</h4>
									<ProgressBar now={skillCat.level} />
									<Zoom delay={1000}>
							    	<div className="row justify-content-center mt-3 icon-greyscale">
							      	{skillCat.skills.map((skill, index) => (
							      		<div className="col-1">
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