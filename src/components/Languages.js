import React, { Component } from "react";
import { ProgressBar } from 'react-bootstrap';
import Fade from "react-reveal/Fade"
import Spin from "react-reveal/Spin"
import Zoom from "react-reveal/Zoom"

import data from "../shared_data"


class Languages extends Component {

	render() {

		var languages = data.languages.map((language, index) => {
			var level = [...Array(10)].map((x, i) => {
				return (
					<div className={"dots-progress-dot " + (i < language.level ? 'dots-progress-dot-active' : '')}></div>
				)
			});
			return (
				<div className="row align-items-center mt-5">
	        <Fade left>
        		<div className="col-sm-5 language-title">
				    	<h4>{language.name}</h4>
				    	<p>{language.subtitle}</p>
	        	</div>
					</Fade>
					<Fade right>
		        <div className="col-sm-7 language-level">
			      	{level}
			      </div>
			    </Fade>
	      </div>
	    )
		});
		return (
	    <div className="section" id="languages">
	      <div className="container-md">
	      	<div className="row">
	        	<div className="col-sm-12">
		          <h2>Languages</h2>
		        </div>
		      </div>
	       	{languages} 
		    </div>
	    </div>
	  )
	}
}
export default Languages