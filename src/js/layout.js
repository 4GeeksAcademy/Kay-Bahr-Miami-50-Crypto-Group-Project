import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Favorites } from "./views/favorites";
import { Top } from "./views/top";
import { Bottom } from "./views/bottom";
import { Footer } from "./component/footer";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import App from "./views/App";
import { Login } from "./views/Login";
import { Register } from "./views/Register";





//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			
			<BrowserRouter basename={basename}>
				
				<ScrollToTop>
					<Navbar />
					<Sidebar/>
					
					<Routes>
						
						<Route path="/" element={<Home />} />
						<Route path="/App" element={<App />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="/top" element={<Top />} />
						<Route path="/bottom" element={<Bottom />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
				
			</BrowserRouter>
			
		</div>
	);
};

export default injectContext(Layout);
