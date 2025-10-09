import { useParams } from "react-router";
import useApps from "../../Hooks/useApps";
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import like from "../../assets/icon-review.png";
import { useState } from "react";
import {
	Bar,
	BarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { toast } from "react-toastify";

const AppDetails = () => {
	const { id } = useParams();
	const { apps, loading } = useApps();
	const [installed, setInstalled] = useState(false);

	const app = apps.find((a) => String(a.id) === id);
	if (loading) return <p>Loading....</p>;

	const {
		image,
		title,
		companyName,
		downloads,
		ratingAvg,
		reviews,
		size,
		ratings,
		description,
	} = app || {};

	const sortedRatings = [...ratings].sort((a, b) =>
		b.name.localeCompare(a.name)
	);

	const handleInstall = () => {
		const existingInstall = JSON.parse(localStorage.getItem("installList"));
		let updatedInstall = [];
		if (existingInstall) {
			const isInstalled = existingInstall.some((a) => a.id === app.id);
			if (isInstalled) {
				toast("Already Installed");
				return setInstalled(true);
			}
			updatedInstall = [...existingInstall, app];
			setInstalled(true);
			toast("Installed Successfully");
		} else {
			updatedInstall.push(app);
			setInstalled(true);
			toast("Installed Successfully");
		}
		localStorage.setItem("installList", JSON.stringify(updatedInstall));
		setInstalled(true);
	};

	return (
		<div className="container mx-auto">
			<div className="lg:flex justify-start items-center gap-10 mx-2 lg:mx-0">
				<div className="bg-white rounded-lg">
					<img className="w-[350px]" src={image} alt="" />
				</div>
				<div className="flex-1 mt-5 lg:mt-0">
					<div className="mb-3 lg:mb-8">
						<h3 className="text-[#001931] text-3xl font-bold mb-2">{title}</h3>
						<p className="text-[#627382] text-xl font-semibold">
							Developed By{" "}
							<span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
								{companyName}
							</span>
						</p>
					</div>
					<hr className="border-[#00193120] mb-3 lg:mb-8" />
					<div className="flex justify-around lg:justify-start items-center gap-2 lg:gap-10 mb-5 lg:mb-8">
						<div>
							<img className="mb-2" src={download} alt="" />
							<p className="text-[#001931] lg:text-base">Downloads</p>
							<h3 className="text-[#001931] text-xl lg:text-[40px] font-extrabold">
								<span>{downloads}</span>M
							</h3>
						</div>
						<div>
							<img className="mb-2" src={star} alt="" />
							<p className="text-[#001931] lg:text-base">Average Ratings</p>
							<h3 className="text-[#001931] text-xl lg:text-[40px] font-extrabold">
								{ratingAvg}
							</h3>
						</div>
						<div>
							<img className="mb-2" src={like} alt="" />
							<p className="text-[#001931] lg:text-base">Total Reviews</p>
							<h3 className="text-[#001931] text-xl lg:text-[40px] font-extrabold">
								<span>{reviews}</span>K
							</h3>
						</div>
					</div>
					<div>
						<button
							onClick={handleInstall}
							disabled={installed}
							className={`bg-[#00D390] text-white py-2 px-3 rounded-sm text-xl font-semibold cursor-pointer`}
						>
							{installed ? "Installed" : "Install Now"} (<span>{size}</span> MB)
						</button>
					</div>
				</div>
			</div>
			<hr className="border-[#00193120] mx-2 lg:mx-0 my-5 lg:my-10" />
			{/* Chart */}
			<div className="container mx-auto">
				<h1 className="text-[#001931] text-2xl font-semibold mb-3 lg:mb-6 mx-2 lg:mx-0">
					Ratings
				</h1>
				<div className="w-full h-96 px-2 lg:px-0">
					<ResponsiveContainer className="" width="100%" height="100%">
						<BarChart
							width={500}
							height={300}
							data={sortedRatings}
							layout="vertical"
							barSize={20}
						>
							<XAxis type="number" axisLine={false} tickLine={false} />
							<YAxis
								type="category"
								dataKey="name"
								axisLine={false}
								tickLine={false}
							/>
							<Tooltip />
							<Bar dataKey="count" fill="#FF8811" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
			<hr className="border-[#00193120] mx-2 lg:mx-0 my-5 lg:my-10" />
			{/* Description */}
			<div className="mx-2 lg:mx-0 mb-5 lg:mb-20">
				<h1 className="text-[#001931] text-2xl font-semibold mb-3 lg:mb-6">
					Description
				</h1>
				<p className="text-[#627382] text-xl">{description}</p>
			</div>
		</div>
	);
};

export default AppDetails;
