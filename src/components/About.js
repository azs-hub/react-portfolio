import React from "react"
import SectionName from "./SectionName";
import data from "../shared_data"
import Fade from "react-reveal/Fade"

const About = () => {
	var profilepic = "images/" + data.basic_info.profile_picture;
  return (
    <div className="section" id="about">
      <div className="container-md">
      	<SectionName title="About Me" />
        <div className="row">
	        <div className="col-sm-5">
	          <Fade left>
		       		<img
		       			className="img-fluid"
	              src={profilepic}
	              alt="Avatar placeholder"
	            />
	          </Fade>
	        </div>
	        <div className="col-sm-7 introduction">
	        	<Fade right>
	        		<p>
		            {data.aboutParaOne}
		          </p>
		         	<p>
		            {data.aboutParaTwo}
		          </p>
		          <p>
		            {data.aboutParaThree}
		          </p>
		        </Fade>
	        </div>
	      </div>
      </div>
    </div>
  )
}

export default About
