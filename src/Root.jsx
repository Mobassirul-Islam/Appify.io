import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Root = () => {
	return (
		<div className="bg-[#F5F5F5]">
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Root;
