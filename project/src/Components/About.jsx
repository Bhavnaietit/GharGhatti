import React from "react";
import Founder from "./Founder";
import taiMaImg from "../assets/AboutPics/taima.jpg";
import img1 from "../assets/AboutPics/1.jpg";
import img2 from "../assets/AboutPics/2.jpg";
import img3 from "../assets/AboutPics/3.jpg";
import img4 from "../assets/AboutPics/4.jpg";
import img5 from "../assets/AboutPics/5.jpg";
import img6 from "../assets/AboutPics/6.jpg";
import img7 from "../assets/AboutPics/7.jpg";
import img8 from "../assets/AboutPics/8.jpg";
import AboutContent from "./AboutContent";
import homeimg from "../assets/HomePagePics/HomeImage.jpg";
import './About.css'
const About = () => {
	return (
		<div>
			<div id="imgBox">
				<img src={homeimg}>
				</img>
			</div>
				<AboutContent
					img={img1}
					heading={"What is in our Product?"}
					aboutList={[
						{
							"Rich in Nutrients": "Packed with vitamins and antioxidants",
						},
						{ "Immunity-boosting": " Fights infections naturally." },
						{ Flavorful: " Bold, authentic taste." },
						{ Healing: "Aids digestion and reduces inflammation." },
					]}
					workingImg={img2}></AboutContent>
				<AboutContent
					img={img3}
					heading={"Why we are Different?"}
					aboutList={[
						{ "100% Pure and authentic": ">Highest quality spices." },
						{ "Ethically sourced": " Supporting sustainability." },
						{ "Enhances Flavor": " Custom-crafted for flavor." },
						{ " Health benefits": "Natural wellness in every spice." },
					]}
					workingImg={img4}></AboutContent>
				<div className="img-content">
							<img src={img5} alt=""></img>
							<img src={img6} alt=""></img>
							<img src={img7} alt=""></img>
							<img src={img8} alt=""></img>
				</div>
				<Founder
					name={"NIKITA JAIN"}
					about={`Hello this is nikita jain
               founder of GharGhati spices
               we work with rular area womens  and we created this for 
               impoverment of womens and this idea I got from my home when I want to cook natural food with natural spices 
               ,but I didn't find anywhere natural foods.
               So I decided I start a small bussiness of spices`}
					instagram={"#"}
					linkedin={"#"}
					facebook={"#"}></Founder>
				<Founder
					name={"PRATIBHA JAIN"}
					img={taiMaImg}
					about={`Hello this is nikita jain
               founder of GharGhati spices
               we work with rular area womens  and we created this for 
               impoverment of womens and this idea I got from my home when I want to cook natural food with natural spices 
               ,but I didn't find anywhere natural foods.
               So I decided I start a small bussiness of spices`}
					instagram={"#"}
					linkedin={"#"}
					facebook={"#"}></Founder>
		</div>
	);
};

export default About;
