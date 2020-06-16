import React, { useRef, Component } from 'react';
import { motion } from 'framer-motion';
import MyHeader from './stickyheader';
import Slide from 'react-reveal/Slide';
import '../cssfiles/section1.css';

class Fullbackground extends Component {
	constructor(props) {
		super(props);
		this.cursor = React.createRef();
	}
	render() {
		return (
			<>
				<section className="background">
					<div className="fullvideo">
						<div className="header">
							<ul id="menu">
								<li class="active" active>
									<a href="#services1">services</a>
								</li>
								<li>
									<a href="#projects1">projects</a>
								</li>
								<li>
									<a href="#contacts1">contacts</a>
								</li>
								{/* <li data-menuanchor="fourthPage">
									<a href="#fourthPage">Fourth section</a>
								</li> */}
							</ul>
						</div>
						{/* <video src="../../background.mp4" autoPlay muted loop></video> */}
						<div className="videotext">
							<h1>NotionCrew</h1>
							<div className="videotext2">
								<p>
									<span>
										Notioncrew Creative Agency was founded in 2018 by an
										experienced and <br /> professional team,Working in various
										Visual fields . Our main strenght point
										<br />
										is our ability in Visual work Through this relatively short
										period
									</span>
								</p>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}
export default Fullbackground;
