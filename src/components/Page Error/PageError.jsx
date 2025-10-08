import { Link } from "react-router";
import error from "../../assets/error-404.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PageError = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<div>
			<Navbar></Navbar>
			<div className="container mx-auto mb-5 lg:mb-20">
				<div className="mx-2 lg:mx-0 text-center">
					<div className="flex items-center justify-center mb-4">
						<img src={error} alt="" />
					</div>
					<h1 className="text-[#001931] text-3xl lg:text-5xl font-semibold mb-2">
						Oops, page not found!
					</h1>
					<p className="text-[#627382] text-xl mb-4">
						The page you are looking for is not available.
					</p>
					<Link
						onClick={scrollToTop}
						to="/"
						className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-base font-semibold py-2 px-4 rounded-sm cursor-pointer"
					>
						Go Back!
					</Link>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default PageError;
