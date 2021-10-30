import React, { Component } from "react";
import Fade from "react-reveal/Fade"
import SectionName from "./SectionName";
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
	      	<SectionName title="Languages" />
	       	{languages} 
		    </div>
	    </div>
	  )
	}
}
export default Languages