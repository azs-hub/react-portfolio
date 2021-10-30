import data from "../shared_data"
import Fade from "react-reveal/Fade"

const Contact = () => {
	return (
		<div className="section" id="contact">
			<div className="container-lg">
				<div className="text-center mb-5">
					
				</div>
				<div className="d-flex align-items-center justify-content-center">
					<div className="text-center">
						<Fade right>
							<img src='images/lotus.svg' alt='lotus' />
							<h2>{data.basic_info.contact}</h2>
						</Fade>
						<Fade left>
							<ul className="list-unstyled list-inline mt-2 mb-5 icon-greyscale">
								<li className="list-inline-item mr-5">
									<a href="https://www.linkedin.com/in/anais-siba-5483b127/" target="_blank" rel="noopener noreferrer">
										<img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="linkedin" />
									</a>
								</li>
								<li className="list-inline-item">
									<a href="https://github.com/sibaAnais" target="_blank" rel="noopener noreferrer">
										<img width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
									</a>
								</li>
							</ul>
							<a className="btn btn-dark" href="./images/cv_en.pdf">
								DOWNLOAD MY RESUME
							</a>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact