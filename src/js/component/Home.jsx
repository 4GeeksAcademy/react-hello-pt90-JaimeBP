import React from "react";

import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container my-5">
				<div className="row">
					<Card title="Labrador" text="El Labrador es un perro amistoso, enérgico y leal, ideal para familias y actividades al aire libre." imgUrl="https://nlv.nu/wp-content/uploads/2022/06/8R0A7422-gespiegeld-scaled-500x325.jpg" />
					<Card title="Husky Siberiano" text="El Husky es un perro resistente y sociable, conocido por su espíritu libre y sus ojos cautivadores." imgUrl="https://abeceda-zahrada.cz/wp-content/uploads/husky-3186036_640-500x325.jpg" />
					<Card title="Golden Retriever" text="El Golden Retriever es afectuoso, inteligente y juguetón, famoso por ser una excelente mascota familiar." imgUrl="https://trydogwebs.net/scion/wp-content/uploads/2018/11/golden-stack-500x325.jpg" />
					<Card title="Pastor Alemán" text="El Pastor Alemán es protector, valiente y obediente, perfecto como compañero y perro de trabajo." imgUrl="https://balancedogs.com/wp-content/uploads/2023/06/cachorros-programa.png" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
