import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
	return (
		<div className="bg-[#F5F5F5]">
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
			<ToastContainer />
		</div>
	);
};

export default Root;
