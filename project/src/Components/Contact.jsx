import React from "react";
import contact from'../assets/HomePagePics/4.jpg'
const Contact = () => {
	return (
		<>
			<div id="img-map">
				<div id="box1">
					<img src={contact} alt="" height="100%"></img>
				</div>
				<div id="box2">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1402032258297!2d75.8454958!3d22.7601776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630264f7ea0f4b%3A0xc733adac2a6915e9!2s2%2C%20Sanwer%20Rd%2C%20Sector%20D%2C%20Malti%20Vanaspati%2C%20Indore%2C%20Madhya%20Pradesh%20452015!5e0!3m2!1sen!2sin!4v1728669452616!5m2!1sen!2sin"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
			<div>
				<div id="content">
					<div id="contact">
						<div>
							<h3>CONTACT US :</h3>
							<p>
								<i className="fa-solid fa-phone-volume"></i> +91 9179065696
							</p>
							<p>
								<i className="fa-solid fa-envelope"></i>{" "}
								gharghattispices@gmail.com
							</p>
							<p>
								<i className="fa-solid fa-location-dot"></i> Ward 2 behind bsnl
								tower sanwer Dist Indore Pin 453551{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
