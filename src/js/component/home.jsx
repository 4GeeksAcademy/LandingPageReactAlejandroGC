import React from "react";
import Navbar from "./navbar";
import Containers from "./containers";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<Containers/>
			<Footer/>
		</>
	);
};

export default Home;
