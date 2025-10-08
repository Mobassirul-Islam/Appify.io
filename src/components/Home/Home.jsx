import { Link } from "react-router";
import playStore from "../../assets/play store.svg";
import appStore from "../../assets/app store.svg";
import banner from "../../assets/hero.png";

const Home = () => {
	return (
		<div>
			{/* Header */}
			<div className="text-center">
				<h1 className="text-[#001931] text-3xl lg:text-7xl font-black mb-5">
					We Build <br />{" "}
					<span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
						Productive
					</span>{" "}
					Apps
				</h1>
				<p className="text-base lg:text-xl text-[#627382] mb-5 lg:mb-10 px-2">
					At APPIFY.IO, we craft innovative apps designed to make everyday life
					simpler, smarter, and more exciting. <br /> Our goal is to turn your
					ideas into digital experiences that truly make an impact.
				</p>
				<div className="flex justify-center items-center gap-3 mb-5 lg:mb-10">
					<Link
						to="https://play.google.com/store/games?device=windows&hl=en"
						className="flex justify-center items-center gap-1 cursor-pointer lg:text-xl font-medium border border-[#D2D2D2] rounded-sm py-1 lg:py-3 px-2 lg:px-6"
					>
						<img src={playStore} alt="" />
						Google Play
					</Link>
					<Link
						to="https://www.apple.com/app-store/"
						className="flex justify-center items-center gap-1 cursor-pointer lg:text-xl font-medium border border-[#D2D2D2] rounded-sm py-1 lg:py-3 px-2 lg:px-6"
					>
						<img src={appStore} alt="" />
						App Store
					</Link>
				</div>
				{/* Banner */}
				<div className="flex justify-center items-center px-2">
					<img src={banner} alt="banner" />
				</div>
				{/* Banner info */}
				<div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-5 lg:p-20 mb-5 lg:mb-20">
					<h3 className="text-white text-xl lg:text-5xl font-bold mb-5 lg:mb-10">
						Trusted by Millions, Built for You
					</h3>
					<div className="flex flex-col lg:flex-row justify-around items-center gap-5 text-white">
						<div className="bg-amber-500 hover:animate-pulse cursor-pointer p-4 rounded-2xl w-[220px]">
							<p className="mb-2">Total Downloads</p>
							<h1 className="text-3xl lg:text-6xl font-extrabold mb-2">
								29.6M
							</h1>
							<p>21% more than last month</p>
						</div>
						<div className="bg-pink-500 hover:animate-pulse cursor-pointer p-4 rounded-2xl w-[220px]">
							<p className="mb-2">Total Reviews</p>
							<h1 className="text-3xl lg:text-6xl font-extrabold mb-2">906K</h1>
							<p>46% more than last month</p>
						</div>
						<div className="bg-green-500 hover:animate-pulse cursor-pointer p-4 rounded-2xl w-[220px]">
							<p className="mb-2">Active Apps</p>
							<h1 className="text-3xl lg:text-6xl font-extrabold mb-2">132+</h1>
							<p>31 more will Launch</p>
						</div>
					</div>
				</div>
			</div>
			{/* Trending apps */}
			<div className="container mx-auto text-center px-2">
				<h3 className="text-[#001931] text-3xl lg:text-5xl font-bold mb-4">
					Trending Apps
				</h3>
				<p className="text-base lg:text-xl text-[#627382] mb-5 lg:mb-10">
					Explore All Trending Apps on the Market developed by us
				</p>
				{/* Cards section */}
				<div>
					{/* Card */}
					
				</div>
			</div>
		</div>
	);
};

export default Home;
