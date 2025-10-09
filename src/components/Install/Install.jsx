import { useEffect, useState } from "react";

const Install = () => {

	const [appList, setAppList] = useState([]);
	useEffect(()=>{
		
	}, [])


	return (
		<div className="container mx-auto">
			<div className="text-center">
				<h1 className="text-[#001931] text-3xl lg:text-5xl font-bold mb-4">
					Your Installed Apps
				</h1>
				<p className="text-[#627382] text-lg lg:text-xl font-medium mb-5 lg:mb-10">
					Explore All Trending Apps on the Market developed by us
				</p>
			</div>
			<div className="lg:flex justify-between items-center text-center">
				<p className="text-[#001931] text-2xl font-semibold mb-2 lg:mb-0">
					1 Apps Found
				</p>
				<select id="sort" name="sort">
					<option value="sort-by-size">Sort By Size</option>
					<option value="high-low">High-Low</option>
					<option value="low-high">Low-High</option>
				</select>
			</div>
		</div>
	);
};

export default Install;
