import React from 'react'

const Founder = ({name,img,about,instagram,linkedin,facebook}) => {
  return (
		<div className="container">
			<div className="container-box">
				<div className="box1">
					<img className='founderImg' src={img}></img>
				</div>
                      <p>{name}</p>
					<div className='social-website'>
						<a href={instagram}>
							<i className="fa-brands fa-instagram"></i>
						</a>
						<a href={facebook}>
							<i className="fa-brands fa-square-facebook"></i>
						</a>
						<a href={linkedin}></a>
					</div>
			</div>
			<p className="about-box">
				{about}
			</p>
		</div>
	);
}

export default Founder