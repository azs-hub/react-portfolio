import React from "react"
import data from "../shared_data"
import Fade from "react-reveal/Fade"
import Zoom from 'react-reveal/Zoom';


const About = () => {
	var profilepic = "images/" + data.basic_info.profile_picture;
  return (
    <div className="section" id="about">
      <div className="container-md fh">
        <div className=" d-flex align-items-center justify-content-center">
	        <div className="col-sm-8">
	        	<Fade bottom cascade>
		          <div>
		            <h2>About Me</h2>
		          </div>
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
	        <div className="col-sm-4">
	        	<Zoom bottom>
		       		<img
		       			className="img-fluid"
	              src={profilepic}
	              alt="Avatar placeholder"
	            />
	          </Zoom>
	        </div>
	      </div>
      </div>
    </div>
  )
}

export default About
