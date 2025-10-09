import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/search.svg";
import useApps from "../../Hooks/useApps";
import App from "../App/App";
import AppError from "../App Error/AppError";
import Skeleton from "../Skeleton/Skeleton";

const Apps = () => {
	const { apps, loading } = useApps();
	const [search, setSearch] = useState("");
	const [searching, setSearching] = useState(false);
	const [filteredApps, setFilteredApps] = useState([]);

	useEffect(() => {
		if (!loading) setFilteredApps(apps);
	}, [apps, loading]);

	useEffect(() => {
		if (!apps.length) return;

		setSearching(true);
		const timer = setTimeout(() => {
			const query = search.trim().toLowerCase();

			if (query === "") {
				setFilteredApps(apps);
			} else {
				const results = apps.filter((app) =>
					app.title.trim().toLowerCase().includes(query)
				);
				setFilteredApps(results);
			}

			setSearching(false);
		}, 600);

		return () => clearTimeout(timer);
	}, [search, apps]);

	const totalApps = filteredApps.length;

	return (
		<div className="container mx-auto text-center">
			{/* Header */}
			<div className="mx-2 lg:mx-0 mb-5 lg:mb-10">
				<h1 className="text-[#001931] text-2xl lg:text-5xl font-bold mb-2 lg:mb-4">
					Our All Applications
				</h1>
				<p className="text-[#627382] text-base lg:text-xl">
					Explore All Apps on the Market developed by us. We code for Millions
				</p>
			</div>

			{/* Search bar */}
			<div className="lg:flex items-center justify-between mb-4">
				<h3 className="text-start text-2xl font-semibold text-[#001931] mb-2 lg:mb-0 mx-2 lg:mx-0">
					{`(${totalApps}) Apps found`}
				</h3>
				<div className="flex items-center gap-2 border border-[#D2D2D2] rounded-sm py-3 px-4 mx-2 lg:mx-0">
					<img src={searchIcon} alt="Search" />
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

			{/* Content */}
			{loading || searching ? (
				<Skeleton count={12} />
			) : (
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-5 lg:mb-20">
					{filteredApps.map((app) => (
						<App key={app.id} app={app} />
					))}
				</div>
			)}

			{/* No Results */}
			<div className="container mx-auto text-center mb-5 lg:mb-20">
				{!loading && !searching && totalApps === 0 && <AppError />}
			</div>
		</div>
	);
};

export default Apps;
