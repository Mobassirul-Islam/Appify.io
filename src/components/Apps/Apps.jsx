import searchIcon from "../../assets/search.svg";
import App from "../App/App";
import { useState } from "react";
import AppError from "../App Error/AppError";
import useApps from "../../Hooks/useApps";

const Apps = () => {
	const {apps} = useApps();
	const [search, setSearch] = useState("");
	const validateSearch = search.trim().toLowerCase();

	const searchedApps = validateSearch
		? apps.filter((app) =>
				app.title.trim().toLowerCase().includes(validateSearch)
		  )
		: apps;

	return (
		<div className="container mx-auto text-center">
			<div className="mx-2 lg:mx-0 mb-5 lg:mb-10">
				<h1 className="text-[#001931] text-2xl lg:text-5xl font-bold mb-2 lg:mb-4">
					Our All Applications
				</h1>
				<p className="text-[#627382] text-base lg:text-xl">
					Explore All Apps on the Market developed by us. We code for Millions
				</p>
			</div>
			{/* Apps section */}
			{/* input */}
			<div className="lg:flex items-center justify-between mb-4">
				<h3 className="text-start text-2xl font-semibold text-[#001931] mb-2 lg:mb-0 mx-2 lg:mx-0">
					{`(${searchedApps.length}) Apps found`}
				</h3>
				<div className="flex items-center gap-2 border border-[#D2D2D2] rounded-sm py-3 px-4 mx-2 lg:mx-0">
					<img src={searchIcon} alt="" />
					<input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="outline-none text-[#627382] text-base"
						name="search"
						type="search"
						placeholder="Search Apps"
					/>
				</div>
			</div>
			{/* Apps */}
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-5 lg:mb-20">
				{searchedApps.map((app) => (
					<App key={app.id} app={app}></App>
				))}
			</div>
			<div className="container mx-auto text-center mb-5 lg:mb-20">
				{searchedApps.length == 0 && <AppError></AppError>}
			</div>
		</div>
	);
};

export default Apps;
