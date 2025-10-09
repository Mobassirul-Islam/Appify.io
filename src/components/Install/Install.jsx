import { useEffect, useState } from "react";
import star from "../../assets/icon-ratings.png";
import downloadIcon from "../../assets/icon-downloads.png";
import { toast } from "react-toastify";
import AppError from "../App Error/AppError";

const Install = () => {
	const [sortOrder, setSortOrder] = useState("none");
	const [appList, setAppList] = useState([]);

	useEffect(() => {
		const installedApps = JSON.parse(localStorage.getItem("installList"));
		if (installedApps) setAppList(installedApps);
	}, []);

	const sortedApps = (() => {
		if (sortOrder === "high-low") {
			return [...appList].sort((a, b) => b.downloads - a.downloads);
		} else if (sortOrder === "low-high") {
			return [...appList].sort((a, b) => a.downloads - b.downloads);
		} else {
			return appList;
		}
	}) ()

	const handleUninstall = (id) => {
		const existingInstall = JSON.parse(localStorage.getItem("installList"));
		let updatedInstall = existingInstall.filter(ex => ex.id !== id);
		setAppList(updatedInstall)
		toast("Uninstalled Successfully")
		localStorage.setItem("installList", JSON.stringify(updatedInstall));
	}

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
			<div className="lg:flex justify-between items-center text-center mb-2 lg:mb-4">
				<p className="text-[#001931] text-2xl font-semibold mb-2 lg:mb-0">
					{sortedApps.length} Apps Found
				</p>
				{/* sort */}
				<label className="form-control w-full max-w-xs">
					<select
						className="select select-bordered text-base "
						value={sortOrder}
						onChange={(e) => setSortOrder(e.target.value)}
					>
						<option value="none">Sort By Size</option>
						<option value="high-low">High-Low</option>
						<option value="low-high">Low-High</option>
					</select>
				</label>
			</div>

			{/* If no apps found */}
			<div>
				{
					sortedApps.length == 0 && <AppError></AppError>
				}
			</div>

			{/* installed apps */}
			<div className="flex flex-col gap-2 lg:gap-4 mb-5 lg:mb-20">
				{/* apps list */}
				{sortedApps.map((app) => (
					<div className="bg-white rounded-md flex justify-between items-center p-4 mx-2 lg:mx-0">
						<div className="flex items-center gap-3">
							<img
								className="bg-[#D9D9D9] rounded-sm w-[80px]"
								src={app.image}
								alt=""
							/>
							<div className="">
								<h3 className="text-[#001931] text-xl font-medium mb-0.5 lg:mb-4">
									{app.title}
								</h3>
								<div className="lg:flex items-center gap-2">
									<div className="flex items-center gap-1">
										<img className="w-[16px]" src={downloadIcon} alt="" />
										<p className="text-[#00D390]">{app.downloads}M</p>
									</div>
									<div className="flex items-center gap-1">
										<img className="w-[16px]" src={star} alt="" />
										<p className="text-[#FF8811]">{app.ratingAvg}</p>
									</div>
									<div>
										<p className="text-[#627382]">{app.size}MB</p>
									</div>
								</div>
							</div>
						</div>
						<div>
							<button onClick={()=>{handleUninstall(app.id)}} className="bg-[#00D390] text-lg font-semibold cursor-pointer text-white py-2 px-3 rounded-sm">
								Uninstall
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Install;
