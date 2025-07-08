import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container pt-5">
				<Jumbotron />
				<div className="row">
					<Card
						name="Euro"
						imagen="https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg"
						description="Envia tus euros a cualquier parte del mundo"
						button="Comenzar"
						/>
					<Card
						name="Dolar"
						imagen="https://militaryrange.de/Content/custom/img_products_small/16762000.jpg?v=20200215105330"
						description="Envia tus Dolares a cualquier parte del mundo"
						button="Comenzar"
						/>
					<Card
						name="Pesos Chilenos"
						imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/250px-Flag_of_Chile.svg.png"
						description="Envia tus Pesos Chilenos a cualquier parte del mundo"
						button="Comenzar"
						/>
					<Card
						name="Soles"
						imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/250px-Flag_of_Peru.svg.png"
						description="Envia tus Soles a cualquier parte del mundo"
						button="Comenzar"
						/>
				</div>
			</div>
			<Footer />
		</div>
		
	);
};

export default Home;