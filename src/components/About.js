import React from "react"
import data from "../shared_data"
import Fade from "react-reveal/Fade"
import Zoom from 'react-reveal/Zoom';


const About = () => {
	var profilepic = "images/" + data.basic_info.profile_picture;
  return (
    <div className="section" id="about">
      <div className="container-md">
        <div className="row">
	        <div className="col-sm-12">
	        	<h2>About Me</h2>
	        </div>
	        <div className="col-sm-5">
	          <Zoom bottom>
		       		<img
		       			className="img-fluid"
	              src={profilepic}
	              alt="Avatar placeholder"
	            />
	          </Zoom>
	        </div>
	        <div className="col-sm-7 introduction">
	        	<Fade bottom cascade>
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
