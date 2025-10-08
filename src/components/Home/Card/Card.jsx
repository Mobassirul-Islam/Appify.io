import download from "../../../assets/icon-downloads.png";
import star from "../../../assets/icon-ratings.png";

const Card = ({ app }) => {
	return (
		<div className="bg-white rounded-lg p-4 mx-2 lg:mx-0">
			<div className="flex items-center">
				<img className="rounded-lg w-full mb-4 bg-[#D9D9D9]" src={app.image} alt="" />
			</div>
			<h5 className="text-[#001931] text-lg text-start font-medium mb-4">
				{app.title}
			</h5>
			<div className="flex justify-between items-center">
				<p className="text-[#00D390] bg-[#F1F5E8] rounded-sm py-1.5 px-2.5 flex items-center justify-center gap-1.5">
					<img className="w-[16px]" src={download} alt="" />
					{app.downloads}
				</p>
				<p className="text-[#FF8811] bg-[#FFF0E1] rounded-sm py-1.5 px-2.5 flex items-center justify-center gap-1.5">
					<img className="w-[16px]" src={star} alt="" />
					{app.ratingAvg}
				</p>
			</div>
		</div>
	);
};

export default Card;
