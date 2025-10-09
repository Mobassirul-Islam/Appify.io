import { Outlet, useNavigation } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Skeleton from "./components/Skeleton/Skeleton";

const Root = () => {
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";

	return (
		<div className="bg-[#F5F5F5]">
			<Navbar></Navbar>
			{isLoading && <Skeleton></Skeleton>}
			<Outlet></Outlet>
			<Footer></Footer>
			<ToastContainer />
		</div>
	);
};

export default Root;
