import errorImg from "../../assets/App-Error.png";
import { Link } from "react-router";

const AppError = () => {
    
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<div className="flex flex-col justify-center items-center gap-4 mx-3 lg:mx-0 text-center">
			<img src={errorImg} alt="" />
			<h3 className="text-[#001931] text-5xl font-semibold">
				OPPS!! APP NOT FOUND
			</h3>
			<p className="text-[#627382] text-xl">
				The App you are requesting is not found on our system. please try
				another apps
			</p>
			<Link
				onClick={scrollToTop}
				to="/"
				className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-base font-semibold py-2 px-4 rounded-sm cursor-pointer mb-5"
			>
				Go Back!
			</Link>
		</div>
	);
};

export default AppError;
